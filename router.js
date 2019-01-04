const {mongoose, Todo} = require('./mongoosehelper');
const {app} = require('./expresshelper');


app.get('/', function(req, res){

    res.sendFile(path.join(__dirname+'/index.html'));
});


app.post('/', (req,res) => {

    console.log(req.body);

   // res.send('response from node server on post command');

    var newTodo2 = new Todo({text: req.body.text, completed:req.body.completed ,completedat:req.body.completedat , email: req.body.email});

    newTodo2.save().then(
        (doc)=> {
            console.log('saved todo1' , doc);
            res.send(doc);
        },
        (e) => {

            console.log('unable to save', e);
            res.send(e);
        }

);
});

app.listen(3000, function(){

console.log('inside express');
});