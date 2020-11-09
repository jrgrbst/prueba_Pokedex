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

            $('#pokeType > #info > p').html(`<h5>Tipo: </h5><p>${infoPoke.types[0]}</p>`);

            $('#pokeExp > #info > p').html(`<h5>Experiencia Base: </h5><p>${infoPoke.base_experience}</p>`);

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

            $('#pokeStats > #title > h2').html("Estadísticas");

            CanvasJS.addColorSet("pokePastels",
                [

                "#87CEEB",
                "#F08080",
                "#98FB98",
                "#FF1493",
                "#00FA9A",
                "#FFFF00"                
                ]);

            let options = {
                colorSet: "pokePastels", 
                animationEnabled: true,
                axisY: {
                    title: "Puntaje",
                    titleFontFamily: "IBM Plex Mono",
                    labelFontFamily: "IBM Plex Mono"
                    },
                axisX: {
                    title: "Categorías",
                    titleFontFamily: "IBM Plex Mono",
                    labelFontFamily: "IBM Plex Mono"
                    },
                legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center"
                    },
                toolTip: {
                    fontFamily: "IBM Plex Mono",
                    },
                data: [              
                    {
                        type: "column",
                        dataPoints: [
                            { label: "HP",  y: infoPoke.stats[0].base_stat  },
                            { label: "Ataque", y: infoPoke.stats[1].base_stat  },
                            { label: "Defensa", y: infoPoke.stats[2].base_stat  },
                            { label: "Ataque Especial",  y: infoPoke.stats[3].base_stat  },
                            { label: "Defensa Especial",  y: infoPoke.stats[4].base_stat  },
                            { label: "Velocidad",  y: infoPoke.stats[4].base_stat  },
                        ]
                    }
                ]
            };
    
            $("#pokeGraph").CanvasJSChart(options);

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

    $('input').val("");
});