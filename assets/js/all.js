"use strict";

//test
console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
}); //nav&tab

var nav = document.querySelectorAll('.nav-item');
nav.forEach(function (item) {
  return item.addEventListener('click', function (e) {
    nav.forEach(function (item) {
      return item.classList.remove('active');
    });
    item.classList.add('active');
    var panes = document.querySelectorAll('.product__tab');
    panes.forEach(function (pane) {
      var tab = pane.dataset.tab;

      if (item.id == tab) {
        panes.forEach(function (pane) {
          return pane.classList.remove('show');
        });
        pane.classList.add('show');
      }
    });
  });
});
//# sourceMappingURL=all.js.map
