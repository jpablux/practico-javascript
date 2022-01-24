// Mostrar Menu

var MenuIcon = document.getElementById("menu__icon"); 
var NavMenu = document.getElementById("nav__menu");
var CloseMenu = document.getElementById("close__menu");
var Results = document.getElementById("results");
var ResultCircleArea = document.getElementById("ShowCircleArea");
var ResultCirclePerimeter = document.getElementById("ShowCirclePerimeter");
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

function PerimetroTriangulo(ladotri1, ladrotri2, basetri){

    return ladotri1 + ladrotri2 + basetri;

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

// Interaccion con HTML

function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = PerimetroCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = AreaCuadrado(value);
    alert(area);
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
