$ (function() {
  $('.menuToggle') .on('click', function(){

    $('.menu') .slideToggle(300, function(){

      if($(this).css('display') ===  'none') {
        $(this).removeAttr('style');
      }

      });
    });
});



var loadDeferredStyles = function() {
  var addStylesNode = document.getElementById("deferred-styles");
  var replacement = document.createElement("div");
  replacement.innerHTML = addStylesNode.textContent;
  document.body.appendChild(replacement)
  addStylesNode.parentElement.removeChild(addStylesNode);
};
var raf = requestAnimationFrame || mozRequestAnimationFrame ||
  webkitRequestAnimationFrame || msRequestAnimationFrame;
if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
else window.addEventListener('load', loadDeferredStyles);


