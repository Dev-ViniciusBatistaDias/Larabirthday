
function lancarCoracoes() {
  const numHearts = 15; // Quantidade de corações a cada clique

  for (let i = 0; i < numHearts; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";
    heart.style.opacity = Math.random();
    heart.style.transform = `scale(${Math.random() * 1 + 0.5}) rotate(-45deg)`;
    document.body.appendChild(heart);

    // Remover o coração depois da animação
    setTimeout(() => {
      heart.remove();
    }, 7000);
  }
}
