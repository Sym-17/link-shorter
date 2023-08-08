const express = require('express')           //create a constant 'express' which gets all the packages and files from express.js
const app = express()                        //all the files are now in constant 'app'
const port = 3000                            //selecting a port where the api call will arive in the pc
app.use(express.json());                    //middlewar to connect the req and route

function generateRandomValue() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomValue = '';

    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomValue += characters.charAt(randomIndex);
    }

    return randomValue;
}

const linkList = []

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sayem-get', (req, res) => {
    res.send('Hello sayem get!')
})
app.get('/sayem/:id', (req, res) => {
    console.log(req.params.id)
    res.send('Hello sayem!')
})

app.post('/sayem-post', (req, res) => {
    console.log(req.body)
    res.send('Hello sayem post!')
})

app.post('/create-link', (req, res) => {
    console.log(req.body)
    const shortLink = generateRandomValue()
    linkList.push({ link: req.body.link, shortLink: shortLink })
    console.log(linkList)
    res.send(shortLink)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

