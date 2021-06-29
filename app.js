"use strict";
let userInput;

$("form").on("submit", getSearch);
const API_KEY = "ePFJzVv31YN2Pe8nhzaBJeJ6GqfNOYZb";
async function getSearch(e) {
  e.preventDefault();
  userInput = $("input").val();
  let imgURL = await getGiphy();
  appendToDOM(imgURL);
}

async function getGiphy() {
  let res = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${API_KEY}`,
    { headers: { accept: "application/json" } }
  );
  let imgURL = res.data.data[0].images.original.url;
  console.log(imgURL);
  return imgURL;
}

function appendToDOM(imgURL) {
  let newImg = $(`<div><img src='${imgURL}'></div>`);
  $("#img-container").append(newImg);
}
