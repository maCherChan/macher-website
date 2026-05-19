const toggle = document.getElementById('langToggle');
const textCn = document.getElementById('textCn');
const textEn = document.getElementById('textEn');

toggle.addEventListener('click', () => {
  const cnActive = textCn.classList.contains('active');

  if (cnActive) {
    textCn.classList.remove('active');
    textCn.setAttribute('aria-hidden', 'true');
    textEn.classList.add('active');
    textEn.removeAttribute('aria-hidden');
  } else {
    textEn.classList.remove('active');
    textEn.setAttribute('aria-hidden', 'true');
    textCn.classList.add('active');
    textCn.removeAttribute('aria-hidden');
  }
});
