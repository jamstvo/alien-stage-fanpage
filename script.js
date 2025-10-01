let lastScroll = 0;
let showTimeout = null;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 200) {
    header.classList.add('hide');
    if (showTimeout) clearTimeout(showTimeout);
  } else {
    if (showTimeout) clearTimeout(showTimeout);
    showTimeout = setTimeout(() => {
      header.classList.remove('hide');
    }, 50); // 50ms de espera antes de mostrar el header
  }
  lastScroll = currentScroll;
});
