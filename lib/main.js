'use strict';

// ChatGPT helped generate this one
document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelectorAll('#tabs li');

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function () {
      var tab = this.getAttribute('data-tab');

      // Remove 'is-active' class from all tabs
      for (var j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove('is-active');
      }

      // Add 'is-active' class to the clicked tab
      this.classList.add('is-active');

      // Remove 'is-active' class from all tab contents
      var tabContents = document.querySelectorAll('#all-tabs-content .tab-content');
      for (var k = 0; k < tabContents.length; k++) {
        tabContents[k].classList.remove('is-active');
      }

      // Add 'is-active' class to the tab content with matching data-content attribute
      var activeTabContent = document.querySelector('div.tab-content[data-content="' + tab + '"]');
      activeTabContent.classList.add('is-active');
    });
  }
});