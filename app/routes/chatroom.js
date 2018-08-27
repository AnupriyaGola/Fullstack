const express = require('express');
const router = express.Router();
const chatRoomController = require("./../../app/controllers/chatRoomController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {
 
    let baseUrl = `${appConfig.apiVersion}/chatroom`;

    app.get(`${baseUrl}/view/all`, auth.isAuthorized, chatRoomController.getAllRooms);
    /**
     * @apiGroup chatroom
     * @apiVersion  1.0.0
     * @api {get} /api/v1/chatroom/view/all api for Getting Details of all Chat Rooms which are avaiable.
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "All Room Details Found",
            "status": 200,
            "data": [
                {
                    "chatRoomId": "HJk8GAeDm",
                    "modifiedOn": "2018-08-26T16:56:51.076Z",
                    "createdOn": "2018-08-26T16:56:51.000Z",
                    "activeUsers": [
                        {
                            "user": "Shruti Swami",
                            "id": "SJp7ACJPX"
                        }
                    ],
                    "active": "No",
                    "userId": "SJp7ACJPX",
                    "userName": "Shruti Swami",
                    "chatRoomLink": "http://localhost:4200/chatroom/join/HJk8GAeDm",
                    "chatRoomTitle": "Test"
                },
            ]
        }
    */


    // params: userId.
    app.get(`${baseUrl}/view/all/rooms/user/joined/:userId`, auth.isAuthorized, chatRoomController.getAllRoomsUserJoined);
    /**
     * @apiGroup chatroom
     * @apiVersion  1.0.0
     * @api {get} /api/v1/chatroom/view/all/rooms/user/joined/:userId api for Getting Details of Chat Room which User is already Joined.
     *
     * @apiParam {string} userId Id of of the User. (query params) (required)
     *	
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "All Room Details Found",
            "status": 200,
            "data": [
                {
                    "chatRoomId": "HJk8GAeDm",
                    "modifiedOn": "2018-08-26T16:56:51.076Z",
                    "createdOn": "2018-08-26T16:56:51.000Z",
                    "activeUsers": [
                        {
                            "user": "Shruti Swami",
                            "id": "SJp7ACJPX"
                        }
                    ],
                    "active": "No",
                    "userId": "SJp7ACJPX",
                    "userName": "Shruti Swami",
                    "chatRoomLink": "http://localhost:4200/chatroom/join/HJk8GAeDm",
                    "chatRoomTitle": "Test"
                },
            ]
        }
    */


    // params: chatRoomId.
    app.get(`${baseUrl}/view/all/rooms/available/to/join/:userId`, auth.isAuthorized, chatRoomController.getAllRoomsAvailableToJoin);
    /**
     * @apiGroup chatroom
     * @apiVersion  1.0.0
     * @api {get} /api/v1/chatroom/view/all/rooms/available/to/join/:userId api for Getting Details of Chat Room which User can Join.
     *
     * @apiParam {string} chatRoomId Id of Chat Room. (query params) (required)
     *	
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "All Room Details Found",
            "status": 200,
            "data": [
                {
                    "chatRoomId": "HJk8GAeDm",
                    "modifiedOn": "2018-08-26T16:56:51.076Z",
                    "createdOn": "2018-08-26T16:56:51.000Z",
                    "activeUsers": [
                        {
                            "user": "Shruti Swami",
                            "id": "SJp7ACJPX"
                        }
                    ],
                    "active": "No",
                    "userId": "SJp7ACJPX",
                    "userName": "Shruti Swami",
                    "chatRoomLink": "http://localhost:4200/chatroom/join/HJk8GAeDm",
                    "chatRoomTitle": "Test"
                },
            ]
        }
    */


    // params: chatRoomId.
    app.get(`${baseUrl}/details/:chatRoomId`, auth.isAuthorized, chatRoomController.getSingleRoom);
    /**
     * @apiGroup chatroom
     * @apiVersion  1.0.0
     * @api {get} /api/v1/chatroom/details/:chatRoomId api for Getting Details of Chat Room.
     *
     * @apiParam {string} chatRoomId Id of Chat Room. (query params) (required)
     *	
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Room Details Found",
            "status": 200,
            "data": {
                "chatRoomId": "HJk8GAeDm",
                "modifiedOn": "2018-08-26T16:56:51.076Z",
                "createdOn": "2018-08-26T16:56:51.000Z",
                "activeUsers": [
                    {
                        "user": "Shruti Swami",
                        "id": "SJp7ACJPX"
                    }
                ],
                "active": "No",
                "userId": "SJp7ACJPX",
                "userName": "Shruti Swami",
                "chatRoomLink": "http://localhost:4200/chatroom/join/HJk8GAeDm",
                "chatRoomTitle": "Test"
            }
        }
    */



    // params: chatRoomId.
    app.put(`${baseUrl}/update`, auth.isAuthorized, chatRoomController.editRoom);
    /**
     * @apiGroup chatroom
     * @apiVersion  1.0.0
     * @api {put} /api/v1/chatroom/update api for Updating Chat Room.
     *
     * @apiParam {string} chatRoomId Id of Chat Room. (body params) (required)
     * @apiParam {string} chatRoomTitle Title of Chat Room. (body params) (required)
     *	
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Chat Room details Updated",
            "status": 200,
            "data": {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        }
    */


    // params: chatRoomId.
    app.post(`${baseUrl}/delete`, auth.isAuthorized, chatRoomController.deleteRoom);
    /**
     * @apiGroup chatroom
     * @apiVersion  1.0.0
     * @api {post} /api/v1/chatroom/delete api for deleting Chat Room.
     *
     * @apiParam {string} chatRoomId Id of Chat Room. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Deleted the room successfully",
            "status": 200,
            "data": {
                "_id": "5b54b7534d4ab016ec8c7a4f",
                "chatRoomId": "HJk8GAeDm",
                "__v": 0,
                "modifiedOn": "2018-08-26T16:56:51.076Z",
                "createdOn": "2018-08-26T16:56:51.000Z",
                "activeUsers": [
                    {
                        "id": "SJp7ACJPX",
                        "user": "Shruti Swami"
                    }
                ],
                "active": "No",
                "userId": "SJp7ACJPX",
                "userName": "Shruti Swami",
                "chatRoomLink": "http://localhost:4200/chatroom/join/HJk8GAeDm",
                "chatRoomTitle": "Test Updated"
            }
        }
     * @apiFailureExample {object} Failure-Response:
        {
        	"error": true,
	        "message": "No Room Found or User Not an Admin",
        	"status": 404,
        	"data": null
        }
    */
}
