const $ = (sel) => document.querySelector(sel);

const btn = $("#btnGreet");
const result = $("#result");
const nameInput = $("#name");

btn.addEventListener("click", () => {
  const nombre = (nameInput.value || "").trim();
  result.textContent = nombre ? `Hola ${nombre} ` : "Hola ";
});
