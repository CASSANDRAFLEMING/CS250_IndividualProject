"use strict";

let port = document.getElementById("port");
let pathName = document.getElementById("pathName");
let host = document.getElementById("host");
let app = document.getElementById("app");
let appVersion = document.getElementById("appVersion");
let language = document.getElementById("language");

port.innerHTML = location.port;
pathName.innerHTML = location.pathname;
host.innerHTML = location.hostname;
app.innerHTML = navigator.appName; //technically depreciated
appVersion.innerHTML = navigator.appVersion; //technically depreciated
language.innerHTML = navigator.language;


