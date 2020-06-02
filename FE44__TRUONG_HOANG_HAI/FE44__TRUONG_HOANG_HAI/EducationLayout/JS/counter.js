function isOnScreen(elem) {
  // if the element doesn't exist, abort
  if (elem.length == 0) {
    return;
  }
  var $window = jQuery(window);
  var viewport_top = $window.scrollTop();
  var viewport_height = $window.height();
  var viewport_bottom = viewport_top + viewport_height;
  var top = jQuery(elem).offset().top;
  var height = jQuery(elem).innerHeight();
  var bottom = top + height;

  return !(viewport_top >= bottom || viewport_bottom <= top);
}

jQuery(document).ready(function () {
  var isCounting = false;
  window.addEventListener("scroll", function (e) {
    const counters = document.querySelectorAll(".counter");
    if (isOnScreen(jQuery(".stat-section"))) {
      /* Pass element id/class you want to check */
      // this.console.log("on screen");
      if (isCounting) {
        return;
      }
      const speed = 10000;

      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          if (!isCounting) {
            counter.innerText = target;
            return;
          }
          const count = +counter.innerText;

          const inc = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
        isCounting = true;
      });
    } else {
      isCounting = false;
      // this.console.log("out screen");
      counters.forEach((counter) => {
        counter.innerText = 0;
      });
    }
  });
});
