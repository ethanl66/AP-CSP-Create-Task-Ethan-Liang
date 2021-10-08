const historyArray = [];
let category = "";
let filterActive = false;

let chooseCategory = function () {
  let selectionNumber = Math.floor(Math.random() * 72 + 1);
  //console.log(selectionNumber);

  if (selectionNumber == 1) {
    category = "cringe";
  }
  if (selectionNumber == 13 || selectionNumber == 14) {
    category = "poke";
  }
  if (selectionNumber == 2) {
    category = "wink";
  }
  if (selectionNumber == 3) {
    category = "happy";
  }
  if (selectionNumber == 15 || selectionNumber == 16) {
    category = "kick";
  }
  if (selectionNumber == 17 || selectionNumber == 18) {
    category = "slap";
  }
  if (selectionNumber == 4) {
    category = "bite";
  }
  if (selectionNumber == 5) {
    category = "nom";
  }
  if (selectionNumber == 6) {
    category = "highfive";
  }
  if (selectionNumber == 7) {
    category = "wave";
  }
  if (selectionNumber == 19 || selectionNumber == 20) {
    category = "smile";
  }
  if (selectionNumber == 8) {
    category = "blush";
  }
  if (selectionNumber == 21 || selectionNumber == 22) {
    category = "yeet";
  }
  if (selectionNumber == 23 || selectionNumber == 24) {
    category = "bonk";
  }
  if (selectionNumber > 24 && selectionNumber < 33) {
    category = "smug";
  }
  if (selectionNumber == 9) {
    category = "pat";
  }
  if (selectionNumber == 10) {
    category = "lick";
  }
  if (selectionNumber > 32 && selectionNumber < 44) {
    category = "awoo";
  }
  if (selectionNumber == 11) {
    category = "hug";
  }
  if (selectionNumber == 12) {
    category = "cry";
  }
  if (selectionNumber == 44 || selectionNumber == 45) {
    category = "bully";
  }
  if (selectionNumber > 45 && selectionNumber < 50) {
    category = "megumin";
  }
  if (selectionNumber > 49 && selectionNumber < 55) {
    category = "shinobu";
  }
  if (selectionNumber > 54 && selectionNumber < 62) {
    category = "neko";
  }
  if (selectionNumber > 61 && selectionNumber < 73) {
    category = "waifu";
  }
};

document
  .getElementById("megumin-select")
  .addEventListener("click", function () {
    if (
      document
        .getElementById("megumin-select")
        .classList.contains("selected") == false
    ) {
      document
        .querySelectorAll(".selected")
        .forEach((el) => el.classList.remove("selected"));
      document.getElementById("megumin-select").classList.add("selected");

      if (
        document.getElementById("megumin-select").classList.contains("selected")
      ) {
        //delete selected class from everything except this button
        category = "megumin";
        filterActive = true;
      }
    } else if (
      document
        .getElementById("megumin-select")
        .classList.contains("selected") == true
    ) {
      document
        .querySelectorAll(".selected")
        .forEach((el) => el.classList.remove("selected"));

      category = "waifu";
      filterActive = false;
    }
  });
document
  .getElementById("shinobu-select")
  .addEventListener("click", function () {
    if (
      document
        .getElementById("shinobu-select")
        .classList.contains("selected") == false
    ) {
      document
        .querySelectorAll(".selected")
        .forEach((el) => el.classList.remove("selected"));
      document.getElementById("shinobu-select").classList.add("selected");

      if (
        document.getElementById("shinobu-select").classList.contains("selected")
      ) {
        //delete selected class from everything except this button
        category = "shinobu";
        filterActive = true;
      }
    } else if (
      document
        .getElementById("shinobu-select")
        .classList.contains("selected") == true
    ) {
      document
        .querySelectorAll(".selected")
        .forEach((el) => el.classList.remove("selected"));

      category = "waifu";
      filterActive = false;
    }
  });
document.getElementById("neko-select").addEventListener("click", function () {
  if (
    document.getElementById("neko-select").classList.contains("selected") ==
    false
  ) {
    document
      .querySelectorAll(".selected")
      .forEach((el) => el.classList.remove("selected"));
    document.getElementById("neko-select").classList.add("selected");

    if (document.getElementById("neko-select").classList.contains("selected")) {
      //delete selected class from everything except this button
      category = "neko";
      filterActive = true;
    }
  } else if (
    document.getElementById("neko-select").classList.contains("selected") ==
    true
  ) {
    document
      .querySelectorAll(".selected")
      .forEach((el) => el.classList.remove("selected"));

    category = "waifu";
    filterActive = false;
  }
});
document.getElementById("awoo-select").addEventListener("click", function () {
  if (
    document.getElementById("awoo-select").classList.contains("selected") ==
    false
  ) {
    document
      .querySelectorAll(".selected")
      .forEach((el) => el.classList.remove("selected"));
    document.getElementById("awoo-select").classList.add("selected");

    if (document.getElementById("awoo-select").classList.contains("selected")) {
      //delete selected class from everything except this button
      category = "awoo";
      filterActive = true;
    }
  } else if (
    document.getElementById("awoo-select").classList.contains("selected") ==
    true
  ) {
    document
      .querySelectorAll(".selected")
      .forEach((el) => el.classList.remove("selected"));

    category = "waifu";
    filterActive = false;
  }
});

//console.log(category);

let fetchData = async function () {
  if (filterActive === false) {
    chooseCategory();
  }
  //chooseCategory();
  console.log(category);
  console.log(filterActive);

  try {
    const response = await fetch(`https://api.waifu.pics/sfw/${category}`);
    const data = await response.json();
    //console.log(data.url);

    historyArray.unshift(data.url);
    //console.log(historyArray);

    document.getElementById(
      "main-img-div"
    ).innerHTML = `<img id='main-img' src="${data.url}" alt="Waifu pic">`;

    /* historyArray.forEach((picture) => {
      document.getElementById(
        "history-img-div"
      ).innerHTML += `<img class='hist-img' src="${picture}" alt="Waifu pic">`;
    }); */
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

document.getElementById("roll-button").addEventListener("click", function () {
  fetchData();
  //for each link in the history array, insertHTML image into history div
});

const historyModal = document.getElementById("history-modal");
const historyButton = document.getElementById("history-button");
const closeModal = document.getElementById("close-modal-button");

historyButton.addEventListener("click", function () {
  console.log(historyArray);

  document.getElementById("history-img-div").innerHTML = "";
  historyArray.forEach(
    (link) =>
      (document.getElementById(
        "history-img-div"
      ).innerHTML += `<div class='hist-img-card'><img class='hist-img' src="${link}" alt="Waifu pic"></div>`)
  );
  historyModal.style.display = "block";
});

closeModal.addEventListener("click", function () {
  historyModal.style.display = "none";
});
window.onclick = function (event) {
  if (event.target == historyModal) {
    historyModal.style.display = "none";
  }
};
