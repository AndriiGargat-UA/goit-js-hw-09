!function(){var t=function(t){return document.querySelector(t)},e=t("[data-start]"),n=t("[data-stop]"),r=t("body"),i=null;function a(){e.setAttribute("disabled",!0),n.removeAttribute("disabled"),i=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)}function o(){n.setAttribute("disabled",!0),e.removeAttribute("disabled"),clearInterval(i)}n.setAttribute("disabled",!0),e.addEventListener("click",(function(){return a()})),n.addEventListener("click",(function(){return o()}))}();
//# sourceMappingURL=01-color-switcher.6b7131c3.js.map
