const WHATSAPP_NUMBER = "51929803321";

const aficheESNNA = "/IMAGENES/afiche-punto8.png";

const rooms = [
  // 1 mini departamento amoblado con aire acondicionado
  {
    type: "Mini departamento",
    name: "Mini departamento amoblado - Aire acondicionado",
    location: "San Juan Bautista, Maynas",
    price: "S/ 60 por dia. S/ 1000 por mes",
    cover: "/IMAGENES/rooms/minidepa-ac/cover.jpg",
    images: [
      "/IMAGENES/rooms/minidepa/1.jpeg",
      "/IMAGENES/rooms/minidepa/2.jpeg",
      "/IMAGENES/rooms/minidepa/3.jpeg",
      "/IMAGENES/rooms/minidepa/4.jpeg",
      "/IMAGENES/rooms/minidepa/5.jpeg"
    ],
    desc: "Mini depa amoblado con aire acondicionado. Ideal si quieres más independencia.",
    badges: ["2–3 huéspedes", "Amoblado", "Aire acondicionado"],
    bullets: ["Wi-Fi", "Zona de descanso", "Espacio amoblado", "Atención por WhatsApp"],
  },
  // 3 con aire acondicionado
  {
    type: "Habitación",
    name: "Habitación 1 - Aire acondicionado",
    location: "San Juan Bautista, Maynas",
    price: "S/ 50 por dia. S/ 850 por mes",
    cover: "/IMAGENES/rooms/hab1-ac/2.jpeg",
    images: [
      "/IMAGENES/rooms/hab1-ac/1.jpeg",
      "/IMAGENES/rooms/hab1-ac/2.jpeg",
      "/IMAGENES/rooms/hab1-ac/3.jpeg",
    ],
    desc: "Cómoda y fresca, ideal para descansar después de un día de viaje.",
    badges: ["2 huéspedes", "Aire acondicionado", "Baño (según disponibilidad)"],
    bullets: ["Wi-Fi", "Toallas", "Check-in coordinado por WhatsApp"],
  },
  {
    type: "Habitación",
    name: "Habitación 2 - Aire acondicionado",
    location: "San Juan Bautista, Maynas",
    price: "S/ 50 por dia. S/ 850 por mes",
    cover: "/IMAGENES/rooms/hab2-ac/1.jpeg",
    images: [
      "/IMAGENES/rooms/hab2-ac/1.jpg",
      "/IMAGENES/rooms/hab2-ac/2.jpg",
      "/IMAGENES/rooms/hab2-ac/3.jpg",
    ],
    desc: "Ambiente tranquilo con aire acondicionado para mayor comodidad.",
    badges: ["2 huéspedes", "Aire acondicionado", "Cama doble o dos camas"],
    bullets: ["Wi-Fi", "Limpieza", "Asistencia por WhatsApp"],
  },
  {
    type: "Habitación",
    name: "Habitación 3 - Aire acondicionado",
    location: "San Juan Bautista, Maynas",
    price: "S/ 50 por dia. S/ 850 por mes",
    cover: "/IMAGENES/rooms/hab3-ac/2.jpeg",
    images: [
      "/IMAGENES/rooms/hab3-ac/1.jpeg",
      "/IMAGENES/rooms/hab3-ac/2.jpeg",
    ],
    desc: "Opción con aire acondicionado para estadías cortas o largas.",
    badges: ["2 huéspedes", "Aire acondicionado", "Buena iluminación"],
    bullets: ["Wi-Fi", "Toallas", "Atención por WhatsApp"],
  },

  // 2 con ventilador
  {
    type: "Habitación",
    name: "Habitación 5 - Ventilador",
    location: "San Juan Bautista, Maynas",
    price: "S/ 40 por noche. S/ 700 por mes",
    cover: "/IMAGENES/rooms/hab5-vent/cover.jpeg",
    images: [
      "/IMAGENES/rooms/hab5-vent/1.jpeg",
      "/IMAGENES/rooms/hab5-vent/2.jpeg",
    ],
    desc: "Opción práctica y accesible con ventilador.",
    badges: ["2 huéspedes", "Ventilador", "Económica"],
    bullets: ["Wi-Fi", "Toallas", "Atención por WhatsApp"],
  },
  {
    type: "Habitación",
    name: "Habitación 6 - Ventilador",
    location: "San Juan Bautista, Maynas",
    price: "S/ 40 por noche. S/ 700 por mes",
    cover: "/IMAGENES/rooms/hab6-vent/cover.jpeg",
    images: [
      "/IMAGENES/rooms/hab6-vent/1.jpeg",
      "/IMAGENES/rooms/hab6-vent/2.jpeg",
      "/IMAGENES/rooms/hab6-vent/3.jpeg",
    ],
    desc: "Ventilador + ambiente cómodo para viajeros que quieren ahorrar.",
    badges: ["2 huéspedes", "Ventilador", "Buen descanso"],
    bullets: ["Wi-Fi", "Limpieza", "Soporte por WhatsApp"],
  },  
];


function waLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

function baseMessage(service) {
  return `Hola Happy Journey 👋
Quisiera cotizar: *${service}*.

¿Me ayudan por favor? 🙏`;
}

