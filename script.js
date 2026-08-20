const menu = document.querySelector(".nav-links");
const menuButton = document.querySelector(".btn-menu");

menuButton.addEventListener("click", function () {
  const isOpen = menu.classList.toggle("aperto");

  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Chiudi menu" : "Apri menu"
  );
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("aperto");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Apri menu");
  });
});


const servizi = [
  {
    nome: "Taglio",
    prezzo: 15,
    descrizione: "Linee pulite, consulenza rapida e finitura precisa."
  },
  {
    nome: "Barba",
    prezzo: 10,
    descrizione: "Rifinitura, contorni e cura per una barba ordinata."
  },
  {
    nome: "Taglio + Barba",
    prezzo: 22,
    descrizione:
      "Il servizio completo per un look curato dalla testa al viso."
  }
];


const contenitore = document.querySelector(".servizi-grid");
const messaggio = document.querySelector("#messaggio");

servizi.forEach(function (servizio, index) {
  const card = document.createElement("article");

  card.classList.add("servizio");

  card.innerHTML = `
    <div>
      <span class="service-number">0${index + 1}</span>

      <h3>${servizio.nome}</h3>

      <p>${servizio.descrizione}</p>
    </div>

    <div class="service-bottom">
      <span class="price">${servizio.prezzo}€</span>

      <button class="service-book" type="button">
        Scegli
      </button>
    </div>
  `;

  contenitore.appendChild(card);

  card
    .querySelector(".service-book")
    .addEventListener("click", function () {
      messaggio.value =
        `Ciao! Vorrei prenotare il servizio: ${servizio.nome}.`;

      document
        .querySelector("#contatti")
        .scrollIntoView({ behavior: "smooth" });

      document.querySelector("#nome").focus({
        preventScroll: true
      });
    });
});


const form = document.querySelector("#form-contatto");
const status = document.querySelector("#form-status");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.querySelector("#nome").value.trim();
  const email = document.querySelector("#email").value.trim();

  const messaggioTesto = document
    .querySelector("#messaggio")
    .value.trim();

  status.classList.remove("error");

  if (nome === "" || email === "" || messaggioTesto === "") {
    status.textContent = "Compila tutti i campi prima di inviare.";
    status.classList.add("error");
    return;
  }

  const emailValida = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!emailValida) {
    status.textContent = "Inserisci un indirizzo email valido.";
    status.classList.add("error");
    return;
  }

  status.textContent =
    `Grazie ${nome}, la richiesta è stata registrata. Ti ricontatteremo presto.`;

  form.reset();
});