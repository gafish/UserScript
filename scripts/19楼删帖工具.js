// ==UserScript==
// @name         19楼删帖工具
// @namespace    https://greasyfork.org/zh-CN/users/812943
// @version      0.0.1
// @description  删除失效贴子
// @author       gafish
// @match        https://www.19lou.com/u/myinfo/post
// @icon         https://www.google.com/s2/favicons?domain=19lou.com
// @require      https://greasyfork.org/scripts/415581-jquery%E5%BA%93/code/jquery%E5%BA%93.js?version=866373
// @require      https://greasyfork.org/scripts/26454-jquery-cookie/code/jQuery%20Cookie.js?version=169689
// @grant        none
// ==/UserScript==

(function (jquery) {
  'use strict'

  const removePost = href => {
    if (!href) return
    const search = href.split('?')[1]
    const params = {}

    search.split('&').forEach(item => {
      const str = item.split('=')
      params[str[0]] = str[1]
    })

    return jquery.ajax({
      url: 'https://www.19lou.com/thread/manage/delete/post/submit/ownthread',
      type: 'POST',
      dataType: 'json',
      data: params,
    })
  }

  // 每行添加删除按钮
  const trs = jquery('#main-wrap .data-mod tr')

  trs.each((index, tr) => {
    const tds = jquery(tr).find('td')
    const removeLink = jquery('<a>删除</a>')

    removeLink.click(() => {
      const href = tds.eq(0).find('a').eq(0).attr('href')

      removePost(href).done(() => {
        tds.eq(5).html('删除成功')
      })
    })

    tds.eq(5).html('').append(removeLink)
  })

  // 批量删除
  const bd = jquery('#main-wrap .tab-bd')
  const removeAll = jquery('<a>全部删除</a>')

  removeAll.click(() => {
    trs.each((index, tr) => {
      const tds = jquery(tr).find('td')
      const href = tds.eq(0).find('a').eq(0).attr('href')

      removePost(href)
    })
  })

  bd.prepend(removeAll)
})(window.jQuery)
