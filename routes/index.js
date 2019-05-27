require('dotenv').config();

var express = require('express');
var router = express.Router();
const EmailSend = require('../backend/sendingEmails');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/contato', (req, res, next) => {
  res.render('contato', {title: 'Contato'})
});



router.post('/contato', (req, res, next) =>{
  const contact  = req.body;
  const mensagem = `
    <h3> Nova mensagem de contato de cpejr.com.br </h3>
    <ul>
    <li>De: ${contact.name} </li>
    <li>Email: ${contact.email} </li>
    <li>Telefone: ${contact.telefone} </li>
    <li>Área do portfolio: ${contact.area} </li>
    </ul>
    <h3>Mensagem:</h3>
    <p>
    ${contact.text}
    </p>
  `;
  emailmandar = new EmailSend(mensagem);
  emailmandar.sendContactMail().then((result)=>{
      if(result === 1){
        res.render('contato', { title: 'Contato', sent: 'Message Sent' })
       }
      else{
        res.render('contato', { title: 'Contato', sent: 'ERROR SENDIND MESSAGE'})
      }
    }).catch((error) =>{
      console.log(error);
      res.render('contato', { title: 'Contato',sent: 'ERROR SENDIND MESSAGE'})
    });
  });


module.exports = router;
