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
exports.genre=(req,res)=>{
    res.render('genre');
}
exports.spec=(req,res)=>{
    res.render('spec');
}
exports.genrentries=(req,res)=>{
    axios.get('http://localhost:3000/api/entries', { params : { genre : req.query.genre }})
        .then(function(response){
            res.render('allentries',{users:response.data});
        })
        .catch(err=>{
            res.send(err);
        });
}
exports.specentries=(req,res)=>{
    axios.get('http://localhost:3000/api/entries', { params : { title : req.query.title }})
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
