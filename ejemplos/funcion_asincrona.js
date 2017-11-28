
function escribeTras2Segundos(texto, callback) {
  setTimeout(function() {
    console.log(texto);
    callback();
  }, 2000);
}

escribeTras2Segundos('hola', function() { // este es el callback
  escribeTras2Segundos('hola2', function() { // este es el callback
    console.log('he terminado');
  });
});

console.log('mientras esperas voy haciendo otra cosa');
