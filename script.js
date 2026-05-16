const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let w, h;

function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  draw();
}
function draw(){
  ctx.clearRect(0,0,w,h);
  for(let i=0; i<300; i++){
    const x = Math.random() * w;
    const y = Math.random() * h;
    const r = 0.2 + Math.random() * 2.2;
    const alpha = 0.4 + Math.random() * 0.6;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.fill();
  }
}
window.addEventListener('resize', resize);
resize();



const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.end, .card, .txtc').forEach(el => {
    observer.observe(el);
});


function openModal(e, fileName, filePath, description) {
    e.preventDefault();
    
    document.getElementById('modalFileName').textContent = fileName;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalDownload').href = filePath;
    
    document.getElementById('modal').classList.add('open');
}

function closeModal() {
    document.getElementById('modal').classList.remove('open');
}

document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});