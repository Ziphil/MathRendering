//


function removeSpace(element) {
  element.childNodes.forEach((child) => {
    if (child instanceof Text) {
      content = child.textContent;
      child.textContent = content.replace(/\s+/g, "");
    } else if (child instanceof Element) {
      removeSpace(child);
    }
  });
}

function execute() {
  document.querySelectorAll("math-root").forEach(removeSpace);
  document.querySelectorAll("mjx-container").forEach(removeSpace);
}

window.onload = execute;