"use strict";
let firebase = require("./firebaseConfig"),
    provider = new firebase.auth.GoogleAuthProvider(),
    currentUser = null;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    currentUser = user.uid;
    console.log("currentUser logged in?", currentUser);
  } else {
    currentUser = null;
    console.log("currentUser logged out?", currentUser);
  }
});

function logInGoogle() {
  console.log("wazzup, auth?");
  return firebase.auth().signInWithPopup(provider);
}

function logOut() {
  return firebase.auth().signOut();
}

function getUser() {
  return currentUser;
}

module.exports = {logInGoogle, logOut, getUser};
