function displayCitations() {
  var quotes = document.getElementsByTagName("blockquote");
  for (var i = 0; i < quotes.length; i ++) {
    if(!quotes[i].getAttribute("cite")) continue;

    var url = quotes[i].getAttribute("cite");

    var link = document.createElement("a");
    var link_text = document.createTextNode("...source");
    link.appendChild(link_text);
    link.setAttribute("href", url);

    var superscript = document.createElement("sup");
    superscript.appendChild(link)

    quotes[i].appendChild(superscript);
  }
}

addLoadEvent(displayCitations);