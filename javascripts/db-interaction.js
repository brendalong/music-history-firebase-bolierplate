"use strict";
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db

let $ = require('jquery'),
    firebase = require("./firebaseConfig");

// ****************************************
// DB interaction using Firebase REST API
// ****************************************

function getSongs(user) {
    return new Promise((resolve,reject)=>{
        $.ajax({
            url: `${firebase.getFBsettings().databaseURL}/songs.json`
        }).done((songData)=> {
            resolve(songData);
        });
    });
}

function addSong(songFormObj) {

    console.log("adding song", songFormObj);
    return new Promise((resolve,reject)=>{
        $.ajax({
            url: `${firebase.getFBsettings().databaseURL}/songs.json`,
            type: 'POST',
            data: JSON.stringify(songFormObj),
            dataType: 'json'
        }).done(songId => resolve(songId));
    });
}

function deleteSong(songId) {
    return new Promise((resolve, reject)=>{
        $.ajax({
            url: `${firebase.getFBsettings().databaseURL}/songs/${songId}.json`,
            method: "DELETE"
        }).done(()=>resolve());
    });

}

function getSong(songId) {

}

// GET - Requests/read data from a specified resource
// PUT - Update data to a specified resource. Takes two parameters.
function editSong(songFormObj, songId) {

}

module.exports = {
  getSongs,
  addSong,
  getSong,
  deleteSong,
  editSong
};
