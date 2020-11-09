$('#pokesearch').on('click',()=>{

    let entrada = $('input').val();
    console.log(entrada);



    $.ajax({
        type: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${entrada}`,
        dataType: "json",
        success: function (response) {
            console.log(response);
            let infoPoke = response;

            $('#pokename').html(`<h2>${infoPoke.name}</h2><p>ID: ${infoPoke.id}</p>`);

            $('#pokeicon1').html(`
            <img src="${infoPoke.sprites.front_default}" alt="${infoPoke.name} default">`);

            $('#pokeicon2').html(`
            <img src="${infoPoke.sprites.back_default}" alt="${infoPoke.name} default">
            `);
            
            $('#pokeicon3').html(`
            <img src="${infoPoke.sprites.front_shiny}" alt="${infoPoke.name} shiny">
            `);

            $('#pokeicon4').html(`
            <img src="${infoPoke.sprites.back_shiny}" alt="${infoPoke.name} shiny">
            `);

            $('#pokeAbility > #title > h2').html("Habilidades");
            $('#pokeAbility > #lista > ul').html("");
            infoPoke.abilities.forEach((habilidad,index) => {
                $('#pokeAbility > #lista > ul').append(`<li>${habilidad.ability.name}</li>`);
            });


            $('#pokemove > ul').html("");
            infoPoke.moves.forEach((movimiento,index) => {
                $('#pokemove > ul').append(`
                    <li>${index+1} - ${movimiento.move.name}</li>
                `);
            });

            let options = {
                animationEnabled: true,
                legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center"
                    },
                data: [              
                    {
                        type: "column",
                        dataPoints: [
                            { label: "HP",  y: infoPoke.stats.stat  },
                            { label: "Ataque", y: response.public_gists  },
                            { label: "Defensa", y: response.followers  },
                            { label: "Ataque Especial",  y: response.following  },
                            { label: "Defensa Especial",  y: response.following  },
                            { label: "Velocidad",  y: response.following  },
                        ]
                    }
                ]
            };
    
            $("#pokeGraph").CanvasJSChart(options);
            $('#nombreUsuario').val("");
            nombreUsuario.focus();
        },

        error: function(error){
            console.error(error);
            Swal.fire(
                '¡Oh no! Parece que no sabes de Pokemon.',
                'Revisa si escribiste bien el nombre o el ID de tu búsqueda',
                'warning'
              )
        }
    });
});