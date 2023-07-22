let imgBox = document.querySelectorAll(".imgBox");
let contentBox = document.querySelectorAll(".contentBox");

for (let i = 0; i < imgBox.length; i++) {
  if (imgBox[i] && contentBox[i]) {
    imgBox[i].addEventListener("mouseover", function () {
      // Show the corresponding content box
      contentBox[i].classList.add("active");

      // Add active class to the hovered image box
      imgBox[i].classList.add("active");

      // Remove active class from other content boxes and image boxes
      for (let j = 0; j < contentBox.length; j++) {
        if (j !== i) {
          contentBox[j].classList.remove("active");
          imgBox[j].classList.remove("active");
        }
      }
    });
  }
}
