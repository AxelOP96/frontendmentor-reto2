let summaries = document.querySelectorAll("summary");

function invert(event) {

  let clickedSummary = event.currentTarget;
  let clickedArrow = clickedSummary.querySelector(".block");

  clickedArrow.classList.toggle("invert");
}

summaries.forEach(summary => {
  summary.addEventListener("click", invert);
});
