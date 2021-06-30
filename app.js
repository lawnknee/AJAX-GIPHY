"use strict";

let userInput;
const API_KEY = "ePFJzVv31YN2Pe8nhzaBJeJ6GqfNOYZb";

$("form").on("submit", getSearchAndAppend);

/*  */
async function getSearchAndAppend(e) { // think of a better name for this function
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
  let imgURL = res.data.data[0].images.original.url;
  return imgURL;
}

function appendToDOM(imgURL) {
  let newImg = $(`<div><img src='${imgURL}'></div>`);
  $("#img-container").append(newImg);
}

$('#remove').on("click", function(e) {
  e.preventDefault();
  $("#img-container").empty();
});

// doc strings for all the functions