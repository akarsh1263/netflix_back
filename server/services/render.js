const axios = require('axios');

exports.homer=(req,res)=>{
    res.render('index');
}
exports.userer=(req,res)=>{
    res.render('users');
}
exports.allentries=(req,res)=>{
    axios.get('http://localhost:3000/api/entries')
        .then(function(response){
            res.render('allentries',{users:response.data});
        })
        .catch(err=>{
            res.send(err);
        });
}
exports.adminer=(req,res)=>{
    axios.get('http://localhost:3000/api/entries')
        .then(function(response){
            res.render('admin',{users:response.data});
        })
        .catch(err=>{
            res.send(err);
        });
}
exports.updateform=(req,res)=>{
    $("#updateform").submit(function(event){
        event.preventDefault();
    
        var unindexed_array = $(this).serializeArray();
        var data = {}
    
        $.map(unindexed_array, function(n, i){
            data[n['name']] = n['value']
        })
    
    
        var request = {
            "url" : `http://localhost:3000/api/entries/${data.id}`,
            "method" : "PUT",
            "data" : data
        }
    
        $.ajax(request).done(function(response){
            alert("Data Updated Successfully!");
        })
    
    })
}
/*
exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })   
}
*/

exports.create = (req, res) =>{
    res.render('create');
}

exports.update = (req, res) =>{
    axios.get('http://localhost:3000/api/entries', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("updation", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
