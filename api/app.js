const express = require('express')           //create a constant 'express' which gets all the packages and files from express.js
const app = express()                        //all the files are now in constant 'app'
const port = 3000                           //selecting a port where the api call will arive in the pc
app.use(express.json());                    //middlewar to connect the req and route

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//function to generate random value for the short link
function generateRandomValue() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomValue = '';

    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomValue += characters.charAt(randomIndex);
    }

    return 'shortlink.com/' + randomValue;
}



// Database import
const db = require('./database')

// test the connection
// this does not working..but why?

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }


// This works well
db.authenticate()
    .then(() => console.log('Database connected.......'))
    .catch(err => console.log('Error: ' + err))


const linkModel = require('./Link-model')

// app.get('/', (req, res) => {
//     const data = {
//         mainLink: 'www.google.com/images/tiger/good/omuk/tomuk/hen/ten233l553445llsdrt5',
//         shortLink: 'www.shortlink.com/12at'
//     }
// })


app.post('/create-short-link', (req, res) => {
    console.log(req.body.mainLink)           // Normally req.body.mainLink won't work. So body-parser is used..NEED TO BE MORE CLEAR
    const shortLink = generateRandomValue()
    console.log(shortLink)

    linkModel.create(
        {
            mainLink: req.body.mainLink,
            shortLink: shortLink
        }
    )

    res.send('Okay..Link shorted')
})

app.post('/delete-link', (req, res) => {
    console.log(req.body.toBeDeletedLink)

    res.send('Okay..Your Link is Deleted')
    // linkModel.create(
    //     {
    //         mainLink: req.body.mainLink,
    //         shortLink: shortLink
    //     }
    // )
})


// const data = {
//     mainLink: 'www.google.com/images/tiger/good/omuk/tomuk/hen/ten233l553445llsdrt5',
//     shortLink: 'www.shortlink.com/12at'
// }

// let { mainLink, shortLink } = data

// // Instert into the table in database
// linkModel.create(
//     {
//         mainLink,
//         shortLink
//     }
// )











//Here starts example


const linkList = []

app.post('/create-link', (req, res) => {
    console.log(req.body)
    const shortLink = generateRandomValue()
    linkList.push({ link: req.body.link, shortLink: shortLink })
    console.log(linkList)
    res.send(shortLink)
})





app.get('/add', (req, res) => {
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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

