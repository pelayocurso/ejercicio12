$(document).ready(function() {
    var uno = $('<button id="hola">Hola</button>');
    uno.on('click', function() {
        $('body').after('<p>Hola juan antonio.</p>');
    });
    var dos = $('<button id="limpiar">Limpiar</button>');
    dos.on('click', function() {
        $('html').find('p').remove();

        $('body').append(
            '<input id="uno" type="text" />' +
            '<input id="dos" type="text" />'
        );
        var tres = $('<button>Cuarta fase</button>');


        tres.on('click', function() {
            $.ajax({
                type: 'POST',
                url: 'prueba.com',
                data: {
                    uno: $('#uno').val(),
                    dos: $('#dos').val()
                },
                success: function() {
                    alert('success');
                }
            });
        });
        $('body').append(tres);
    });

    var tercer
    $('body').append(uno);
    $('body').append(dos);
});
