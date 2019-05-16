"use strict"

window.onload = function(){
  let mainCanvas = document.getElementById("mainCanvas")
  let mainCanvasContext = mainCanvas.getContext("2d")
  mainCanvasContext.fillText("hello world", 0, 60)
}