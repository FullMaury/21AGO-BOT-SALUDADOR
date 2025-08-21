const $ = (sel) => document.querySelector(sel);

const btn = $("#btnGreet");
const result = $("#result");

btn.addEvenListener("click", () => {
    result.textContent = "Hola";
});
