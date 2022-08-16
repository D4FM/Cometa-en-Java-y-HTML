//Dibujo de la cometa, con triangulos y las lineas
const MiCanvas = document.getElementById("MiCanvas");
const context = MiCanvas.getContext("2d");

//Fondo
context.fillStyle="#00D2D6";
context.fillRect(0,0,500,500);

//Triangulo azúl
context.strokeFill="#000000";
context.fillStyle="#0000FF";
context.beginPath();
context.moveTo(200,100);
context.lineTo(200,200);
context.lineTo(100,200);
context.stroke();
context.fill();

//Triangulo verde
context.strokeFill="#000000";
context.fillStyle="#00FF0E";
context.beginPath();
context.moveTo(200,100);
context.lineTo(200,200);
context.lineTo(300,200);
context.stroke();
context.fill();

//Triangulo rojo
context.strokeFill="#000000";
context.fillStyle="#FF0000";
context.beginPath();
context.moveTo(100,200);
context.lineTo(200,200);
context.lineTo(200,400);
context.stroke();
context.fill();

//Triangulo amarillo
context.strokeFill="#000000";
context.fillStyle="#FFF100";
context.beginPath();
context.moveTo(300,200);
context.lineTo(200,200);
context.lineTo(200,400);
context.stroke();
context.fill();

//Cola
context.beginPath();
context.moveTo(200,400);
context.lineTo(230,430);
context.lineTo(180,440);
context.lineTo(250,470);
context.lineTo(200,500);
context.stroke();
