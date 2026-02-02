let currentPage = 1;
let isScrolling = false;
let startY = 0;

/* DESKTOP SCROLL */
window.addEventListener("wheel", (e) => {
  if (isScrolling) return;
  if (e.deltaY > 50 && currentPage < 3) {
    goToPage(currentPage + 1);
  }
});

/* MOBILE SWIPE */
window.addEventListener("touchstart", (e) => {
  startY = e.touches[0].clientY;
});

window.addEventListener("touchend", (e) => {
  const endY = e.changedTouches[0].clientY;
  if (startY - endY > 50 && currentPage < 3) {
    goToPage(currentPage + 1);
  }
});

function goToPage(page) {
  isScrolling = true;

  document.querySelector(`.page-${currentPage}`).classList.remove("active");
  document.querySelector(`.page-${page}`).classList.add("active");

  currentPage = page;

  setTimeout(() => {
    isScrolling = false;
  }, 1000);
}

/* PROPOSAL LOGIC */
const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
const noText = document.getElementById("noText");

const noMessages = [
  "I’ll gift you lip gloss 💄",
  "I’ll make you coffee daily ☕",
  "I’ll feed you pizza 🍕",
  "I won’t eat your chips 😭"
];

if (yesBtn && noBtn) {
  yesBtn.onclick = () => {
    noText.textContent = "Best decision 🤍";
    noText.classList.add("show");
  };

  noBtn.onclick = () => {
    const msg = noMessages[Math.floor(Math.random() * noMessages.length)];
    noText.textContent = msg;
    noText.classList.add("show");

    setTimeout(() => {
      noText.classList.remove("show");
    }, 2500);
  };
}
