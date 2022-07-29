const sentence = document.getElementById("sentence");

function aparecerFrase() {
  const phrase = "Eu vou provar que um . é a estrutura do universo!";
  sentence.textContent = phrase;
}
window.onload = aparecerFrase();

// -------------------------------------

let slideIndex = [1];
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("imagem");
  let dots = document.getElementsByClassName("ponto");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

 var slidePosition = 0;
 SlideShow();

 function SlideShow() {
   var i;
   var slides = document.getElementsByClassName("imagem");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   slidePosition++;
   if (slidePosition > slides.length) {
     slidePosition = 1;
   }
   slides[slidePosition - 1].style.display = "block";
   setTimeout(SlideShow, 3000);
 }

// -------------------------------------

let slideIndex2 = [1];
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n2) {
  showSlides2((slideIndex2 += n2));
}

function showSlides2(n2) {
  let i2;
  let slides2 = document.getElementsByClassName("imagem2");
  if (n2 > slides2.length) {
    slideIndex2 = 1;
  }
  if (n2 < 1) {
    slideIndex2 = slides2.length;
  }
  for (i2 = 0; i2 < slides2.length; i2++) {
    slides2[i2].style.display = "none";
  }
  slides2[slideIndex2 - 1].style.display = "block";
}

//------------------------------------

const botao = document.getElementById("button");

function desenharLinha(ctx, x1, y1, x2, y2, stroke = "black", width = 10) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = stroke;
  ctx.lineWidth = width;
  ctx.stroke();
  ctx.font = "30px Arial";
  ctx.fillText("Y", 170, 30);
  ctx.fillText("0", 170, 280);
  ctx.fillText("1", 170, 180);
  ctx.fillText("0", 170, 340);
  ctx.fillText("-1", 160, 440);
}

function desenharLinha2(
  ctxTwo,
  xx1,
  yy1,
  xx2,
  yy2,
  stroke2 = "black",
  width = 10
) {
  ctxTwo.beginPath();
  ctxTwo.moveTo(xx1, yy1);
  ctxTwo.lineTo(xx2, yy2);
  ctxTwo.strokeStyle = stroke2;
  ctxTwo.lineWidth = width;
  ctxTwo.stroke();
  ctx.font = "30px Arial";
  ctx.fillText("X", 380, 290);
  ctx.fillText("0", 210, 340);
  ctx.fillText("1", 310, 340);
  ctx.fillText("-1", 70, 340);
}

function desenharLinha3(
  ctxThree,
  xxx1,
  yyy1,
  xxx2,
  yyy2,
  stroke3 = "black",
  width = 5
) {
  ctxThree.beginPath();
  ctxThree.moveTo(xxx1, yyy1);
  ctxThree.lineTo(xxx2, yyy2);
  ctxThree.strokeStyle = stroke3;
  ctxThree.lineWidth = width;
  ctxThree.stroke();
}

let xzero = 0;
let constante1 = 1;
let funcao = xzero + constante1;
let canvas = document.getElementById("myCanvas"),
  ctx = canvas.getContext("2d");
ctxTwo = canvas.getContext("2d");

desenharLinha(ctx, 200, 0, 190, 1000, "tomato", 10);
desenharLinha2(ctxTwo, 0, 300, 400, 300, "tomato", 10);
if (funcao == 1) {
  console.log(funcao);
  {
    ctxThree = canvas.getContext("2d");
    addEventListener(
      "click",
      desenharLinha3(ctxThree, 300, 0, -20, 480, "tomato", 5)
    );
  }
}

function calculo() {
  const demon = document.getElementById("demo");
  const fun = "f(x) = x + 1";
  const resultado =
    "Se x = 0 -> " +
    fun +
    " -> y = 0 + 1 -> y = 1 -> Se y = 0 -> f(x) = x + 1 -> 0 = x + 1-> x = -1";
  demon.textContent = resultado;
}
document.getElementById("button").addEventListener("click", calculo);
// f(x) = x + 1
// y = 0 + 1
// y = 1
// --
// f(x) = x + 1
// 0 = x + 1
// x = -1
//------------------------------------

