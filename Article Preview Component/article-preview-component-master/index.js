const shareBtn = document.querySelector(".share-btn");
const sharePopup = document.querySelector(".share-popup");

shareBtn.addEventListener('click', () => {
  sharePopup.style.display = (sharePopup.style.display === "flex" ? "none" : "flex");
});