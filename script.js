const knapp = document.querySelector("#visa-mer");
const mer = document.querySelector("#mer");

if (mer) {
    mer.classList.add("gomd");
}

function visaMer() {
    if (!mer || !knapp) return;
    mer.classList.toggle("gomd");
    if (mer.classList.contains("gomd")) {
        knapp.textContent = "Visa mer";
        knapp.setAttribute("aria-expanded", "false");
    } else {
        knapp.textContent = "Visa mindre";
        knapp.setAttribute("aria-expanded", "true");
    }
}

if (knapp) {
    knapp.addEventListener("click", visaMer);
}

// Bonus: kopiera mailadressen med ett klick
const kopiera = document.querySelector("#kopiera");

function kopieraMail() {
    navigator.clipboard.writeText("sivertssonstina@gmail.com");
    if (kopiera) {
        kopiera.textContent = "Kopierat!";
    }
}

if (kopiera) {
    kopiera.addEventListener("click", kopieraMail);
}