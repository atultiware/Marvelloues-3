function Area(r:number,PI:number=3.14):number
{
    var ans= PI*(r*r);
    return ans;
}

var ret:number;
ret = Area(5);
console.log("Area of circle is :",+ret);