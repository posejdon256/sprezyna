import { getStringColor } from "./Colors";

export function DrawCircle(canvas, x, y, R) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, R, 0,2*Math.PI);
    ctx.fillStyle = getStringColor();
    ctx.fill();
    ctx.stroke();
}