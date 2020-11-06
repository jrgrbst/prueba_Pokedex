    $('#pokeSearch').on('click',()=>{
        let entrada = $('input').val();
        console.log(entrada);
        $.ajax({
            type: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${entrada}`,
            dataType: "json",
            success: function (response) {
                console.log(response);
                let infoPoke = response;
                $('#pokeIcon').html(`
                <img src="${infoPoke.sprites.front_default}" alt="${infoPoke.id}">
                <p>Nombre: ${infoPoke.name}</p>
                `);
                $('#pokeMove > ul').html("");
                infoPoke.moves.forEach((movimiento,index) => {
                    $('#pokeMove > ul').append(`
                        <li>${index+1} - ${movimiento.move.name}</li>
                    `);
                });
            },
            error: function(error){
                console.error(error);
                $('#pokeIcon').html(`
                <p>El Nombre o Número: ${entrada} buscado no existe, intenta nuevamente</p>
                <p>El estado de la busqueda es ${error.status}</p>
            `)
            }
        });
    });