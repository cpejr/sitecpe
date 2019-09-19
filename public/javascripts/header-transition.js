window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 50) {
    document.getElementByClass("header_style").style.color = "black";
  } else {
    document.getElementByClass("header_style").style.color = "black";
  }
}
