"use strict";
let userInput;
const API_KEY = "ePFJzVv31YN2Pe8nhzaBJeJ6GqfNOYZb";

$("form").on("submit", getSearch);

async function getSearch(e) {
  e.preventDefault();

  userInput = $("input").val();
  let imgURL = await getGiphy();
  appendToDOM(imgURL);
  $('form')[0].reset();
}

async function getGiphy() {
  let res = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${API_KEY}`
    // { headers: { accept: "application/json" } }
  );
  console.log(res)
  let imgURL = res.data.data[0].images.original.url;
  console.log(imgURL);
  return imgURL;
}

function appendToDOM(imgURL) {
  let newImg = $(`<div><img src='${imgURL}'></div>`);
  $("#img-container").append(newImg);
}

$('#remove').on("click", function(e){
  e.preventDefault();
  $("#img-container").empty();
})