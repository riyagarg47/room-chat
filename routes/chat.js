const express = require('express');
const router = express.Router();
const chatController = require("./../../app/controllers/chatController");
const appConfig = require("./../../config/appConfig")

module.exports.setRouter = (app) => {

  let baseUrl = `${appConfig.apiVersion}/chat`;
  // params: chatRoom, skip.
  app.get(`${baseUrl}/get/for/group`, chatController.getGroupChat);
  
}
