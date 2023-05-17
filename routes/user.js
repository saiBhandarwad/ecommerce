const express = require('express')
const userRouter = express.Router()
const userController = require ('../controller/user')
const {getUser,getAllUsers,createUser,updateUser,replaceUser,deleteUser}=userController

userRouter
.get('/users',getAllUsers)
.get('/users/:id',getUser)
.post('/users',createUser)
.put('/users/:id',replaceUser)
.patch('/users/:id',updateUser)
.delete('/users/:id',deleteUser)
module.exports = userRouter