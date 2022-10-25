const baseUrl = "https://rickandmortyapi.com/api"

$(function(){

    const promise = $.ajax({
        url: 'https://rickandmortyapi.com/api/character'
    });

    promise.then(
       (data) => {
        console.log(data)
        render(data.results)
       },
       (error) => {
        console.log(error)
       } 
    )

    function render(characters){
        characters.forEach((character) => {
            const $h1 = $(`<h3>${character.name}, ${character.species}, ${character.status}</h3>`)   
            const $img = $(`<img src='' alt=${character.name} />`)
            $('body').append($h1)
        })   
    }

})

