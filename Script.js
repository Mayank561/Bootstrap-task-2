document.addEventListener("DOMContentLoaded", function() {
    // Get the canvas element 
    var canvas = document.getElementById("progressCanvas");
    var ctx = canvas.getContext("2d");
  
    // Variables for circle properties
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 70;
    var startAngle = -0.5 * Math.PI;
    var lineWidth = 10;
    // Initial progress (starts from 0)
    var progress = 0;
    var endAngle = startAngle + 2 * Math.PI * progress;
    var counterClockwise = false;
  
    // Function to draw the circle 
    function drawCircle() {
      // Clear previous drawings
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Draw background circle
      ctx.beginPath();
      ctx.arc(x, y, radius, startAngle, startAngle + 2 * Math.PI, counterClockwise);
      ctx.strokeStyle = '#1e381d';
      ctx.lineWidth = lineWidth;
      ctx.stroke();
  
      // Draw progress arc
      ctx.beginPath();
      ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
      ctx.strokeStyle = 'white'; 
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    }
  
    // Function to update progress and redraw circle
    function updateProgress(newProgress) {
      var animation = setInterval(function() {
        progress += 0.01; 
        if (progress >= newProgress) {
          clearInterval(animation);
          progress = newProgress;
        }
  
        // Update progress text
        document.getElementById("progress").innerText = Math.round(progress * 100);
  
        // Redraw circle with updated progress
        endAngle = startAngle + 2 * Math.PI * progress;
        drawCircle();
      }, 10); 
    }
  
    updateProgress(0.8);
  });