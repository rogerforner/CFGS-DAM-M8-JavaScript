var calculateArea = function () {
    console.log('Aquí calculo àrea')
};

var Figure = function (){
};

Figure.prototype.area = calculateArea;

var figura = new Figure();

console.log(figura.area());