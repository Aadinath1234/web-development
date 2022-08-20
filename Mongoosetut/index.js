var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/harryKart', {useNewUrlParser: true, useUnifiedTopology: true});
// here we are telling that we want to use harryKart database.

var db= mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
    // we're connected!
    console.log("We are connected bro")
});

// here we are defining schema.
// by  schema we decide what we are putting inside the database.
var kittySchema = new mongoose.Schema({
    name: String

});

// in kittenschema we are adding method :
kittySchema.methods.speak = function () {
    var greeting = "Meow name is " + this.name
     console.log(greeting);
}





// now we will lock our schema and this schema will convert in the model .
var Kitten = mongoose.model('harryKitty', kittySchema);
// now this kittyschema will converted to kitten model.


// after converting schema to model you can create objects:
// so here we are creating objects:
var harryKitty = new Kitten({name: 'harryKitty'});
console.log(harryKitty.name);
// name of the object is harryKitty
// creating another items 
var harryKitty2 = new Kitten({name:'harryKitty2'});

// here we will run the harrykitty function:
harryKitty.speak();


// to save the document we use this method:
harryKitty.save(function(err, harrykitty){
    // this callback function taking two arguments first is err and second is object  which is harrykitty.
    // this will store this document in the harrykitties which is automatically created , it plural the arguments name which is present in the model and then document will stored there.
    if (err) return console.error(err);
    harryKitty.speak();
});

// now we save that declared items 
harryKitty2.save(function(err, k){
    // in place of k, you can put harrykitty2 and also can put any variable 
    // but that variable name should be same when you call it. 

    if(err) return console.error(err);
    k.speak();
});

//  to find the object that saved inside database then use this :
Kitten.find({name:"harryKitty2"}, function(err, kittens){
    if(err) return console.error(err);
    console.log(kittens);
});







