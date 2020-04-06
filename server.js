const express =  require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const env = require('dotenv').config();

const nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({ extended:false }));

app.use(bodyParser.json());



const PORT = 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.use(express.static(__dirname))



app.listen(PORT, (req, res) => {
    console.log('SERVER IR RUNNING ON PORT 8080')
});

app.post('/', (req, res) =>{

async function main() {

    let transporter = nodemailer.createTransport({
      service:'Gmail',
      auth: {
        user: process.env.GMAIL_EMAIL, // generated ethereal user
        pass: process.env.GMAIL_PASS // generated ethereal password
      }
    });
  
    let info = await transporter.sendMail({
      sender: req.body.user_email,
      to: "wfelipefarina@gmail.com", 
      subject: req.body.subject, 
      html: ` <h1>${req.body.email}</h1></br>
              <h2>${req.body.subject}</h2></br>
              <h3>${req.body.name}</h3> </br>
              <p>${req.body.message}`
    });
  
  }
  
  main().catch(console.error);
  res.redirect('/');
  })