// comando para establecer la conexios
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conecta3');
});

socket.on('disconnect', function() {
    console.log('Desconecta3');
});

socket.on('estadoActual', function(estado) {
    label.text(estado.actual);
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });

});