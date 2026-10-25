// ══════════════════════════════════════════
//  ENVÍO DEL FORMULARIO A WHATSAPP CON EL NUEVO NÚMERO
// ══════════════════════════════════════════
const form = document.getElementById('formSoyMas');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const grado = document.getElementById('grado').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value.trim();

    // 📱 Tu nuevo número de WhatsApp configurado (57 + 3244992601)
    const miNumeroWhatsApp = '573244992601'; 

    let textoWhatsApp = `*¡Nuevo registro en Soy Más +!* 🌸\n\n`;
    textoWhatsApp += `👤 *Nombre:* ${nombre}\n`;
    textoWhatsApp += `🎓 *Grado:* ${grado}\n`;
    textoWhatsApp += `📌 *Asunto:* ${asunto}\n`;
    if (mensaje) {
      textoWhatsApp += `💬 *Mensaje/Propuesta:* ${mensaje}\n`;
    }

    const urlWhatsApp = `https://wa.me/${miNumeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;
    window.open(urlWhatsApp, '_blank');
    form.reset();
  });
}

// ══════════════════════════════════════════
//  GENERADOR DE FRASES INSPIRADORAS DIARIAS
// ══════════════════════════════════════════
const frasesEmpoderamiento = [
  '"Conocerse a una misma es el primer paso para transformar el mundo."',
  '"El liderazgo real nace de la autenticidad y del amor propio."',
  '"Cuidar de ti misma no es un lujo, es el cimiento de tu fortaleza."',
  '"Cada valor que practicas hoy construye la mujer líder del mañana."',
  '"Eres más fuerte, capaz y valiosa de lo que imaginas."'
];

function generarFrase() {
  const el = document.getElementById('fraseTexto');
  if (!el) return;
  const aleatoria = frasesEmpoderamiento[Math.floor(Math.random() * frasesEmpoderamiento.length)];
  el.style.opacity = '0';
  setTimeout(() => {
    el.textContent = aleatoria;
    el.style.opacity = '1';
  }, 200);
}

// ══════════════════════════════════════════
//  AGREGAR PALABRAS AL MURAL Y A LA MARQUESINA
// ══════════════════════════════════════════
function agregarPalabra() {
  const input = document.getElementById('palabraInput');
  const container = document.getElementById('tagsContainer');
  const track = document.getElementById('marquesinaTrack');

  if (!input) return;
  const texto = input.value.trim();
  if (texto === '') return;

  if (container) {
    const tag = document.createElement('span');
    tag.className = 'tag-item';
    tag.textContent = texto;
    container.appendChild(tag);
  }

  if (track) {
    const nuevoTexto = document.createElement('span');
    nuevoTexto.className = 'texto-flotante';
    nuevoTexto.textContent = '✨ ' + texto;
    track.appendChild(nuevoTexto);
  }

  input.value = '';
}