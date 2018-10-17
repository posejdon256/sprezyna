export function DrawLine(canvas, x1, y1, x2, y2, color, setWidth) {
    var ctx = canvas.getContext("2d");
    if(color) {
        ctx.strokeStyle = color;
    }
    ctx.lineWidth = setWidth ? Math.abs(parseInt(5000 / (y1 - y2), 10)) : 1;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}