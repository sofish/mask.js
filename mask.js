(function() {

  if(typeof Mask !== 'undefined') return;

  var mask, fire, position

  // Get position of a DOM element
  position = function(el) {
    var left = 0, top = 0;
    if (el.offsetParent) {
      while (el.offsetParent) {
        left += el.offsetLeft;
        top += el.offsetTop;
        el = el.offsetParent;
      }
    }
    return [left, top];
  };

  // Create a mask
  mask = function(left, top, width, height) {
    var iframe, body, opacity;

    iframe = document.createElement('iframe')
    body = document.body || doucument.documentElement;
    opacity = this.debugging ? 0.6 : 0;

    iframe.style.position = 'absolute';
    iframe.style.zIndex = '0';
    iframe.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
    iframe.style.opacity = opacity;
    iframe.style.width = width + 'px';
    iframe.style.height = height + 'px';
    iframe.style.top = top + body.offsetTop + 'px';
    iframe.style.left = left + body.offsetLeft + 'px';

    !this.debugging && iframe.setAttribute('frameBorder', '0');
    iframe.setAttribute('id', 'mask-' + this.count);
    iframe.setAttribute('scrolling', 'no');

    return body.appendChild(iframe);
  }

  // Show mask
  fire = function(elements) {
    var i = 0, len = elements.length;

    for(; i < len; i++) {
      var el = elements[i]
        , pos = position(el);
      pos.push(el.offsetWidth, el.offsetHeight);
      el.setAttribute('mask-id', this.count)
      mask.apply(this, pos);
    }
  }

  // Remove mask
  free = function(elements) {
    var i = 0, len = elements.length;

    for(; i < len; i++) {
      var id = elements[i].getAttribute('mask-id')
        , iframe = document.getElementById('mask-' + id);
      iframe.parentNode.removeChild(iframe);
    }

  }

  // default debugging settings
  Mask = { count: 0 };

  // Add show debug
  Mask.debug = function() {
    this.debugging = true;
  }

  // show mask
  Mask.set = function() {
    return fire.call(this, arguments);
  };

  Mask.remove = function() {
    return free.call(this, arguments);
  }

})();