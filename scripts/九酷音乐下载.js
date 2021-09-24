/* eslint-disable no-extra-semi */
// ==UserScript==
// @name         9ku.com 九酷音乐下载
// @namespace    https://greasyfork.org/zh-CN/users/812943
// @version      0.0.1
// @description  九酷音乐下载器，一键下载
// @author       gafish
// @match        https://www.9ku.com/play/*.htm
// @icon         https://www.google.com/s2/favicons?domain=9ku.com
// @license      MIT
// @require      https://cdn.jsdelivr.net/npm/copy-to-clipboard@3.3.1/example/index.js
// @grant        none
// ==/UserScript==

;(function (jQuery, copyToClipboard) {
  'use strict'

  const init = () => {
    const box = jQuery('.ppBox')

    const { singer, musicname, song_id, meida } = window
    const { mp3 } = meida

    if (!box[0]) return

    box.css({ height: 340 })

    // 空格替换为下划线
    const fileName = `${singer} - ${musicname}.mp3`
    // .replace(/\s/g, '_')
    const downloadBtn = jQuery(
      `<a href="${mp3}" download=${fileName} target="_blank">右键另存MP3文件</a>`,
    )
    const fileNameText = jQuery(`<div>点击复制文件名<b></b><br />${fileName}</div>`)

    downloadBtn.css({
      display: 'block',
      backgroundColor: '#f00',
      color: '#fff',
      padding: '5px 10px',
      borderRadius: 5,
      margin: 10,
      textAlign: 'center',
      height: 30,
      lineHeight: '30px',
    })
    fileNameText
      .css({
        display: 'block',
        backgroundColor: '#ccc',
        color: '#000',
        padding: '5px 10px',
        borderRadius: 5,
        margin: 10,
        textAlign: 'center',
        height: 40,
        lineHeight: '20px',
        cursor: 'pointer',
      })
      .click(() => {
        copyToClipboard(fileName)

        fileNameText.find('b').text('已复制')

        setTimeout(() => {
          fileNameText.find('b').text('')
        }, 2000)
      })

    box.append(downloadBtn)
    box.append(fileNameText)
  }
  const checkMp3 = () => {
    if (!window.meida.mp3) {
      setTimeout(checkMp3, 200)
      return
    }

    init()
  }

  checkMp3()
})(window.jQuery, window.copyToClipboard)
