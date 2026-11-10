  const modal = document.getElementById('cuponModal');
  const btnAbrir = document.getElementById('abrirCupon'); // Cambia esto según el selector de tu botón actual
  const spanCerrar = document.getElementById('cerrarModal');
  const btnEntendido = document.getElementById('btnEntendido');

  // Si haces clic en el botón de la oferta, se abre la ventana
  if(btnAbrir) {
    btnAbrir.onclick = function(e) {
      e.preventDefault();
      modal.style.display = 'flex';
    }
  }

  // Botones para cerrar la ventana
  spanCerrar.onclick = function() { modal.style.display = 'none'; }
  btnEntendido.onclick = function() { modal.style.display = 'none'; }

  // Si hacen clic fuera de la caja blanca, también se cierra
  window.onclick = function(event) {
    if (event.target == modal) { modal.style.display = 'none'; }
  }