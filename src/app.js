/* eslint-disable no-console */
import "bootstrap";
import "./style.css";

//-- Funcion del boton que llama a la Funcion de Variables Principales boton(ACCION) = generadorSALUDOS(REACCION) --//

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#RESPUESTA").innerHTML = generadorSALUDOS();
  });
  console.log("SALUDOS DESDE ESPAÑA");

  this;
};

//-- Funcion de Variables Principales "generadorSALUDOS = mellamo + nombre + bienvenida + pais" --//

let generadorSALUDOS = () => {
  let mellamo = [
    "Me llamo",
    "My name is",
    "Je m'appelle",
    "Ich HeiBe",
    "Меня зовут",
    "اسمي هو"
  ];

  let nombre = ["JORGE", "MICHAEL", "PIERRE", "LUDWIG", "VLADIMIR", "HASSAN"];

  let bienvenida = [
    "bienvenidos a",
    "welcome to",
    "bienvenue a la",
    "willkommen zu",
    "Добро пожаловать в",
    "مرحبا بك في"
  ];

  let pais = ["ESPAÑA", "USA", "FRANCE", "DEUTSCHLAND", "RUSSIA", "PALESTINE"];

  let despedida = [
    ". ADIOS!",
    ". BYE!",
    ". AU REVOIR!",
    ". AUF WIEDERSEN!",
    ". Пока!",
    ". وداعًا!"
  ];

  //-- Variables INDEX que hacen que aparezca un valor aleatorio en referencia las variables principales --//

  let mellamoINDEX = Math.floor(Math.random() * mellamo.length);

  let nombreINDEX = Math.floor(Math.random() * nombre.length);

  let bienvenidaINDEX = Math.floor(Math.random() * bienvenida.length);

  let paisINDEX = Math.floor(Math.random() * pais.length);

  let despedidaINDEX = Math.floor(Math.random() * despedida.length);

  //-- RETURN -> RESULTADO --//

  return (
    mellamo[mellamoINDEX] +
    " " +
    nombre[nombreINDEX] +
    " " +
    bienvenida[bienvenidaINDEX] +
    " " +
    pais[paisINDEX] +
    " " +
    despedida[despedidaINDEX]
  );
};
