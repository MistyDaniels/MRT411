    function renderCircle(context, x, y, radius, fill) {
        var strokeWidth = 2
        context.beginPath();
        context.arc(x, y, radius - (2 * strokeWidth), 0, 2 * Math.PI, false);
        context.fillStyle = fill;
        context.fill();
        context.lineWidth = strokeWidth;
        context.strokeStyle = '#666';
        context.stroke();
    }

    function draw() {
    renderCircle(context, canvas.width / 2, canvas.height / 2, radius, 'blue');
    renderCircle(context, canvas.width - radius , canvas.height / 2, radius, 'red');

    }


    var canvas = document.getElementById('object-canvas');
    var context = canvas.getContext('2d')
    var radius  = 50;


    setInterval(draw, 1000 / 60);
