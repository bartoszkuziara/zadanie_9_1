var a = 0;
	h = 0;

function getTriangleArea(a, h){
	if ((a<=0)||(h<=0)) {
		console.log("Nieprawidlowe dane");
		}
	else {
		return (a*h/2);
	}
}

console.log (getTriangleArea(10, 6));

var getTriangle1Area = getTriangleArea(23,44);
var getTriangle2Area = getTriangleArea(22,1);
var getTriangle3Area = getTriangleArea(13,4);

console.log(getTriangle1Area);
console.log(getTriangle2Area);
console.log(getTriangle3Area);
