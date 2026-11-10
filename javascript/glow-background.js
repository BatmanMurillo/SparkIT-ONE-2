// Usamos window para que detecte el mouse en TODA la pantalla
window.addEventListener('mousemove', (e) => {
    const glow = document.getElementById('glow-background');
    if (glow) {
        // Es fundamental el +'px' para que el CSS entienda la posición
        glow.style.setProperty('--x', e.clientX + 'px');
        glow.style.setProperty('--y', e.clientY + 'px');
    }
});