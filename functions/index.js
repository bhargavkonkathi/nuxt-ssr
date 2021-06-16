const functions = require("firebase-functions");
const express = require('express');
const { Nuxt } = require('nuxt');

// Use a very simplified version of the config to run the already
// build app on Firebase Functions.
const config = {
  // Don't start in dev mode.
  dev: false,
  debug:true,
  // Set the path to the .nuxt folder.
  buildDir: 'nuxt',
  // Enable debug when in the develop environment.
  debug: true,
  // Path to the assets.
  build: {
    publicPath: '/client',
  },
};

// Init Nuxt.js.
const nuxt = new Nuxt(config);
// Init express.
const app = express();
// Give nuxt middleware to express.
app.use(nuxt.render);

exports.ssrapp  = functions.https.onRequest(app);