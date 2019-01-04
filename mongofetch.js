const request = require('request');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Users' , (err,client)=> {

    if(err){
        console.log('unable to connect to mongo');
        return;
    }
    console.log('connected');
    const db = client.db('Users');

  temp = {  
    users: 'Ranjani42',
    age: 28
};
    db.collection('Users').insertOne(temp , (err, result)=>{
        if(err) {

            return console.log('unable to insert');
        }

        console.log('inserted to database');
        console.log(JSON.stringify(result.ops));
    });
    client.close();
});




// var location = 'Schaumburg,USA';
// request( {
//     url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=14141a125476d53aab6a9f5cc171d898`,
//     html: true
// } , (error, response, body) => {
  
//     //console.log(JSON.stringify(body.main.temp)- 273.15 + 'degrees celcius');
//     console.log(body);
// }
// );

// var getUser = ( id , callback1) => {
//     var user = {
//         id :id,
//         name: 'Arun' ,
//         age: 33   };

         

//         setTimeout((justlikethat) => {
//             callback1(user );
//         } ,1000);
        
//         };

// getUser(21, (userObject, age)  => {
//     console.log(userObject);
//     console.log(age);
// });