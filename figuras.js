// Mostrar Menu

var MenuIcon = document.getElementById("menu__icon"); 
var NavMenu = document.getElementById("nav__menu");
var CloseMenu = document.getElementById("close__menu");
var Results = document.getElementById("results");

//Circulos
var ResultCircleArea = document.getElementById("ShowCircleArea");
var ResultCirclePerimeter = document.getElementById("ShowCirclePerimeter");
//Cuadrados
var ResultSquareArea = document.getElementById("ShowSquareArea");
var ResultSquarePerimeter = document.getElementById("ShowSquarePerimeter");
//Triangulos
var ResultTriangleArea = document.getElementById("ShowTriangleArea");
var ResultTrianglePerimeter = document.getElementById("ShowTrianglePerimeter");


//Rectangulos
var ResultRectangleArea = document.getElementById("ShowRectangleArea");
var ResultRectanglePerimeter = document.getElementById("ShowRectanglePerimeter");

document.addEventListener('mouseup', function(e){
    if (!NavMenu.contains(e.target)){
        NavMenu.style.display = "none";
    }
});

function showResult(){
    Results.style.display = "flex";
}

function showMenu(){
    NavMenu.style.display = "block";   
}

function hideMenu(){
    NavMenu.style.display = "none";
}

// Codigo del Cuadrado
console.group("Cuadrados");


function PerimetroCuadrado(ladocu){

    return ladocu * 4;
}

function AreaCuadrado(ladocu){
    return ladocu * ladocu;
}


console.groupEnd();


// Codigo del Triangulo

console.group("Triangulos");

function PerimetroTriangulo(basetri){

    return basetri * 3;

} 


function AreaTriangulo(base,altura){
 return ((base * altura) / 2);
}

console.groupEnd();


//Codigo de Circulos

console.group("Circulos");


//Diametro 

function DiametroCirculo(radio){
    return radio * 2;
}

//PI

const PI = Math.PI;
console.log("PI es " + PI);

//Circunferencia

function PerimetroCirculo(radio){

    const diametro = DiametroCirculo(radio);
    return diametro * PI;
}

// Area

function AreaCirculo(radio){
return PI * (radio * radio);
}
console.groupEnd();


//Codigo Rectangulo

function AreaRectangulo(base,altura){
    return base * altura;
}

function PerimetroRectangulo(base,altura){
    return (2 * base) + (2 * altura);
}

// Interaccion con HTML

function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimeter = PerimetroCuadrado(value);
    ResultSquarePerimeter.innerHTML = perimeter.toFixed(2);
}

function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = AreaCuadrado(value);
    ResultSquareArea.innerHTML = area.toFixed(2) + "&sup2;";
}

function CalcularAreaCirculo(){
    
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = AreaCirculo(value);
    
    ResultCircleArea.innerHTML = area.toFixed(2) + "&sup2;";
    
}

function CalcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimeter = PerimetroCirculo(value);
    ResultCirclePerimeter.innerHTML = perimeter.toFixed(2);
}

function CalcularAreaTriangulo(){
    const inputaltura = document.getElementById("InputTrianguloAltura");
    const altura = inputaltura.value;

    const inputbase = document.getElementById("InputTrianguloBase");
    const base = inputbase.value;

    const area = AreaTriangulo(base,altura);

    ResultTriangleArea.innerHTML = area.toFixed(2) + "&sup2;";
}

function CalcularPerimetroTriangulo(){
    const inputbase = document.getElementById("InputTrianguloBase");
    const base = inputbase.value;

    const perimetro = PerimetroTriangulo(base);
    ResultTrianglePerimeter.innerHTML = perimetro.toFixed(2);
}


function CalcularAreaRectangulo(){
    const inputbase = document.getElementById("InputRectanguloBase");
    const inputaltura = document.getElementById("InputRectanguloAltura");
    const base = inputbase.value;
    const altura = inputaltura.value;

    const area = AreaRectangulo(base,altura);
    ResultRectangleArea.innerHTML = area.toFixed(2) + "&sup2;";
}

function CalcularPerimetroRectangulo(){
    const inputbase = document.getElementById("InputRectanguloBase");
    const inputaltura = document.getElementById("InputRectanguloAltura");
    const base = inputbase.value;
    const altura = inputaltura.value;

    const perimetro = PerimetroRectangulo(base,altura);
    ResultRectanglePerimeter.innerHTML = perimetro.toFixed(2);
}