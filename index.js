// const setSong = document.getElementById("setSong");
// const empty = document.querySelector(".empty");
// const text = document.querySelectorAll("#text");
// function backgroundAndText(background, text) {
//   background.style.backgroundColor = "red";
//   text.innerHTML = "This is now a big red box";
//   text.textContent = "This is now a big red box";
// }
// DOMSelectors.imgButton.addEventListener("click", function () {
//   backgroundAndText(DOMSelectors.background, DOMSelectors.text);
// });

// function changeLi() {
//   let pointIndex = 1;
//   DOMSelectors.points.array.forEach((point) => {
//     point.addEventListener("click", function () {
//       point.textContent = `Hello I am ${pointIndex}`;
//       pointIndex++;
//     });
//   });
// }
DOMSelectors.songButton.insertAdjacentElement(
  "beforebegin",
  "<h1>We are an H1</h1>"
);

DOMSelectors.imgButton.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentElement("afterend");
});

const DOMSelectors = {
  songButton: document.getElementById("songButton"),
  songName: document.getElementById("songName"),
  artistButton: document.getElementById("artistButton"),
  artistName: document.getElementById("artistName"),
  imgButton: document.getElementById("imgButton"),
  setImg: document.getElementById("setImg"),
};
