document.getElementById("ano-atual").textContent = new Date().getFullYear();

// Substitua pelo seu número com DDI e DDD, apenas dígitos. Ex.: 5547999999999
var WA_NUMBER = "12997152912";

function waLink(text) {
  return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
}

// Todos os links de WhatsApp da página abrem com uma mensagem inicial
var defaultMsg = "Olá. Gostaria de informações sobre a criação de site.";
document.querySelectorAll(".wa-link").forEach(function (el) {
  el.setAttribute("href", waLink(defaultMsg));
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
});

// Formulário: monta a mensagem e abre o WhatsApp. Os dados não são armazenados pela página.
document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();
  var form = e.target;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  var d = new FormData(form);
  var msg =
    "Olá. Gostaria de solicitar um orçamento.\n" +
    "Nome: " + d.get("nome") + "\n" +
    "WhatsApp: " + d.get("whatsapp") + "\n" +
    "Cidade/UF: " + d.get("cidade") + "\n" +
    "Tipo de negócio: " + d.get("tipo") + "\n" +
    "Descrição: " + (d.get("mensagem") || "-");
  window.open(waLink(msg), "_blank", "noopener");
});
