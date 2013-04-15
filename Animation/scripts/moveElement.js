function moveElement(elementID, final_x, final_y, interval) {
  if (!document.getElementById) return false;
  if (!document.getElementById(elementID)) return false;

  var elem = document.getElementById(elementID);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }

  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  var dist = 0;

  if (xpos === final_x && ypos === final_y) return true;

  if (xpos < final_x) {
    dist = (final_x - xpos) / 10
    xpos += Math.ceil(dist);
  }
  if (xpos > final_x) {
    dist = (xpos - final_x) / 10
    xpos -= Math.ceil(dist);
  }

  if (ypos < final_y) {
    dist = (final_y - ypos) / 10
    ypos += Math.ceil(dist);
  }
  if (ypos > final_y) {
    dist = (ypos - final_y) / 10
    ypos -= Math.ceil(dist);
  }

  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";

  elem.movement = setTimeout(moveElement, interval, elementID, final_x, final_y, interval);
}
