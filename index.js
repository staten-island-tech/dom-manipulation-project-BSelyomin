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
// DOMSelectors.songButton.insertAdjacentElement(
//   "beforebegin",
//   "<h1>We are an H1</h1>"
// );

// DOMSelectors.imgButton.addEventListener("click", function () {
//   let input = DOMSelectors.input.value;
//   DOMSelectors.box.insertAdjacentElement("afterend");
// });

// DOMSelectors.imgButton.addEventListener("click", function () {
//   backgroundAndText(DOMSelectors.background, DOMSelectors.text);
// });

const DOMSelectors = {
  songName: document.getElementById("songName"),
  artistName: document.getElementById("artistName"),
  setImg: document.getElementById("setImg"),
  set: document.getElementById("set"),
  container: document.getElementById("container"),
};

function addNewDiv() {}

DOMSelectors.set.addEventListener("click", function () {
  let song = DOMSelectors.songName.value;
  let artist = DOMSelectors.artistName.value;
  let img = DOMSelectors.setImg.value;

  DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    `<div class="fake">
        <image src></image>
        <h1>${song}</h1>
        <h2>${artist}</h2>
        <img src="${img}" alt="">
    </div>`
  );
});

// DOMSelectors.imgButton.addEventListener("click", function () {
//   let input = DOMSelectors.input.value;
//   DOMSelectors.box.insertAdjacentElement("afterend");
// });

// DOMSelectors.imgButton.addEventListener("click", function () {
//   backgroundAndText(DOMSelectors.background, DOMSelectors.text);
// });
