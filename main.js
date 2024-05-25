const shareBtn = document.getElementById(`shareButton`);
const shareBox = document.getElementById(`shareBox`);

function hideElement() {
  shareBox.classList.toggle("hide");
  shareBtn.classList.toggle("clicked");
}
