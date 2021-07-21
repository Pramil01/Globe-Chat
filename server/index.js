const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const {addUser,removeUser,getUser,getAllUsers} = require('./users');
corsOptions={
    cors: true,
    origins:["http://localhost:3000"],
}

const PORT = process.env.PORT || 5000;

const router = require('./router');


const app = express();
const server = http.createServer(app);
const io = socketio(server, corsOptions);

io.on('connection',(socket)=>{
    socket.on('join',({name},callback)=>{
        const {error,user} = addUser({id:socket.id,name});
        if(error)return callback(error);

        socket.emit('message',{user:'admin',text:`${user.name} welcome to the chat.`});
        socket.broadcast.emit('message',{user:'admin',text:`${user.name} has joined the chat`})

        socket.join(user);
        callback();
    })

    socket.on('sendMessage',(message, callback)=>{
        const user = getUser(socket.id);
        io.emit('message',{user:user.name,text:message});
        callback();
    });


    socket.on('disconnect',()=>{
        console.log("user just left");
        socket.broadcast.emit('message',{user:'admin',text:`${user.name} has left the chat`})
    })
})


app.use(router);

server.listen(PORT,()=>console.log(`The server is running on ${PORT}`));
