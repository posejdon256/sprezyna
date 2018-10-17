let rgba = {r: 0, g: 0, b: 0, a:255};

export function setColor(r, g, b, a){
    rgba = {r: r, g: g, b: b, a: a};
}
export function getColor() {
    return rgba;
}
export function getStringColor() {
    const {r, g, b, a} = rgba;
    return "rgba(" + r + "," + g + "," + b + "," + a +")";
}