var rate    = 50,
cloud_files = [ 'pirate_ship.png', 'wave.png', 'pirate_ship.png', 'wave.png' ],
files       = ['airship-boat.png'],
floaters    = {},
floatCount = 0,
wWidth,
wHeight;

function animate() {
  var values = _.values(floaters);
  setInterval(function() { _.each(values, updateFloater) }, rate);
}

//Create floating stuff after everything on page is loaded
//so that the height of `document` is finalized
$(window).load(function() {
  iHeight = 0;
  iWidth = window.innerWidth;
  for( var i = 50; i > 0; i-- )
    clouds();
  animate();
});

function clouds() {
  var idx = Math.floor( Math.random() * cloud_files.length ),
  height  = 200,
  y       = iHeight + Math.floor( Math.random() * height ),
  x       = Math.floor( Math.random() * iWidth );

  create_floater(cloud_files[idx], 'cloud', x, y, 1);
}

function create_floater( file, className, x, y, delta ) {
  var ratio = Math.random(),
  speed     = Math.ceil(ratio * delta),
  amplitude = 5 * Math.random() + .1,
  shift     = 2 * Math.PI * Math.random();

  var image = $('<img/>', {
    src: 'images/' + file,
    style: 'width: ' + Math.floor(ratio * 100) + '%;'
  }).appendTo($('<div/>', {
    'class': className,
    style: 'position: absolute; z-index: 100; opacity: ' + ratio + '; left: ' + x + 'px; top: ' + y + 'px; width: 60px; height: 60px;'
  }).appendTo('#boats'));

  var elem = image.parent(),
  elem_id  = 'floater-' + floatCount++;

  elem.attr('id', elem_id);
  floaters[elem_id] = {
    element: elem,
    speed: speed,
    amplitude: amplitude,
    shift: shift,
    animate: true,
    x: x,
    y: y
  };
  return elem;
}

// Not being used
function dirigibles() {
  var idx = Math.floor( Math.random() * files.length );
  height  = 200,
  y       = iHeight + Math.floor( Math.random() * height ),
  x       = Math.floor( Math.random() * iWidth),
  dirig   = create_floater( files[idx], 'dirig', x, y, 2 ),
  image   = dirig.find( 'img' ).first();

  dirig.css('width', image.clientWidth);
  dirig.css('height', image.clientHeight);
}

function updateFloater(floater) {
  if (floater.animate) {
    move_right(floater);
    bob(floater);
  }
}

// reset after passing right boundary
function move_right( floater ) {
  if( floater.x < window.innerWidth - 75 ) {
    floater.x += floater.speed;
  } else {
    floater.x = -75;
  }
  floater.element.css( 'left', floater.x + 'px' );
}

function bob( floater ) {
  var feq = 0.1;
  floater.element.css( 'top', floater.y + floater.amplitude * Math.sin( feq * floater.x + floater.shift ) + 'px' );
}
