// edge_extension/options.js

document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get({
    replaceText: true
  }, function(items) {
    document.getElementById('replaceText').checked = items.replaceText;
  });
});

document.getElementById('save').addEventListener('click', function() {
  chrome.storage.sync.set({
    replaceText: document.getElementById('replaceText').checked
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
});