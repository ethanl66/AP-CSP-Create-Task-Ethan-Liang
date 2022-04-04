const historyArray = [];
let category = "";
let filterActive = false;

let chooseCategory = function () {
  let selectionNumber = Math.floor(Math.random() * 33 + 1);
  //console.log(selectionNumber);

  if (selectionNumber == 1) {
    category = "cringe";
  }
  if (selectionNumber == 2) {
    category = "wink";
  }
  if (selectionNumber == 3) {
    category = "happy";
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
  if (selectionNumber == 8) {
    category = "blush";
  }
  if (selectionNumber == 9) {
    category = "pat";
  }
  if (selectionNumber == 10) {
    category = "lick";
  }
  if (selectionNumber == 11) {
    category = "hug";
  }
  if (selectionNumber == 12) {
    category = "cry";
  }
  if (selectionNumber == 13 || selectionNumber == 14) {
    category = "poke";
  }
  if (selectionNumber == 15 || selectionNumber == 16) {
    category = "kick";
  }
  if (selectionNumber == 17 || selectionNumber == 18) {
    category = "slap";
  }
  if (selectionNumber == 19 || selectionNumber == 20) {
    category = "smile";
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
  if (selectionNumber == 33 || selectionNumber == 34) {
    category = "bully";
  }
};

document.getElementById("smug-select").addEventListener("click", function () {
  if (
    document.getElementById("smug-select").classList.contains("selected") ==
    false
  ) {
    document
      .querySelectorAll(".selected")
      .forEach((el) => el.classList.remove("selected"));
    document.getElementById("smug-select").classList.add("selected");

    if (document.getElementById("smug-select").classList.contains("selected")) {
      category = "smug";
      filterActive = true;
    }
  } else if (
    document.getElementById("smug-select").classList.contains("selected") ==
    true
  ) {
    document
      .querySelectorAll(".selected")
      .forEach((el) => el.classList.remove("selected"));

    chooseCategory();
    filterActive = false;
  }
});
document.getElementById("bonk-select").addEventListener("click", function () {
  if (
    document.getElementById("bonk-select").classList.contains("selected") ==
    false
  ) {
    document
      .querySelectorAll(".selected")
      .forEach((el) => el.classList.remove("selected"));
    document.getElementById("bonk-select").classList.add("selected");

    if (document.getElementById("bonk-select").classList.contains("selected")) {
      //delete selected class from everything except this button
      category = "bonk";
      filterActive = true;
    }
  } else if (
    document.getElementById("bonk-select").classList.contains("selected") ==
    true
  ) {
    document
      .querySelectorAll(".selected")
      .forEach((el) => el.classList.remove("selected"));

    chooseCategory();
    filterActive = false;
  }
});
document.getElementById("cringe-select").addEventListener("click", function () {
  if (
    document.getElementById("cringe-select").classList.contains("selected") ==
    false
  ) {
    document
      .querySelectorAll(".selected")
      .forEach((el) => el.classList.remove("selected"));
    document.getElementById("cringe-select").classList.add("selected");

    if (
      document.getElementById("cringe-select").classList.contains("selected")
    ) {
      //delete selected class from everything except this button
      category = "cringe";
      filterActive = true;
    }
  } else if (
    document.getElementById("cringe-select").classList.contains("selected") ==
    true
  ) {
    document
      .querySelectorAll(".selected")
      .forEach((el) => el.classList.remove("selected"));

    chooseCategory();
    filterActive = false;
  }
});
document.getElementById("nom-select").addEventListener("click", function () {
  if (
    document.getElementById("nom-select").classList.contains("selected") ==
    false
  ) {
    document
      .querySelectorAll(".selected")
      .forEach((el) => el.classList.remove("selected"));
    document.getElementById("nom-select").classList.add("selected");

    if (document.getElementById("nom-select").classList.contains("selected")) {
      //delete selected class from everything except this button
      category = "nom";
      filterActive = true;
    }
  } else if (
    document.getElementById("nom-select").classList.contains("selected") == true
  ) {
    document
      .querySelectorAll(".selected")
      .forEach((el) => el.classList.remove("selected"));

    chooseCategory();
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
