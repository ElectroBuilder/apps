const btn = document.getElementById('btn');
const ic = document.getElementById('image-container');
const sound = new Audio('assets/sound.mp3')

btn.addEventListener('click', () => {
    sound.play();
    ic.style.display = 'block'

    setTimeout(() => {
        ic.style.display = 'none';
    }, 2500);
});

function updateText() {

    if (window.innerWidth <= 600) {
      btn.textContent = "Don't press";
    } else {
      btn.textContent = "Don't press this button";
    }
  }

window.addEventListener("load", updateText);
window.addEventListener("resize", updateText);
  