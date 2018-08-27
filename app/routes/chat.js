const express = require('express');
const router = express.Router();
const chatController = require("./../../app/controllers/chatController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')
  
module.exports.setRouter = (app) => {

  let baseUrl = `${appConfig.apiVersion}/chat`;


  // params: senderId, receiverId, skip.
  app.get(`${baseUrl}/get/for/user`, auth.isAuthorized, chatController.getUsersChat);

  /** 
   * @apiGroup chat
   * @apiVersion  1.0.0
   * @api {get} /api/v1/chat/get/for/user to get paginated chats of user.
   * 
   * @apiParam {string} senderId userId of logged in user. (query params) (required)
   * @apiParam {string} receiverId userId receiving user. (query params) (required)
   * @apiParam {number} skip skip value for pagination. (query params) (optional)
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
       {
        "error": false,
        "message": "All Chats Listed",
        "status": 200,
        "data": [
          {
            "chatId": "IELO6EVjx",
            "modifiedOn": "2018-08-26T15:06:36.036Z",
            "createdOn": "2018-08-26T15:06:36.036Z",
            "message": "Hi Suraj",
            "receiverId": "r1QHjh1v7",
            "receiverName": "Suraj Sinha",
            "senderId": "SJp7ACJPX",
            "senderName": "Shruti Swami"
          },

          {
            "chatId": "IELO6EVjx",
            "modifiedOn": "2018-08-26T15:06:47.047Z",
            "createdOn": "2018-08-26T15:06:47.047Z",
            "message": "Whats going on suraj",
            "receiverId": "r1QHjh1v7",
            "receiverName": "Suraj Sinha",
            "senderId": "SJp7ACJPX",
            "senderName": "Shruti Swami"
          },
          {
            "chatId": "ZcaxtEXPT",
            "modifiedOn": "2018-03-05T15:36:59.548Z",
            "createdOn": "2018-03-05T15:36:59.547Z",
            "message": "Just covering few concepts ",
            "receiverId": "SJp7ACJPX",
            "receiverName": "Shruti Swami",
            "senderId": "r1QHjh1v7",
            "senderName": "Suraj Sinha"
          },
          .........................
        ]

      }
 */

  // params: chatRoom, skip.
  app.get(`${baseUrl}/get/for/group`, auth.isAuthorized, chatController.getGroupChat);
  /** 
   * @apiGroup chat
   * @apiVersion  1.0.0
   * @api {get} /api/v1/chat/get/for/group to get paginated chats of Group.
   * 
   * @apiParam {string} chatRoom Chat Room Id . (query params) (required)
   * @apiParam {number} skip skip value for pagination. (query params) (optional)
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
       {
        "error": false,
        "message": "All Chats Listed",
        "status": 200,
        "data": [
           {
            "chatId": "IELO6EVjx",
            "modifiedOn": "2018-08-26T15:06:47.047Z",
            "createdOn": "2018-08-26T15:06:47.047Z",
            "message": "Hi Suraj",
            "receiverId": "r1QHjh1v7",
            "receiverName": "Suraj Sinha",
            "senderId": "SJp7ACJPX",
            "senderName": "Shruti Swami"
          },
          {
            "chatId": "IELO6EVjx",
            "modifiedOn": "2018-08-26T15:06:47.047Z",
            "createdOn": "2018-08-26T15:06:47.047Z",
            "message": "Whats going on suraj",
            "receiverId": "r1QHjh1v7",
            "receiverName": "Suraj Sinha",
            "senderId": "SJp7ACJPX",
            "senderName": "Shruti Swami"
          },
          {
            "chatId": "ZcaxtEXPT",
            "modifiedOn": "2018-03-05T15:36:59.548Z",
            "createdOn": "2018-03-05T15:36:59.547Z",
            "message": "Just covering few concepts ",
            "receiverId": "SJp7ACJPX",
            "receiverName": "Shruti Swami",
            "senderId": "r1QHjh1v7",
            "senderName": "Suraj Sinha"
          },
          .........................
        ]
      @apiErrorExample {json} Error-Response:
          {
          "error": true,
          "message": "No Chat Found",
          "status": 404,
          "data": null
          }

        }
 */

  
  // params: chatId.
  app.post(`${baseUrl}/mark/as/seen`, auth.isAuthorized, chatController.markChatAsSeen);
  /** 
   * @apiGroup chat
   * @apiVersion  1.0.0
   * @api {post} /api/v1/chat/mark/as/seen to mark chats as seen.
   * 
   * @apiParam {string} chatId Chat Id of chat which is to be marked as seen. (query params) (required)
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
       {
        "error": false,
        "message": "All Chats Listed",
        "status": 200,
        "data": [
          {
            "chatId": "IELO6EVjx",
            "modifiedOn": "2018-08-26T15:06:47.047Z",
            "createdOn": "2018-08-26T15:06:47.047Z",
            "message": "Hi Suraj",
            "receiverId": "r1QHjh1v7",
            "receiverName": "Suraj Sinha",
            "senderId": "SJp7ACJPX",
            "senderName": "Shruti Swami"
          },
          {
            "chatId": "IELO6EVjx",
            "modifiedOn": "2018-08-26T15:06:47.047Z",
            "createdOn": "2018-08-26T15:06:47.047Z",
            "message": "Whats going on suraj",
            "receiverId": "r1QHjh1v7",
            "receiverName": "Suraj Sinha",
            "senderId": "SJp7ACJPX",
            "senderName": "Shruti Swami"
          },
           {
            "chatId": "ZcaxtEXPT",
            "modifiedOn": "2018-03-05T15:36:59.548Z",
            "createdOn": "2018-03-05T15:36:59.547Z",
            "message": "Just covering few concepts ",
            "receiverId": "SJp7ACJPX",
            "receiverName": "Shruti Swami",
            "senderId": "r1QHjh1v7",
            "senderName": "Suraj Sinha"
          },
          .........................
        ]

      }
 */



  // params: userId, senderId.
  app.get(`${baseUrl}/count/unseen`, auth.isAuthorized, chatController.countUnSeenChat);

  /**
   * @apiGroup chat
   * @apiVersion  1.0.0
   * @api {get} /api/v1/chat/count/unseen to get count of unseen messages.
   * 
   * @apiParam {string} userId userId of logged in user. (query params) (required)
   * @apiParam {string} senderId userId sending user. (query params) (required)
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
       {
        "error": false,
        "message": "unseen chat count found.",
        "status": 200,
        "data": 5

      }
 */


  // params: userId, senderId, skip.
  app.get(`${baseUrl}/find/unseen`, auth.isAuthorized, chatController.findUnSeenChat);
  /**
   * @apiGroup chat
   * @apiVersion  1.0.0
   * @api {get} /api/v1/chat/find/unseen to get paginated unseen chats of user.
   * 
   * @apiParam {string} userId userId of logged in user. (query params) (required)
   * @apiParam {string} senderId userId sending user. (query params) (required)
   * @apiParam {number} skip skip value for pagination. (query params) (optional)
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
       {
        "error": false,
        "message": "chat found and listed.",
        "status": 200,
        "data": [
         {
            "chatId": "IELO6EVjx",
            "modifiedOn": "2018-08-26T15:06:47.047Z",
            "createdOn": "2018-08-26T15:06:47.047Z",
            "message": "Hi Suraj",
            "receiverId": "r1QHjh1v7",
            "receiverName": "Suraj Sinha",
            "senderId": "SJp7ACJPX",
            "senderName": "Shruti Swami"
          },
          {
            "chatId": "IELO6EVjx",
            "modifiedOn": "2018-08-26T15:06:47.047Z",
            "createdOn": "2018-08-26T15:06:47.047Z",
            "message": "Whats going on suraj",
            "receiverId": "r1QHjh1v7",
            "receiverName": "Suraj Sinha",
            "senderId": "SJp7ACJPX",
            "senderName": "Shruti Swami"
          },
           {
            "chatId": "ZcaxtEXPT",
            "modifiedOn": "2018-03-05T15:36:59.548Z",
            "createdOn": "2018-03-05T15:36:59.547Z",
            "message": "Just covering few concepts ",
            "receiverId": "SJp7ACJPX",
            "receiverName": "Shruti Swami",
            "senderId": "r1QHjh1v7",
            "senderName": "Suraj Sinha"
          },
          .........................
        ]

      }
 */




 // params: userId.
  app.get(`${baseUrl}/unseen/user/list`, auth.isAuthorized, chatController.findUserListOfUnseenChat);

  /**
   * @apiGroup chat
   * @apiVersion  1.0.0
   * @api {get} /api/v1/chat/unseen/user/list to get user list of unseen chats.
   * 
   * @apiParam {string} userId userId of logged in user. (query params) (required)
   *
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * 
   * @apiSuccessExample {object} Success-Response:
       {
        "error": false,
        "message": "All Chats Listed",
        "status": 200,
        "data": [
           {
            "chatId": "IELO6EVjx",
            "modifiedOn": "2018-08-26T15:06:47.047Z",
            "createdOn": "2018-08-26T15:06:47.047Z",
            "message": "Hi Suraj",
            "receiverId": "r1QHjh1v7",
            "receiverName": "Suraj Sinha",
            "senderId": "SJp7ACJPX",
            "senderName": "Shruti Swami"
          },
            {
            "chatId": "IELO6EVjx",
            "modifiedOn": "2018-08-26T15:06:47.047Z",
            "createdOn": "2018-08-26T15:06:47.047Z",
            "message": "Whats going on suraj",
            "receiverId": "r1QHjh1v7",
            "receiverName": "Suraj Sinha",
            "senderId": "SJp7ACJPX",
            "senderName": "Shruti Swami"
          },
           {
            "chatId": "ZcaxtEXPT",
            "modifiedOn": "2018-03-05T15:36:59.548Z",
            "createdOn": "2018-03-05T15:36:59.547Z",
            "message": "Just covering few concepts ",
            "receiverId": "SJp7ACJPX",
            "receiverName": "Shruti Swami",
            "senderId": "r1QHjh1v7",
            "senderName": "Suraj Sinha"
          },
          .........................
        ]

      }
 */
 
}
