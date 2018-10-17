let datasF = [];
let datasG = [];
let datasH = [];
let datasW = [];
let datasX = [];
let datasX_t = [];
let datasX_tt = [];
let datas_trajectory = [];

export function setDatasF(_datas){
    datasF = _datas;
}
export function setDatasG(_datas){
    datasG = _datas;
}
export function setDatasH(_datas){
    datasH = _datas;
}
export function setDatasW(_datas){
    datasW = _datas;
}
export function setDatasX(_datas){
    datasX = _datas;
}
export function setDatasX_t(_datas){
    datasX_t = _datas;
}
export function setDatasX_tt(_datas){
    datasX_tt = _datas;
}
export function getDatasF(){
    const start = datasF.length > 300 ? datasF.length - 300 : 0;
    return datasF.slice(start, datasF.length);
}
export function getDatasH(){
    const start = datasH.length > 300 ? datasH.length - 300 : 0;
    return datasH.slice(start, datasH.length);
}
export function getDatasG(){
    const start = datasG.length > 300 ? datasG.length - 300 : 0;
    return datasG.slice(start, datasG.length);
}
export function getDatasW(){
    const start = datasW.length > 300 ? datasW.length - 300 : 0;
    return datasW.slice(start, datasW.length);
}
export function getDatasX(){
    const start = datasX.length > 300 ? datasX.length - 300 : 0;
    return datasX.slice(start, datasX.length);
}
export function getDatasX_t(){
    const start = datasX_t.length > 300 ? datasX_t.length - 300 : 0;
    return datasX_t.slice(start, datasX_t.length);
}
export function getDatasX_tt(){
    const start = datasX_tt.length > 300 ? datasX_tt.length - 300 : 0;
    return datasX_tt.slice(start, datasX_tt.length);
}
export function getDatasTrajectory(){
    return datas_trajectory;
}
export function addElementF(el) {
    datasF.push(el);
}
export function addElementG(el) {
    datasG.push(el);
}
export function addElementH(el) {
    datasH.push(el);
}
export function addElementW(el) {
    datasW.push(el);
}
export function addElementX(el) {
    datasX.push(el);
}
export function addElementX_t(el) {
    datasX_t.push(el);
}
export function addElementX_tt(el) {
    datasX_tt.push(el);
}
export function addElementTrajectory(el) {
    datas_trajectory.push(el);
}
export function getLastTrajectory() {
    return datas_trajectory.slice(datas_trajectory.length - 2, datas_trajectory.length);
}
export function clearTrayectory() {
    datas_trajectory = [];
}
export function clearF() {
    datasF = [];
}
export function clearG() {
    datasG = [];
}
export function clearH() {
    datasH = [];
}
export function clearW() {
    datasW = [];
}
export function clearX() {
    datasX = [];
}
export function clearX_t() {
    datasX_t = [];
}
export function clearX_tt() {
    datasX_tt = [];
}