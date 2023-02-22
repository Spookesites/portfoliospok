$(document).ready(function() {
  // get cursor container
  const cursor = document.getElementById("cursor");


 const pointer = document.createElement("div");
  pointer.style.width = "10px";
  pointer.style.height = "10px";
  pointer.style.border = "22px solid white";
  pointer.style.borderRadius = "50%";
  pointer.style.position = "absolute";
  pointer.style.display = "none";
  cursor.appendChild(pointer);

 document.addEventListener("selectionchange", function() {
    if (window.getSelection().toString().length > 0) {
      pointer.style.display = "block";
      cursor.style.display = "none";
    } else {
      pointer.style.display = "none";
      cursor.style.display = "block";
    }
  });

  // dots is an array of Dot objects,
  // mouse is an object used to track the X and Y position
  // of the mouse, set with a mousemove event listener below
  var dots = [],
    mouse = {
      x: 0,
      y: 0
    };

  // The Dot object used to scaffold the dots
  var Dot = function() {
    this.x = 0;
    this.y = 0;
    this.node = (function() {
      var n = document.createElement("div");
      n.className = "trail";
      cursor.appendChild(n);
      return n;
    })();
  };

  // The Dot.prototype.draw() method sets the position of
  // the object's <div> node
  Dot.prototype.draw = function() {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
  };

  // Creates the Dot objects, populates the dots array
  for (var i = 0; i < 12; i++) {
    var d = new Dot();
    dots.push(d);
  }

  // This is the screen redraw function
  function draw() {
    // Make sure the mouse position is set everytime
    // draw() is called.
    var x = mouse.x,
      y = mouse.y,
      scale = 1;

    // This loop is where all the 90s magic happens
    dots.forEach(function(dot, index, dots) {
      var nextDot = dots[index + 1] || dots[0];
      scale = scale - 0.05;
      dot.x = x;
      dot.y = y;
      dot.draw();
      x += (nextDot.x - dot.x) * 0.4;
      y += (nextDot.y - dot.y) * 0.4;
      nextDot.node.style.transform = `scale(${scale})`;
    });
  }

  addEventListener("mousemove", function(event) {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
  });

  // animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
  function animate() {
    draw();
    requestAnimationFrame(animate);
  }

  // And get it started by calling animate().
  animate();



  // change cursor to pointer when text is selected
  document.addEventListener("selectionchange", function() {
    if (window.getSelection().toString().length > 0) {
 const pointer = document.createElement("div");
      pointer.style.display = "block";
      cursor.style.display = "none";
    } else {
      pointer.style.display = "none";
      cursor.style.display = "block";
    }
  });

document.addEventListener("mousemove", function(event) {
  const cursor = document.querySelector(".glitch-cursor");
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});

});
