app.get('/api/users', function(req,res) {

  db.select('*')
    .from('users')
    .then(function(response){
      console.log('Request successful', response);
      res.status(200).send(response);
    })
    .catch(function(error){
      console.log('Error getting items', error);
      res.status(404).send('Users could not be found');
  });

});





