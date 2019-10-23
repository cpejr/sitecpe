var express = require('express');
var router = express.Router();
const EmailSend = require('../models/sendingEmails');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/home');
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/contato', (req, res, next) => {
  res.render('contato', {title: 'Contato'})
});

router.get('/solucoes', (req, res, next) => {
  res.render('solutions', {title: 'Soluções'})
});

router.get('/erro', (req, res, next) => {
  res.render('error', {title: 'Erro!'})
});

router.get('/sucesso', (req, res, next) => {
  res.render('sucesso', {title: 'Sucesso'})
});




router.post('/contato', (req, res, next) =>{
  const contact  = req.body;
  const mensagem = `
    <h3> Nova mensagem de contato de cpejr.com.br </h3>
    <ul>
    <li>De: ${contact.nome} </li>
    <li>Email: ${contact.email} </li>
    <li>Telefone: ${contact.telefone} </li>
    <li>Área do portfolio: ${contact.area} </li>
    </ul>
    <h3>Mensagem:</h3>
    <p>
    ${contact.texto}
    </p>
  `;
  emailmandar = new EmailSend(mensagem);
  emailmandar.sendContactMail().then((result)=>{
      if(result === 1){
        res.render('contato', { title: 'Contato', sent: 'Sua mensagem foi enviada!' });
       }
      else{
        res.render('contato', { title: 'Contato', contact, sent: 'Erro no envio da mensagem'});
      }
    }).catch((error) =>{
      console.log(error);
      res.render('contato', { title: 'Contato', contact, sent: 'Erro no envio da mensagem'});
    });
    res.redirect('/sucesso');
  });


module.exports = router;
