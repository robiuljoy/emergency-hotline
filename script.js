// CLICKING THE HEART ICON
const getHeartCount = document.getElementById("heart-count");
let heartCount = parseInt(getHeartCount.innerText);

const cardHearts = document.getElementsByClassName("heart");

for (const heart of cardHearts) {
  heart.addEventListener("click", () => {
    heartCount++;
    getHeartCount.innerText = heartCount;
  });
}
