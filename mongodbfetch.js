const request = require('request');
const MongoClient = require('mongodb').MongoClient;

connectionstring = 'mongodb://localhost:27017/Users'

MongoClient.connect(connectionstring , (err,client)=> {

    if(err){
        console.log('unable to connect to mongo');
        return;
    }
    console.log('connected');
    const db = client.db('Users');
    console.log( JSON.stringify(db.collection("books")));
    db.collection("books").find({name:"Node JS"}).toArray().then((docs)=> console.log(JSON.stringify(docs)));
    
    client.close();
});


