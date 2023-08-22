import express from "express";

//callbacks
import { addUser, getUsers } from "../controller/user-controller.js";
import { newConversation, getConversation } from "../controller/conversation-controller.js";
import { newMessage, getMessages} from "../controller/message-controller.js";
import { uploadFile } from "../controller/image-controller.js";

//utils
import upload from "../utils/upload.js";

const route = express.Router();

route.post('/add',addUser);
route.get('/users', getUsers);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);
route.post('/message/add', newMessage);
route.get('/messages/get/:id', getMessages);
route.post("/file/upload", upload.single("file"), uploadFile);

export default route;