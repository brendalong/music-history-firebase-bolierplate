"use strict";
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db

let $ = require('jquery'),
    firebase = require("./fb-config");

// ****************************************
// DB interaction using Firebase REST API
// ****************************************

function getSongs(user) {
  return $.ajax({
    url: `${firebase.getFBsettings().databaseURL}/songs.json?orderBy="uid"&equalTo="${user}"`
  }).done((songData) => {
    return songData;
  });
}

function addSong(songFormObj) {
  return $.ajax({
    url: `${firebase.getFBsettings().databaseURL}/songs.json`,
    type: 'POST',
    data: JSON.stringify(songFormObj),
    dataType: 'json' 
  }).done((songID) => {
    console.log("what is the new id?", songID);
    return songID;
  });
}
// POST - Submits data to be processed to a specified resource. Takes one parameter.

function deleteSong(songID) {
  return $.ajax({
    url: `${firebase.getFBsettings().databaseURL}/songs/${songID}.json`,
    method: 'DELETE'  
  }).done((data) => {
    return data;
  });
}

function getSong(songID) {
  return $.ajax({
    url: `${firebase.getFBsettings().databaseURL}/songs/${songID}.json`,
  }).done((songData) => {
    return songData;
  });
}

// GET - Requests/read data from a specified resource
// PUT - Update data to a specified resource. Takes two parameters.
function editSong(songFormObj, songID) {
  return $.ajax({
    url: `${firebase.getFBsettings().databaseURL}/songs/${songID}.json`,
    type: 'PUT',
    data: JSON.stringify(songFormObj)
  }).done((data) => {
    return data;
  });
}

module.exports = {
  getSongs,
  addSong,
  getSong,
  deleteSong,
  editSong
};
