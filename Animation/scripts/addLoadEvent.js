function addLoadEvent(func) {
  oldfunc = window.onload;
  if (typeof oldfunc === "function") {
    oldfunc();
    func();
  }
  else {
    window.onload = func();
  }
};