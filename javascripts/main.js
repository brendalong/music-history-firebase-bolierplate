"use strict";

let $ = require('jquery'),
    db = require("./db-interaction"),
    templates = require("./dom-builder");
    // login = require("./user");


// Using the REST API
function loadSongsToDOM() {
  console.log("Need to load some songs, Buddy");
  db.getSongs()
  .then((songData) => {

    console.log("got data:", songData);

    // this is a great way to grab each items' unique id
    let idArray = Object.keys(songData);
    idArray.forEach(key => songData[key].id = key);
    templates.makeSongList(songData);

  });
}

loadSongsToDOM(); //<--Move to auth section after adding login btn

// Send newSong data to db then reload DOM with updated song data
$(document).on("click", ".save_new_btn", function() {

  console.log("you clicked save new song");
  // gather form input and construct an object for the db
  let songObj = buildSongObj();
  // addSong to db, then load to the dom
  db.addSong(songObj).then(songId => loadSongsToDOM());


});

// go get the song from database and then populate the form for editing.
$(document).on("click", ".edit-btn", function () {
    

});

//Save edited song to FB then reload DOM with updated song data
$(document).on("click", ".save_edit_btn", function() {

});

// Remove song then reload the DOM w/out new song
$(document).on("click", ".delete-btn", function () {
  let songId = $(this).data("delete-id");
  db.deleteSong(songId)
  .then(()=>loadSongsToDOM());

});


// Helper functions for forms stuff. Nothing related to Firebase
// Build a song obj from form data.
function buildSongObj() {
    let songObj = {
    title: $("#form--title").val(),
    artist: $("#form--artist").val(),
    album: $("#form--album").val(),
    year: $("#form--year").val()
  };
  return songObj;
}

// Load the new song form
$("#add-song").click(function() {
  console.log("clicked add song");
  // 'songForm()' returns a promise
  var songForm = templates.songForm()
  .then(function(songForm) {
    $(".uiContainer--wrapper").html(songForm);
  });
});


$("#auth-btn").click(function(){
  console.log("clicked on Signin");

});

$("#logout").click(function(){
  console.log("logout clicked");

});