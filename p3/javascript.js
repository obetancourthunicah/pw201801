/*
Comentario de multiple linea
*/

//Comentaio de una sola linea
// sin nomenclatura NO USAR -300
var cuandolosgatosnosestanlosratonesfiestashacen=true;

// nomenclatura camel Case
var cuandoLosGatosNoEstanLosRatonesFiestaHacen = true;
// nomeclatura snake
var cuando_los_gatos_no_estan_los_ratones_fiesta_hacen=true;

// nomenclatura Hungara
var intEdad = 24;
var txtEdad ="24 Años";
// Mantenible facil de entender y de modificar
var intEdadPrimeraComunion = 8;

// tipos de datos
// boleanos true, false
// numericos
// texto
// function

// operadores aritmeticos
var a = 10, b=11, c=0;
// +
// -
c = a + b; // 21
c +=  a ; //31
c ++ ; // 32


c = a - b; //-1
c -= -10; // a -11  b 9
c --; // 8

c = a  * b ; //110;
c *= a; //1100

c = a / b;
c /= b;

// operadores lógicos
a = 2;
b = 2;
// == igualdad de valor
// === igualdad de tipo y valor

// != no igualdad de valor
// !== no igualdad de tipo y valor

if(a === b){
  //alert(true);
} else{
  //alert(false);
}
// &&   ||
if((((a >= b || a<= c) && a>a/c) || a < c)){
  // expresiones
}

switch(a){
  case 1:
    //expresion;
    break;
  case 2:
    //expresion ;
    break;
  default:
    //expresion
}

var c = (a > b)?true:false;

if(a>b){
  c= true;
}else{
  c=false;
}


//Ciclos en Javascript

for(var i=0;i<=100;i++){
  //console.log(i);
}

var i = 0;
while(i<20){
  //console.log("Iteración No: " + i);
  i++;
}

do{
  //console.log("Iteación inversa: " + i);
  i--;
}while(i>=0)

// Array

/*int[5] datos;
datos[0] = 1;
datos[1] = 2;
*/

var datos =[];
datos.push("a");
datos.push(1);
datos.push(true);
datos.push([1,2,3,"a","b","c"]);
/*
for(var i=0; i< datos.length;i++){
  console.log(datos[i]);
}
*/
//console.log(datos.pop());

console.log("Initial State", datos.join(','));
//array.splice(indiceInici, ItemaEliminar);
datos.splice(1,2);

console.log("Final State", datos.join(','));

//console.log(datos[2][4]);

/// Functions

function elNombreFuncion(nombre, apellido){
  return nombre + " " + apellido;
}

console.log(elNombreFuncion('Orlando','Betancourth'));

function ejecutarSinRetorno(nombre, apellido){
  console.log("Si Retornar Valor", nombre + " " + apellido);
}

ejecutarSinRetorno('Portales','Web');

var foo = function(a,b){return a + b};

var boo = function(v,h){
                var k=Math.random();
                return h(v,k);
            }

console.log(boo(10,foo));


console.log(boo(10, function(x,y){ return x-y;} ));

//w3schools.com
