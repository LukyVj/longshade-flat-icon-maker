	var draw, h, hash, hsl, l, lock, s, wheelEvent;

h = ~~(Math.random() * 360);

s = 50;

l = 50;

lock = false;

draw = function() {
  var hcl, hsla, hsl, lab, rgb;
  if (lock === false) {
    $('b').hide();
    hsla = new d3.hsl(h, s / 100.0, l / 100.0);
    hsl = hsla;
    hcl = new d3.hcl(hsl);
    rgb = new d3.rgb(hsl);
    lab = new d3.lab(hsl);
    $('#hexaRes').html("");
    $('#hexaRes').append(hsl.toString().replace("#", ""));
    $('#color').css("background-color", "hsl(" + h + ", " + s + "%, " + l + "%)");
    return $('#color').css("color", "rgb(" + (Math.min(rgb.r + 96, 255)) + ", " + (Math.min(rgb.g + 96, 255)) + ", " + (Math.min(rgb.b + 96, 255)) + ")");
  } else {
    return $('b').show();
  }
};

$('#color').mousemove(function(e) {
  var maxX, maxY, x, y;
  maxX = $('#color').width();
  maxY = $('#color').height();
  x = e.pageX;
  y = e.pageY;
  h = ~~(x / maxX * 360);
  l = ~~(y / maxY * 1500) / 60;
  draw();
});
wheelEvent = function(e) {
  var delta;
  delta = (e.wheelDelta || e.detail || e.originalEvent.wheelDelta || e.originalEvent.detail) > 0 ? 1 : -1;
  s = Math.max(0, Math.min(100, s + delta * 5));
  draw();
};

$('#color').bind("mousewheel", wheelEvent);

$('#color').bind("DOMMouseScroll", wheelEvent);

$('b').click(function() {
  return lock = false;
});

$("#color").click(function() {
  return lock = true;
});

$("#color").dblclick(function() {
  return lock = false;
});

$('b').mouseenter(function() {
  return $('b').html('<span class="entypo-lock"></span>');
});

$('b').mouseleave(function() {
  return $('b').html('<span class="entypo-lock"></span>');
});

hash = location.hash.indexOf('(') > 0 ? location.hash.substr(1) : location.hash;

if (hash.length > 0) {
  hsl = new d3.hsl(hash);
  h = hsl.h;
  s = hsl.s * 100;
  l = hsl.l * 100;
  draw();
  lock = true;
} else {
  draw();
}