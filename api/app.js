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

    linkModel.create(            // Write into database
        {
            mainLink: req.body.mainLink,
            shortLink: shortLink
        }
    )

    res.send('Okay..Link shorted')
})


app.post('/delete-link', (req, res) => {
    console.log(req.body.toBeDeletedLink)

    linkModel.destroy(           // Delete from database
        {
            where: {
                mainLink: req.body.toBeDeletedLink
                // id: 22
            }
        }
    )

    res.send('Okay..Your Link is Deleted')
})




// async and await are features in JS that make it easier to work with asynchronous code in a more synchronous and readable manner.
// They are often used when dealing with operations that take time to complete, such as network requests, file reading/writing, and database queries.
// The use of async and await doesn't necessarily eliminate all callbacks or promises, but makes their handling and sequencing more straightforward.

app.get('/show-all-links', async (req, res) => {
    const linksList = await linkModel.findAll()       // Shows all from the table

    // const linksList = await linkModel.findAll(            //The await keyword can only be used inside an async function.
    //     {
    //         attributes: ['mainLink', 'shortLink']     // Only mainLink and shortLink will be shown
    //         // attributes: { exclude: ['createdAt'] }        // Show all contents of table excluding createdAt
    //     }
    // )
    res.send(linksList)
})

app.get('/search-a-link', async (req, res) => {
    const linksList = await linkModel.findOne(
        {
            where: { mainLink: 'www.google.com' }         // Even if we have two mainLink of www.google.com, it will show only the first
        }
    )
    console.log(linksList)
    res.send(linksList)
})


app.get('/search-by-pk', async (req, res) => {
    const linksList = await linkModel.findByPk(
        {
            where: { id: '26' }         // Search by Primary Key(PK)
        }
    )
    console.log(linksList)
    res.send(linksList)
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


// const linkList = []

// app.post('/create-link', (req, res) => {
//     console.log(req.body)
//     const shortLink = generateRandomValue()
//     linkList.push({ link: req.body.link, shortLink: shortLink })
//     console.log(linkList)
//     res.send(shortLink)
// })





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

