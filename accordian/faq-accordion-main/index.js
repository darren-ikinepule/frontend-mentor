// let button = document.getElementById("button1");

// let toogle = function () {
//   let accordian = document.getElementById("accordian1");
//   let shouldShowIt = accordian.style.display === "none";

//   if (shouldShowIt) {
//     accordian.style.display = "block";
//   } else {
//     accordian.style.display = "none";
//   }
// };
// button.addEventListener("click", () => toogle());
let toggleButtons = document.querySelector(".btn-img");
  document.addEventListener("click", () => {
  const toggleButtons = document.querySelectorAll(".btn-img");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Find the closest .toogle-container and its next .hidden-para
      const hiddenPara = button.parentElement.nextElementSibling;

      // Toggle visibility
      hiddenPara.classList.toggle("active");

      // Change plus to minus icon
      if (hiddenPara.classList.contains("active")) {
        button.src = "./assets/images/icon-minus.svg";
      } else {
        button.src = "./assets/images/icon-plus.svg";
      }
    });
  });
});
