let currentLang = "id";

const hurufHijaiyah = [
  "ا","ب","ت","ث","ج","ح","خ",
  "د","ذ","ر","ز","س","ش",
  "ص","ض","ط","ظ","ع","غ",
  "ف","ق","ك","ل","م","ن",
  "ه","و","ي"
];

document.addEventListener("DOMContentLoaded", () => {
  renderHuruf();
});

function setLang(lang) {
  currentLang = lang;
  const subtitle = document.getElementById("subtitle");

  subtitle.textContent =
    lang === "id"
      ? "Belajar membaca Al-Qur’an"
      : "تعلم قراءة القرآن";
}

function renderHuruf() {
  const container = document.getElementById("huruf");
  container.innerHTML = "";

  hurufHijaiyah.forEach(h => {
    const btn = document.createElement("button");
    btn.textContent = h;
    btn.onclick = () => alert("Huruf: " + h);
    container.appendChild(btn);
  });
}
