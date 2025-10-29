const card = document.querySelector('.card');
let mouseX = 0, mouseY = 0;
let rotateX = 0, rotateY = 0;
let targetX = 0, targetY = 0;

document.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  mouseX = e.clientX - rect.left - rect.width / 2;
  mouseY = e.clientY - rect.top - rect.height / 2;
});

function animate() {
  targetX += (mouseY / 20 - targetX) * 0.1;
  targetY += (-mouseX / 20 - targetY) * 0.1;
  card.style.transform = `rotateX(${targetX}deg) rotateY(${targetY}deg)`;
  requestAnimationFrame(animate);
}
animate();

card.addEventListener('mouseleave', () => {
  mouseX = mouseY = targetX = targetY = 0;
});