function desenharLinha1(
  ctxx,
  xx1,
  yy1,
  xx2,
  yy2,
  stroke = "black",
  width = 10
) {
  ctxx.beginPath();
  ctxx.moveTo(xx1, yy1);
  ctxx.lineTo(xx2, yy2);
  ctxx.strokeStyle = stroke;
  ctxx.lineWidth = width;
  ctxx.stroke();
  ctxx.font = "30px Arial";
  ctxx.fillText("Y", 30, 30);
  ctxx.fillText("0", 30, 280);
  ctxx.fillText("1", 30, 180);
  ctxx.fillText("0", 30, 340);
  ctxx.fillText("-1", 30, 440);
}

function desenharLinha22(
  ctxTwoo,
  xxx1,
  yyy1,
  xxx2,
  yyy2,
  stroke22 = "black",
  width = 10
) {
  ctxTwoo.beginPath();
  ctxTwoo.moveTo(xxx1, yyy1);
  ctxTwoo.lineTo(xxx2, yyy2);
  ctxTwoo.strokeStyle = stroke22;
  ctxTwoo.lineWidth = width;
  ctxTwoo.stroke();
  ctxTwoo.font = "30px Arial";
  ctxTwoo.fillText("X", 380, 290);
  ctxTwoo.fillText("a > 0", 190, 220);
  ctxTwoo.fillText("2", 310, 280);
  ctxTwoo.fillText("A", 120, 250);
  ctxTwoo.fillText("B", 310, 250);
  ctxTwoo.fillText("1", 120, 280);
}

function desenharLinha4(ctxFour, stroke4 = "black", width = 10) {
  ctxFour.beginPath();
  ctxFour.stroke();
  ctxFour.moveTo(20, 20);
  ctxFour.quadraticCurveTo(240, 800, 410, 20);
  //quadraticCurveTo(cpx, cpy, x, y);
  // cpx O eixo X da coordenada para o ponto de controle.
  // cpy O eixo Y da coordenada para o ponto de controle.
  // O eixo X da coordenada para o ponto final.
  // O eixo Y da coordenada para o ponto final.
  ctxFour.stroke();
  ctxFour.strokeStyle = stroke4;
  ctxFour.lineWidth = width;
}

let canvas2 = document.getElementById("myCanvas2"),
  ctxx = canvas2.getContext("2d");
ctxTwoo = canvas2.getContext("2d");
ctxFour = canvas2.getContext("2d");
ctxFiv = canvas2.getContext("2d");

desenharLinha1(ctxx, 20, 0, 20, 1000, "tomato", 10);
desenharLinha22(ctxTwoo, 0, 300, 400, 300, "tomato", 10);
desenharLinha4(ctxFour, "tomato", 10);

// --------------------------------

var appear = [1];

function calculo2(m) {
  let touse;
  const demon2 = document.getElementById("demo2");
  let buttonappear = document.getElementsByClassName("buttonClass2");
  const resultado2 =
    "De maneira geral, a função do segundo grau é qualquer sentença matemática que pode se reduzir a seguinte fórmula: f(x) = ax² + bx + c.";
  demon2.textContent = resultado2;
  if (m > buttonappear.length) {
    appear = 1;
  }
  if (m < 1) {
    appear = buttonappear.length;
  }
  for (touse = 0; touse < buttonappear.length; touse++) {
    buttonappear[touse].style.display = "none";
  }
  buttonappear[appear - 1].style.display = "block";
}
document.getElementById("button2").addEventListener("click", calculo2);

function calculo3() {
  const demon3 = document.getElementById("demo3");
  const resultado3 = "Além disso, o coeficiente a também é responsável pela “abertura” da parábola. Para perceber isso, considere dois pontos A e B, obtidos pela interseção de uma reta paralela ao eixo x e a parábola. Quanto maior o valor do módulo do coeficiente a, menor será a distância entre os pontos A e B, como mostra o exemplo abaixo";
  demon3.textContent = resultado3;
  console.log(resultado3);
}
document.getElementById("button3").addEventListener("click", calculo3);

// ---------------------------------------
