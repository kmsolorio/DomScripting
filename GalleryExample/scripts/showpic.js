function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild === targetElement) {
    parent.appendChild(newElement);
  }
  else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }

}

function prepareGallery() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;

  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");

  for (var i = 0; i < links.length; i ++) {
    links[i].onclick = function() {
      return !showPic(this);
    }
  }
};

function preparePlaceholder(){
  var placeholder = document.createElement("img");
  placeholder.setAttribute("id", "placeholder");
  placeholder.setAttribute("src", "");
  placeholder.setAttribute("alt", "my image gallery");
  placeholder.setAttribute("height", 400);
  placeholder.setAttribute("width", 600);

  var description = document.createElement("p");
  description.setAttribute("id", "description");
  var desctext = document.createTextNode("Choose an Image");
  description.appendChild(desctext);


  var gallery = document.getElementById("imagegallery");
  insertAfter(placeholder, gallery);
  insertAfter(description, placeholder);
};


function showPic(whichpic) {
  if (!document.getElementById("placeholder")) return false;

  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");

  if (placeholder.nodeName != "IMG") return false;
  placeholder.setAttribute("src", source);

  if (document.getElementById("description")) {
    var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) description.firstChild.nodeValue = text;
  }

  return true;
};

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.oldonload != "function") {
    window.onload = func();
  }
  else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);