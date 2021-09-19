/* eslint-disable no-unused-vars */
/* eslint-disable no-extra-semi */
/* eslint-disable no-console */
// ==UserScript==
// @name         知乎一键删除、清空助手
// @namespace    https://greasyfork.org/zh-CN/users/812943
// @version      0.0.1
// @description  一键批量删除知乎文章、回答、想法
// @author       gafish
// @match        https://www.zhihu.com/*
// @license      MIT
// @require      https://greasyfork.org/scripts/415581-jquery%E5%BA%93/code/jquery%E5%BA%93.js?version=866373
// @require      https://greasyfork.org/scripts/26454-jquery-cookie/code/jQuery%20Cookie.js?version=169689
// @grant        none
// ==/UserScript==

;(function (jquery) {
  'use strict'

  // 小助手类
  function CleanHelper(config = {}) {
    this.config = Object.assign(
      {
        // 初始化配置
        title: '一键清空助手',
        container: jquery('body'),
        menuList: [],
      },
      config,
    )

    this.container = this.config.container
    this.menu = jquery('<div />')
    this.btn = jquery('<div />')
    this.notice = jquery('<div />')

    this.fold = false
    this.stop = false

    const utils = {
      // 检查是否在当前页
      checkURL: (url, title) => {
        const isCurrent = url && window.location.href.indexOf(url) !== -1

        if (!isCurrent) {
          const r = confirm('当前操作需要前往 ' + title + ' 页面，是否跳转？')

          if (r === true) {
            window.location.href = url
          }
        }

        return isCurrent
      },

      // alert fail
      alertFail: (jqXHR, textStatus, errorThrown) => {
        var error = '状态码:' + jqXHR.status + ',异常:' + errorThrown
        alert('读取数据失败,请稍后重试\n' + error)
      },

      // 串行Promise
      serialPromise: (promises, callback) => {
        let i = 0
  
        const next = () => {
          if (i < promises.length) {
            promises[i++]().then(next)
          } else {
            callback()
          }
        }
  
        next()
      },

      // log
      log: (...args) => {
        console.log(`${this.config.title}:`, ...args)
      },
    }

    this.batchDelete = (cfg = {}) => {
      cfg = Object.assign({
        pageURL: '',
        pageTitle: '',
        listURL: '',
        deleteURL: '',
        onHandleResponse: () => {},
        onHandleParams: () => {},
      }, cfg)

      // 获取列表
      const getList = () => {
        if (this.stop) return
    
        jquery.ajax({
          url: cfg.listURL,
          type: 'GET',
          dataType: 'json',
        })
          .done(function (res) {

            const list = cfg.onHandleResponse && cfg.onHandleResponse(res)

            if (list) {
              // 循环promise
              const promisesTask = list.map((item, index) => {
                return () =>
                  new Promise(resolve => {
                      const params = cfg.onHandleParams && cfg.onHandleParams(item)
    
                      if (this.stop) return
    
                      deleteItem(params).done(resolve)
                  })
              })
    
              utils.serialPromise(promisesTask, () => {
                setTimeout(() => {
                  getList()
                }, 1000)
              })
            }
          })
          .fail(utils.alertFail)
      }
    
      // 移除
      const deleteItem = (params = {}) => {
        return jquery
          .ajax({
            url: cfg.deleteURL,
            contentType: 'application/json;charset=UTF-8',
            type: 'POST',
            dataType: 'json',
            headers: cfg.headers,
            data: JSON.stringify(params),
          })
          .done(function (res) {
            utils.log('已删除', id, res)
          })
          .fail(utils.alertFail)
      }

      if (!utils.checkURL(cfg.pageURL, cfg.pageTitle)) return
  
      const r = confirm('想清楚了吗？这是要清空所有的数据哦，确定吗？')
  
      if (r === true) {
        this.showNotice('马上开始移除收藏')
  
        getList()
      }
    }
    this.showNotice = (content = '') => {
      this.notice.html(content)
    }

    /** ===== 初始化 ===== */

    // 初始化菜单
    this.initMenu = () => {
      const main = jquery('<div>')
      const hideBtn = jquery('<div>')

      main.css({
        width: 140,
        border: '3px solid #f00',
        background: '#fff',
        zIndex: 9999,
        fontSize: 14,
        textAlign: 'center',
      })

      hideBtn
        .css({
          width: 40,
          height: 20,
          background: '#fff',
          border: '1px solid #f00',
          cursor: 'pointer',
          lineHeight: '20px',
          textAlign: 'center',
          fontSize: 12,
        })
        .text('收起')
        .click(() => {
          this.fold = !this.fold

          if (this.fold) {
            hideBtn.text('展开')
            main.hide()
          } else {
            hideBtn.text('收起')
            main.show()
          }
        })

      this.config.menuList.forEach((item, index) => {
        const div = jquery(`<div>${item.text}</div>`)

        div
          .css({
            cursor: 'pointer',
            padding: '5px 10px',
            borderTop: index === 0 ? '' : '1px solid #f00',
          })
          .click(() => {
            if (item.onClick) item.onClick()
          })

        main.append(div)
      })


      this.menu
        .css({
          position: 'fixed',
          top: 80,
          left: 10,
        })
        .append(hideBtn)
        .append(main)
      this.container.append(this.menu)
    }
    // 初始化按钮
    this.initBtn = () => {
      // 生成按钮
      this.btn
        .css({
          // display: 'none',
          position: 'fixed',
          top: 70,
          right: 10,
          width: 140,
          height: 25,
          lineHeight: '25px',
          border: '1px solid #0f0',
          background: '#fff',
          zIndex: 9999,
          fontSize: 14,
          textAlign: 'center',
          cursor: 'pointer',
        })
        .text('停止')
        .click(() => {
          this.stop = true

          this.btn.hide()
          this.notice.hide()
          // utils.log('已停止操作')
        })
  
      this.container.append(this.btn)
    }
    // 初始化提示框
    this.initNotice = () => {
      this.notice
        .css({
          // display: 'none',
          position: 'fixed',
          top: 100,
          right: 10,
          width: 140,
          border: '1px solid #00f',
          background: '#fff',
          zIndex: 9999,
          fontSize: 14,
          textAlign: 'center',
        })
        .text('...')
  
      this.container.append(this.notice)
    }

    // 初始化
    this.initMenu()
    this.initBtn()
    this.initNotice()
  }

  const helper = new CleanHelper({
    title: '知乎一键清空助手',
    menuList: [
      {
        text: '清空回答',
        onClick: () => {
          cleanAnswer()
        },
      },
      {
        text: '清空文章',
      },
    ]
  })

  const cleanAnswer = () => {
    helper.batchDelete({
      pageURL: 'https://www.zhihu.com/api/v4/members/gafish/answers?limit=20',
      pageTitle: '我的回答',
      listURL: '',
      deleteURL: '',
      onHandleResponse: () => {},
      onHandleParams: () => {},
    })
  }
})(window.jQuery)
