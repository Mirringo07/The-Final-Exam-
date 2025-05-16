// Carrusel básico con botones
const sliderList = document.getElementById('slider-list');
const totalSlides = sliderList.children.length;
let currentIndex = 0;

function showSlide(index) {
    // Ajusta el índice para que esté dentro del rango
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    sliderList.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Control automático
let sliderInterval = setInterval(nextSlide, 3000);

// Botones
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

btnPrev.addEventListener('click', () => {
    prevSlide();

    // Reiniciar intervalo para que no cambie justo después de pulsar
    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, 3000);
});

btnNext.addEventListener('click', () => {
    nextSlide();

    clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, 3000);
});

//botón volver arriba
const btnTop = document.getElementById('btn-top');

const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || window.pageYOffset;

  // Mostrar/ocultar botón según scroll vertical
  if (scrollY > 200) {
    btnTop.classList.add('show');
  } else {
    btnTop.classList.remove('show');
  }

  // Evitar que el botón se meta en el footer, mantener 30px arriba
  if (footer) {
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const distanceToFooter = windowHeight - footerRect.top;

    if (distanceToFooter > 30) {
      // Estamos cerca o dentro del footer: sube el botón
      btnTop.style.bottom = `${distanceToFooter + 30}px`;
    } else {
      // Estamos lejos del footer, posición normal
      btnTop.style.bottom = '30px';
    }
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
