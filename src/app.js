const $ = (sel) => document.querySelector(sel);

const btn = $("#btnGreet");
const result = $("#result");
const nameInput = $("#name");

function saludoPorHora(){
    const h = new Date().getHours();
    if(h>=5 && h <= 11) return "Buenos dias";
    if(h >= 12 && h <= 18) return "Buenas tardes";
    return "Buenas noches";
}

btn.addEventListener("click", () => {
  const nombre = (nameInput.value || "").trim();
  const base = saludoPorHora();
  result.textContent = nombre ? `${base} ${nombre} ` : `${base}`;
});
