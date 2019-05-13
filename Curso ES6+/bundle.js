"use strict";

newRequestPop = function newRequestPop() {
  localStorage["newRequest"] = true;
  swal({
    title: window.location.pathname.includes("/hc/pt-br")
      ? "Nossa página de “Fale conosco” mudou!"
      : window.location.pathname.includes("/hc/es")
      ? "Nuestra página de 'contáctanos' ha cambiado!"
      : "Our 'Contact Us' page has changed!",
    text: window.location.pathname.includes("/hc/pt-br")
      ? "Com o objetivo de melhorar a sua experi\xEAncia, mudamos a nossa p\xE1gina de abertura de chamados. \n    Voc\xEA pode resolver suas d\xFAvidas lendo nossos tutorias, falar com um dos nossos agentes atrav\xE9s do chat ou nos enviar um e-mail, basta clicar na op\xE7\xE3o desejada."
      : window.location.pathname.includes("/hc/es")
      ? "Con el objetivo de mejorar tu experiencia, cambiamos nuestra p\xE1gina para generar solicitudes. \n      Puedes resolver tus dudas leyendo nuestros tutoriales, o hablando con uno de nuestros agentes envi\xE1ndonos un email, basta clicar en la opci\xF3n deseada"
      : "In order to improve your experience, we have changed our contact us page.\n      You can solve your issues by reading our tutorials or sending us an email request, just click on e-mail.",
    icon: "info",
    closeOnClickOutside: false,
    closeOnEsc: false,
    button: window.location.pathname.includes("/hc/pt-br")
      ? "Quero ver!"
      : window.location.pathname.includes("/hc/es")
      ? "quiero ver!"
      : "I want to see!",
    dangerMode: false
  });
};

$(document).ready(function() {
  if (!localStorage["newRequest"]) {
    newRequestPop();
  }
});
