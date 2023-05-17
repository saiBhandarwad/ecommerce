const fs = require('fs')
const path = require('path')

const userData = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../users.json'),'utf-8'))

getAllUsers = (req,res)=>{
    res.json(userData)
}

getUser = (req,res)=>{
    const user = userData.find(p=>p.id=== +(req.params.id))
    res.send(user)
}
createUser = (req,res)=>{
    let id = userData.length
    userData.push({id,...req.body});
    res.send(userData)
}
replaceUser = (req,res)=>{
    let id = +req.params.id
    userData.splice(id,1,{id,...req.body});
    res.send(userData)
}
updateUser = (req,res)=>{
    let id = +req.params.id
    userData.splice(id,1,{id,...userData[id],...req.body});//second rest overwrite matching values for the first and all data remains the same
    res.send(userData)
}
deleteUser = (req,res)=>{
    let isPresent = false;
    let id = +req.params.id
    let filteredData = userData.filter((elem)=>{
        if(elem.id===id){isPresent=true}
        return elem.id!==id
    }) 
    if(isPresent){
        res.send(filteredData)
    }else{
        res.send("no such data found to delete")
    }
    
}
module.exports = {getUser,getAllUsers,createUser,updateUser,replaceUser,deleteUser}
