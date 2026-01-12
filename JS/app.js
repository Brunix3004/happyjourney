const WHATSAPP_NUMBER = "51929803321";

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

// Botones rápidos
const btnTop = document.getElementById("btn-wsp-top");
const btnHero = document.getElementById("btn-wsp-hero");
const btnHow = document.getElementById("btn-wsp-how");
const btnContact = document.getElementById("btn-wsp-contact");

const quickMsg = baseMessage("Información general (pasajes y/o alojamiento)");
[btnTop, btnHero, btnHow, btnContact].forEach(
  (btn) => (btn.href = waLink(quickMsg))
);

// Botones por servicio
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
