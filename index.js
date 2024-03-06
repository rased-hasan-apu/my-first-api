const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
res.send('this is my first local host api with express js');
});

const friends = [
    {id:1,name:'sifat',email:'sifat@gmail.com',phone:'0123639877'},
    {id:2,name:'sobuj',email:'sobuj@gmail.com',phone:'0125478334'},
    {id:3,name:'ariful',email:'ariful@gmail.com',phone:'01274569888'},
    {id:4,name:'sojib',email:'sojib@gmail.com',phone:'01236985244'}
]

app.get('/users',(req,res)=>{
    // use search query parameter 
    const search = req.query.search;
    if(search){
        const searchResult = friends.filter(friend=>(friend.name.toLocaleLowerCase().includes(search)));
        res.send(searchResult);
    }else{
        res.send(friends);
    }
})

app.get('/users/:id',(req,res)=>{
    // dinamic paramiter 
    const id = req.params.id;
    const user = friends[id];
    res.send(user);
    console.log(req.params.id);
})
//use post method 
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = friends.length;
    friends.push(newUser);
    console.log('hit the post!!',req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);

})
 

app.listen(port,()=>{
    console.log(`hello nodemon server!!:${port}`);
});


