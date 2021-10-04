if (window.SimpleSlide) {
   new SimpleSlide({
      slide: "quote",
      time: 5000
   });

   new SimpleSlide({
      slide: "portfolio",
      time: 5000,
      nav: true
   });
}

if (window.SimpleAnime) {
   new SimpleAnime({

   });
}

if (window.SimpleForm) {
   new SimpleForm({
      form: ".formphp",
      button: "#enviar",
      erro: "<div id='form-erro'><h2>Erro no Envio</h2><p>Um erro ocorreu, tente para o email contato@contato.com.</p></div>",
      sucesso: "<div id='form-sucesso'><h2>Sucesso no Envio</h2><p>Formulário enviado com sucesso!!!</p></div>"
   });
}
