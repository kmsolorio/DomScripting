function styleHeaderSiblings(){
  if (!document.getElementsByTagName) return false;
  var headers = document.getElementsByTagName("h1");
  var elem;
  for (var i=0; i < headers.length; i ++) {
    elem = getNextElement(headers[i].nextSibling);
    if (!elem) continue;
    addClass(elem, "intro");
  }
}

function getNextElement(node) {
  if (node.nodeType == 1) {
    return node;
  }
  if (node.nextSibling) {
    return getNextElement(node.nextSibling);
  }
  return null;
}

function addClass(element, className) {
  if (element.className) {
    newClassName = element.className;
    newClassName += " ";
    newClassName += className;
    element.className = newClassName;
  }
  else {
    element.className = className;
  }
}

addLoadEvent(styleHeaderSiblings);