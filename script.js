const menu = document.querySelector(".nav-links");
const bottone = document.querySelector(".btn-menu");

bottone.addEventListener("click", function() {
  menu.classList.toggle("aperto");
});


const servizi = [
  { nome: "Taglio", prezzo: 15 },
  { nome: "Barba", prezzo: 10 },
  { nome: "Taglio + Barba", prezzo: 22 }
];

const contenitore = document.querySelector(".servizi-grid");

for (let i = 0; i < servizi.length; i++) {
  const card = document.createElement("div");
  card.classList.add("servizio");
  card.innerHTML = "<h3>" + servizi[i].nome + "</h3><p>" + servizi[i].prezzo + "€</p><button>Prenota</button>";
  contenitore.appendChild(card);

  const bottonePrenota = card.querySelector("button");
  bottonePrenota.addEventListener("click", function() {
    alert("Hai prenotato: " + servizi[i].nome);
  });
}
