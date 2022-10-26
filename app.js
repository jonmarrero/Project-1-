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
            
            const $divCharacter = $("div.name")
            $divCharacter.empty()
            const $divSpecies = $("div.species")
            $divSpecies.empty()
            const $divStatus = $("Dead or Alive")
            $divStatus.empty()
            
            $divCharacter.append( `Name: ${character.name}`)
            $divSpecies.append( ` Species: ${character.species}`)
            $divStatus.append( ` Dead or Alive: ${character.status}`)
        })   
    }

})


// function characterSearch(character){
//     // constructing url for request
//     const url = "https://rickandmortyapi.com/api"

//     $.ajax(url)
//     .then((character) => {
//     console.log(character)

//     const $divCharacter = $("div.name")
//     $divCharacter.empty()
//     const $divSpecies = $("div.species")
//     $divSpecies.empty()
//     const $divStatus = $("Dead or Alive")
//     $divStatus.empty()
                
//     $divCharacter.append( `Name: ${character.name}`)
//     $divSpecies.append( ` Species: ${character.species}`)
//     $divStatus.append( ` Dead or Alive: ${character.status}`)


// })


    $("input[type=submit]").on("click", (event) => {
    event.preventDefault()

    const inputText = $("input[type=text]").val()
    character(textInput)
    characterSearch(inputText)
})

