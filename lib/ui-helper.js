(function(){
   var ui = {
       getElementPosition : function ( el ) {
            var body = document.documentElement || document.body;
            var scrollX = window.pageXOffset || body.scrollLeft;
            var scrollY = window.pageYOffset || body.scrollTop;
            var pos = el.getBoundingClientRect();
            return { top: pos.top + scrollY, left: pos.left + scrollX,  height : pos.height, width : pos.width };
        }
   };

   return ui;
})();
