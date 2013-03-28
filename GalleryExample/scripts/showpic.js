function prepareGallery() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;

  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");

  for (var i = 0; i < links.length; i ++) {
    links[i].onclick = function() {
      showPic(this);
      return false;
    }
  }
};


function showPic(whichpic) {
  var source = whichpic.getAttribute('href');
  var text = whichpic.getAttribute('title');
  var placeholder = document.getElementById('placeholder');
  var description = document.getElementById('description');
  placeholder.setAttribute('src', source);
  description.firstChild.nodeValue = text;
};

window.onload = prepareGallery;
