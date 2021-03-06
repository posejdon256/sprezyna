export function DrawLine(canvas, x1, y1, x2, y2, color, setWidth) {
    var ctx = canvas.getContext("2d");
    if(color) {
        ctx.strokeStyle = color;
    }
    ctx.lineWidth = setWidth ? Math.abs(Math.min(parseInt(5000 / Math.abs((y1 - y2)), 10), 10)) : 1;
    ctx.beginPath();
    ctx.moveTo(x1, Math.max(y1, 0));
    ctx.lineTo(x2, Math.max(y2, 0));
    ctx.stroke();
}