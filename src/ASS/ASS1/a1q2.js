function Area(r, PI) {
    if (PI === void 0) { PI = 3.14; }
    var ans = PI * (r * r);
    return ans;
}
var ret;
ret = Area(5);
console.log("Area of circle is :", +ret);
