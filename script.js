// Musica parte al primo click
let musicaAvviata = false;

function avviaMusica() {
  if (!musicaAvviata) {
    const audio = document.getElementById('bgMusic');
    audio.play().catch(() => {});
    musicaAvviata = true;
  }
}

// Avvia tutto al primo click
document.body.addEventListener('click', () => {
  avviaMusica();
  lanciaCuori();
  lanciaPetali();
}, { once: true });

// Regali
function mostraFoto1() { 
  avviaMusica();
  nascondiTutto(); 
  mostra('foto1'); 
}

function mostraSorpresina() { 
  avviaMusica();
  nascondiTutto(); 
  mostra('sorpresina');
  setTimeout(() => typeWriter('tiAmo', 'Ti amo infinitamente'), 1000);
}

function apriSpotify() {
  avviaMusica();
  window.open('https://open.spotify.com/track/60r5kXIqq9d89Y6SsNQC6o', '_blank');
}

function tornaIndietro() { 
  nascondiTutto(); 
}

function nascondiTutto() {
  document.querySelectorAll('.sezione').forEach(s => s.style.display = 'none');
}

function mostra(id) { 
  document.getElementById(id).style.display = 'block'; 
}

// Bacio
function mostraBacio() {
  avviaMusica();
  const cuore = document.getElementById('cuore');
  cuore.style.display = 'block';
  setTimeout(() => cuore.style.display = 'none', 3000);
}

// Cuoricini
function lanciaCuori() {
  setInterval(() => {
    const c = document.createElement('div');
    c.innerHTML = '♥';
    c.style.cssText = `
      position:fixed; left:${Math.random()*100}vw; top:-20px;
      font-size:20px; color:#e91e63; animation:fall 4s linear forwards; z-index:999;
    `;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }, 300);
}

// Petali
function lanciaPetali() {
  setInterval(() => {
    const p = document.createElement('div');
    p.style.cssText = `
      position:fixed; left:${Math.random()*100}vw; top:-15px;
      width:15px; height:15px; background:#ff69b4;
      border-radius:50% 0; transform:rotate(${Math.random()*360}deg);
      animation:fall 5s linear forwards; z-index:998;
    `;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 5000);
  }, 400);
}

// Typewriter
function typeWriter(id, text) {
  const el = document.getElementById(id);
  el.innerHTML = '';
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, 100);
}