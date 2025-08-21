const $ = (sel) => document.querySelector(sel);

const btn = $("#btnGreet");
const result = $("#result");
const nameInput = $("#name");
const genderSelect = $("#gender");
const ageInput = $("#age");
const langSelect = $("#lang");

function tratamiento(genero, edadNum, lang = "es"){
    if (!(edadNum > 30)) return "";
  if (lang === "en") {
    if (genero === "f") return "Ms.";
    if (genero === "m") return "Mr.";
    return "";
  } else {
    if (genero === "f") return "Sra.";
    if (genero === "m") return "Sr.";
    return "";
  }
}

function saludoPorHora(lang = "es"){
    const h = new Date().getHours();
    if(lang === "en"){
        if(h >= 5 && h <= 11)return "Good Morning";
        if(h >=12 && h <= 18) return "Good Afternoon";
        return "Good Evening"
    }
    else{
        if(h>=5 && h <= 11) return "Buenos dias";
        if(h >= 12 && h <= 18) return "Buenas tardes";
        return "Buenas noches";
    }
    
}

btn.addEventListener("click", () => {
  const nombre = (nameInput.value || "").trim();
  const genero = genderSelect.value;
  const edadNum = Number(ageInput.value);
  const lang = langSelect.value || "es";    

  const titulo = tratamiento(genero, edadNum, lang);
  const base = saludoPorHora(lang);

  const saludo = `${base}${titulo ? " " + titulo : ""}${nombre ? " " + nombre : ""} 👋`;
  result.textContent = saludo;
});
