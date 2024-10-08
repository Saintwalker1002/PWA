let angulo = 0; // Inicializar ángulo para rotación
let radio = 150; // Radio del círculo de movimiento
function setup() { // Configuración inicial
 createCanvas(windowWidth, windowHeight); // lienzo en tamaño de ventana
 background(0); // Establecer fondo negro
 noStroke(); // Sin contorno en las figuras
}
function draw() { // Ciclo de dibujo continuo
 fill(0, 10); // Color negro translúcido para desvanecer
 rect(0, 0, width, height); // Dibujar rectángulo sobre toda la pantalla
 translate(width / 2, height / 2); // Mover origen al centro de la pantalla
 for (let i = 0; i < 10; i++) { // Dibujar 10 elipses
 let x = cos(angulo + PI / 5 * i) * radio; // Coordenada x en círculo
 let y = sin(angulo + PI / 5 * i) * radio; // Coordenada y en círculo
 fill(random(255), random(255), random(255)); // Color aleatorio para elipse
 ellipse(x, y, 30, 30); // Dibujar elipse en posición calculada
 }
 angulo += 0.01; // Incrementar ángulo para animación
}
