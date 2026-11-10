const oferta_banner = document.getElementById("promo-banner");
const boton_banner = document.getElementById("boton-banner");

boton_banner.addEventListener('click', esconderBanner);

function esconderBanner(){
    oferta_banner.style.display = 'none';
}