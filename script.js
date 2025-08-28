// CLICKING THE HEART ICON
const getHeartCount = document.getElementById("heart-count");
let heartCount = parseInt(getHeartCount.innerText);

const cardHearts = document.getElementsByClassName("heart");

for (const heart of cardHearts) {
  heart.addEventListener("click", function () {
    heartCount++;
    getHeartCount.innerText = heartCount;
  });
}

// CALL BUTTON FEATURES

const coinCount = document.getElementById("coin-count");
let coins = parseInt(coinCount.innerText);

// --- CALL BUTTONS VARIABLE ---
const callButtons = document.getElementsByClassName("call-it");

// --- CALL HISTORY SECTION VARIABLE ---
const callHistory = document.getElementById("history-items");

// --- CLEAR HISTORY BUTTON VARIABLE ---
const clearBtn = document.getElementById("clear-history");

// USING FOR OF LOOP TO GET THE BUTTON
for (const button of callButtons) {
  button.addEventListener("click", function () {
    // AVAILABLE COINS
    if (coins < 20) {
      alert("Not enough coins! You need at least 20 coins to make a call.");
      return;
    }
    // GETTING THE PARENT DIV
    const card = button.closest(".cards");

    // SERVICE NAME AND NUMBER VARIABLE
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;

    // SHOWING THE ALERT
    alert("Calling " + serviceName + " (" + serviceNumber + ")");

    // MINUS 20 COINS
    coins = coins - 20;
    coinCount.innerText = coins;

    // ADDED CALL HISTORY
    const historyItem = document.createElement("div");
    historyItem.className =
      "flex justify-between mt-5 bg-gray-100 p-3 rounded-lg";
    const time = new Date().toLocaleTimeString();

    historyItem.innerHTML = `
          <div class="flex justify-between ">
            <div>
              <h2 class="font-semibold inter-font">Fire Service Number</h2>
              <p class="inter-font">999</p>
            </div>
            <p class="inter-font ml-20">11:36:59 AM</p>
          </div>
    `;

    callHistory.appendChild(historyItem);
  });
}

// CLEAR CALL HISTORY
clearBtn.addEventListener("click", function () {
  callHistory.innerHTML = "";
});
