const hiddenElement = document.querySelector('.scroll-area');
const goToBtn = document.querySelector('.up-btn');
const themeSwitcherBtn = document.querySelector('.icon__button');

function handleButtonClick() {
  hiddenElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
}
goToBtn.addEventListener('click', handleButtonClick);

window.addEventListener('scroll', () => {
  if (scrollY > 230) {
    themeSwitcherBtn.style.position = 'fixed';
    themeSwitcherBtn.style.top = '10px';
  }
  if (scrollY < 230) {
    themeSwitcherBtn.style.position = 'absolute';
    themeSwitcherBtn.style.top = '0';
  }
  if (scrollY > 300) {
    goToBtn.classList.remove('is-hidden');
  } else if (scrollY < 300) {
    goToBtn.classList.add('is-hidden');
  }
});
