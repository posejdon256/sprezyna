import { setBallPosition } from "../Ball/Ball";
import { addElementF, addElementG, addElementX, addElementX_t, addElementTrajectory, addElementH, addElementX_tt, clearTrayectory, clearF, clearG, clearH, clearW, clearX, clearX_t, clearX_tt } from "../../Datas/Datas";
import { clearCanvas } from "../../Draw/Clear";
import { getChart2 } from "../Charts/Chart2";

let c = 1;
let k = 1;
let m = 1;
let x0 = 1;
let w = 0;// 0 - sinus, 1 - cosinus
let x_i = 1;
let x_i_minus_1 = 1;
let delta = 1;
let x_i_plus_1;
let ht = 0;
let v0 = 1;
let time = 0;
let tikingTime = 0;
let A = 1;
let teta = 1;
let omega = 1;
export function _setC(_c) {
    c = _c;
}
export function _setX0(_x0){
    x0 = _x0;
}
export function _setV0(_v0){
    v0 = _v0;
}
export function _setDelta(_delta) {
    delta = _delta;
}
export function _setM(_m) {
    m = _m;
}
export function _setK(_k){
    k = _k;
}
export function _setW(_w) {
    w = _w;
}
export function _setH(_h){
    ht = _h;
}
export function startMoving() {
    setInterval(moveBall, 1);
}
export function _setA(_A) {
    A = _A;
}
export function _setOmega(_omega){
    omega = _omega;
}
export function _setTeta(_teta) {
    teta = _teta;
}
export function setTime(_t) {
    time = _t;
    clearCanvas(getChart2());
    clearTrayectory();
    clearF();
    clearG();
    clearH();
    clearW();
    clearX();
    clearX_t();
    clearX_tt()
}
function moveBall() { 
    tikingTime += 0.01;
    x_i_minus_1 = time === 0 ? x0 - (delta * v0) : x_i;
    x_i = time === 0 ? x0 : x_i_plus_1;
    time ++;
    let finalW, finalH;
    if(w === 0) {
        finalW = A;
    } else if(w === 1) {
        finalW = Math.sign(A*Math.sin(omega * tikingTime + teta));
    } else {
        finalW = A*Math.sin(omega * tikingTime + teta);
    }
    if(ht === 0) {
        finalH = A;
    } else if(ht === 1) {
        finalH = Math.sign(A*Math.sin(omega * tikingTime + teta));
    } else {
        finalH = A*Math.sin(omega * tikingTime + teta);
    }
    let X = delta * delta / m;
    let Y = k * X / (2 * delta);
    x_i_plus_1 = ( c * X * (-x_i + finalW) + X * finalH + 2 *x_i - x_i_minus_1 + Y * x_i_minus_1) / (1 + Y);
    const x_t = (x_i_plus_1 - x_i_minus_1) / (2 * delta);
    const x_tt = (x_i_plus_1 - 2 * x_i + x_i_minus_1) /  (delta * delta);
    addElementF(parseInt( c * (finalW - x_i) * 50 + 150, 10));
    addElementG(parseInt(- k * x_t * 50 + 150, 10));
    addElementX(parseInt(x_i_plus_1 * 50 + 150, 10));
    addElementX_t(parseInt(x_t * 50 + 150, 10));
    addElementX_tt(parseInt(x_tt * 50 + 150, 10));
    addElementTrajectory({x: parseInt(x_t * 150 + 150, 10), y: parseInt(x_tt * 150 + 150, 10)});
    addElementH(parseInt(finalH * 50 + 150, 10));
    setBallPosition(parseInt(x_i_plus_1 * 200, 10));
}