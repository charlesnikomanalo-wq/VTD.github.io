const envelope = document.getElementById("envelope");
const letterPreview = document.getElementById("letterPreview");
const fullLetter = document.getElementById("fullLetter");

let state = 0; 

envelope.addEventListener("click", () => {
  if (state === 0) {
    envelope.classList.add("open");
    envelope.classList.add("peek");
    state = 1;
  } else if (state === 1) {
    letterPreview.style.opacity = 0;
    fullLetter.classList.add("show");
    state = 2;
  }
});
