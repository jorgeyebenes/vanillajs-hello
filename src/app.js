/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#RESPUESTA").innerHTML = generadorSALUDOS();
  });
  console.log("SALUDOS DESDE ESPAÑA");
  this;
};

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

  let mellamoINDEX = Math.floor(Math.random() * mellamo.length);
  let nombreINDEX = Math.floor(Math.random() * nombre.length);
  let bienvenidaINDEX = Math.floor(Math.random() * bienvenida.length);
  let paisINDEX = Math.floor(Math.random() * pais.length);

  return (
    mellamo[mellamoINDEX] +
    " " +
    nombre[nombreINDEX] +
    " " +
    bienvenida[bienvenidaINDEX] +
    " " +
    pais[paisINDEX]
  );
};
