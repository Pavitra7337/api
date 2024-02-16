const express=require('express')
const app=express()
app.use(express.json())
const PORT=3000
app.get('/',function(req, res){
     res.send('Hello World!')
});
app.listen(PORT, () => {
     console.log('Example app listening on port ${PORT}'
    )
 });
 app.post('/', (req, res) => {
        console.log(req.method);
        res.send('Got a POST request')
      });
    app.put('/user', (req, res) => {
            console.log(req.method);
            res.send('Got a PUT request at /user')
          });
        
 app.delete('/user', (req, res) => {
            console.log(req.method);
            res.send('Got a DELETE request at /user')
      });