function buildMessageFromForm() {
  const tipo = document.getElementById("tipo").value;
  const personas = document.getElementById("personas").value;
  const origen = document.getElementById("origen").value.trim();
  const destino = document.getElementById("destino").value.trim();
  const ida = document.getElementById("fechaIda").value;
  const vuelta = document.getElementById("fechaVuelta").value;
  const presupuesto = document.getElementById("presupuesto").value.trim();
  const detalle = document.getElementById("detalle").value.trim();

  let msg = `Hola Happy Journey 👋
Quisiera cotizar: *${tipo}*.

📌 Datos:
• Personas: ${personas}
• Destino: ${destino}`;

  if (origen) msg += `\n• Origen: ${origen}`;
  if (ida) msg += `\n• Fecha ida: ${ida}`;
  if (vuelta) msg += `\n• Fecha vuelta: ${vuelta}`;
  if (presupuesto) msg += `\n• Presupuesto: ${presupuesto}`;
  if (detalle) msg += `\n\n📝 Preferencias:\n${detalle}`;

  msg += `\n\nGracias 🙂`;
  return msg;
}

// Botones rápidos WhatsApp
const btnTop = document.getElementById("btn-wsp-top");
const btnHero = document.getElementById("btn-wsp-hero");
const btnContact = document.getElementById("btn-wsp-contact");

const quickMsg = baseMessage("Información general (pasajes y/o alojamiento)");
[btnTop, btnHero, btnContact].forEach((btn) => (btn.href = waLink(quickMsg)));

// Servicios
document.querySelectorAll(".btn-service").forEach((a) => {
  const service = a.dataset.service || "Servicios";
  a.href = waLink(baseMessage(service));
});

// Form submit => WhatsApp
document.getElementById("quoteForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = buildMessageFromForm();
  window.open(waLink(msg), "_blank");
});

// Preview
document.getElementById("btnPreview").addEventListener("click", () => {
  const msg = buildMessageFromForm();
  alert(msg);
});

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// ========= Rooms rendering =========
const roomsGrid = document.getElementById("roomsGrid");
rooms.forEach((r, idx) => {
  const card = document.createElement("article");
  card.className = "card room-card";
  card.innerHTML = `
        <img class="room-cover" src="${r.cover}" alt="${r.name}">
        <div class="room-body">
          <div class="tag violet">🛏️ Habitación</div>
          <div class="room-title">${r.name}</div>
          <div class="muted" style="font-size:13.5px;">${r.desc}</div>
          <div class="room-meta" style="margin-top:8px;">
            <span>💸 <b style="color:var(--ink);">${r.price}</b></span>
            <span>•</span>
            <span>🌬️ ${(r.badges || []).includes("Ventilador") ? "Ventilador" : "Aire acondicionado"}</span>
          </div>

          <div style="margin-top:10px">
            <a class="btn small whatsapp" href="${waLink(
              baseMessage("Habitación: " + r.name)
            )}" onclick="event.stopPropagation()">Consultar 🟢</a>
          </div>
        </div>
      `;
  card.addEventListener("click", () => openRoomModal(idx));
  roomsGrid.appendChild(card);
});

const backdrop = document.getElementById("roomModalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalName = document.getElementById("modalName");
const modalDesc = document.getElementById("modalDesc");
const modalMainImg = document.getElementById("modalMainImg");
const modalThumbs = document.getElementById("modalThumbs");
const modalBadges = document.getElementById("modalBadges");
const modalBullets = document.getElementById("modalBullets");
const modalWspBtn = document.getElementById("modalWspBtn");

function openRoomModal(index) {
  const r = rooms[index];
  document.getElementById("modalPrice").textContent = `💸 ${r.price}`;
  modalTitle.textContent = r.name;
  modalName.textContent = r.name;
  modalDesc.textContent = r.desc;

  // badges
  modalBadges.innerHTML = "";
  (r.badges || []).forEach((b) => {
    const el = document.createElement("span");
    el.className = "chip teal";
    el.textContent = b;
    modalBadges.appendChild(el);
  });

  // bullets
  modalBullets.innerHTML = "";
  (r.bullets || []).forEach((b) => {
    const li = document.createElement("li");
    li.textContent = b;
    modalBullets.appendChild(li);
  });

  // gallery
  const imgs = r.images && r.images.length ? r.images : [r.cover];
  modalMainImg.src = imgs[0];

  modalThumbs.innerHTML = "";
  imgs.forEach((src, i) => {
    const t = document.createElement("img");
    t.src = src;
    t.alt = r.name + " " + (i + 1);
    if (i === 0) t.classList.add("active");
    t.addEventListener("click", () => {
      modalMainImg.src = src;
      [...modalThumbs.querySelectorAll("img")].forEach((x) =>
        x.classList.remove("active")
      );
      t.classList.add("active");
    });
    modalThumbs.appendChild(t);
  });

  modalWspBtn.href = waLink(`Hola Happy Journey 👋
  Quisiera información y disponibilidad para: *${r.name}*.

  💸 Precio: ${r.price}
  📍 Lugar: ${r.location}

  ¿Me comparten disponibilidad y condiciones de reserva? 🙂
  `);

  backdrop.style.display = "flex";
  backdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeRoomModal() {
  backdrop.style.display = "none";
  backdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
}

modalClose.addEventListener("click", closeRoomModal);
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) closeRoomModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeRoomModal();
});

// ========= Afiche (Punto 8) =========
const aficheLink = document.getElementById("aficheLink");
const aficheModalBackdrop = document.getElementById("aficheModalBackdrop");
const aficheImg = document.getElementById("aficheImg");
const openAficheModal = document.getElementById("openAficheModal");
const aficheClose = document.getElementById("aficheClose");

aficheLink.href = aficheESNNA;

openAficheModal.addEventListener("click", () => {
  aficheImg.src = aficheESNNA;
  aficheModalBackdrop.style.display = "flex";
  document.body.style.overflow = "hidden";
});

function closeAfiche() {
  aficheModalBackdrop.style.display = "none";
  document.body.style.overflow = "auto";
}

aficheClose.addEventListener("click", closeAfiche);
aficheModalBackdrop.addEventListener("click", (e) => {
  if (e.target === aficheModalBackdrop) closeAfiche();
});
