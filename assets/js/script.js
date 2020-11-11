$(document).ready(function (){
    $.ajax({
        type: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*100)}`,
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

            $('#pokeType > #info > p').html(`<h5>Tipo <i class="fas fa-fire-alt"></i></h5><p>${infoPoke.types[0].type.name}</p>`);

            $('#pokeSpecie > #info > p').html(`<h5>Especie <i class="fas fa-binoculars"></i></h5><p>${infoPoke.species.name}</p>`);

            $('#pokeExp > #info > p').html(`<h5>Experiencia Base <i class="fas fa-heart"></i></h5><p>${infoPoke.base_experience}</p>`);

            $('#pokeStats > #title > h2').html(`Estadísticas <i class="fas fa-chart-pie"></i>`);

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

            $('#pokeAbility > #title > h2').html(`Habilidades  <i class="fas fa-bolt"></i>`);
            $('#pokeAbility > #lista > ul').html("");
            infoPoke.abilities.forEach((habilidad) => {
                $('#pokeAbility > #lista > ul').append(`<li>${habilidad.ability.name}</li>`);
            });

        },

        error: function(error){
            console.error(error);
            Swal.fire(
                '¡Oh no! Parece que no se ha cargado ningún Pokémon.',
                'Intenta recargando de nuevo.',
                'warning'
              )
        }
    });


$('#pokesearch').on('click',()=>{

    let entrada = $('input').val();
    console.log(entrada);

    $.ajax({
        type: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${entrada.toLowerCase()}`,
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

            $('#pokeType > #info > p').html(`<h5>Tipo <i class="fas fa-fire-alt"></i></h5><p>${infoPoke.types[0].type.name}</p>`);

            $('#pokeSpecie > #info > p').html(`<h5>Especie <i class="fas fa-binoculars"></i></h5><p>${infoPoke.species.name}</p>`);

            $('#pokeExp > #info > p').html(`<h5>Experiencia Base <i class="fas fa-heart"></i></h5><p>${infoPoke.base_experience}</p>`);

            $('#pokeStats > #title > h2').html(`Estadísticas <i class="fas fa-chart-pie"></i>`);

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

            $('#pokeAbility > #title > h2').html(`Habilidades  <i class="fas fa-bolt"></i>`);
            $('#pokeAbility > #lista > ul').html("");
            infoPoke.abilities.forEach((habilidad) => {
                $('#pokeAbility > #lista > ul').append(`<li>${habilidad.ability.name}</li>`);
            });

        },

        error: function(error){
            console.error(error);
            Swal.fire(
                '¡Oh no! Parece que no sabes de Pokémon.',
                'Revisa si escribiste bien el nombre o el ID de tu búsqueda',
                'warning'
              )
        }
    });


    $('input').val("");
});
});