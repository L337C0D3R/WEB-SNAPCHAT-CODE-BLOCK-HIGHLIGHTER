chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "codeBlockConversion") {
      convertToCodeBlock();
    }
  }
);

function convertToCodeBlock() {
  let textNodes = document.querySelectorAll('p');
  textNodes.forEach(node => {
    let text = node.innerText;
    let regex = /```([^`]+)```/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
      let codeBlock = document.createElement('pre');
      codeBlock.className = 'hljs';
      codeBlock.innerText = match[1];
      node.innerText = node.innerText.replace(match[0], '');
      node.appendChild(codeBlock);
    }
  });
  applySyntaxHighlighting();
}

function applySyntaxHighlighting() {
  document.querySelectorAll('pre.hljs').forEach((block) => {
    hljs.highlightBlock(block);
  });
}
