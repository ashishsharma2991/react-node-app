const express = require('express');
const app = express();
const port =3000;

app.get('/api/data', (req, res)=>{

    res.status(200).json({
        data: 'successful'
    })
})

app.listen(port, ()=>{
    console.log(`Server running @ ${port}`)
})