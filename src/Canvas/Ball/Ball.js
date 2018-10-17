import { clearCanvas } from "../../Draw/Clear";
import { DrawLine } from "../../Draw/DrawLine";
import { DrawCircle } from "../../Draw/DrawCircle";

let canvas;
const R = 50;
export function setCanvasForBall(_canvas) {
    canvas = _canvas;
}
export function setBallPosition(y) {
    clearCanvas(canvas);
    DrawLine(canvas, 400, 0, 400, y, undefined, true);
    DrawCircle(canvas, 400, y, R);
}