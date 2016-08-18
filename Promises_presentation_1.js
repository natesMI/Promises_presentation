
var newP = new Promise(function(resolve, reject){
  console.log('Step 1 Promise has fired');
  resolve();
  //reject();
})

.then(function(responseA){
  console.log('Step 2 .then statement has fired:', responseA);
})

.catch(function(err){
  console.log('An error has occured, .catch statement has fired:', err);
});


//////////////////////////////////////////////////////////////////////////////
/* Alternate */
//////////////////////////////////////////////////////////////////////////////


var first = function(){
	return new Promise(function(resolve, reject){
      console.log('Step 1 Promise has fired');
      resolve();
      //reject();
    });
};

first()

.then(function(resp){
  console.log('Step 2 .then has fired:', resp);
})
.catch(function(err){
  console.log('Step 2 an error has been experienced:', err);
});

