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
            const $h1 = $(`<h2>${character.name}, ${character.species}, ${character.status}</h2>`)   
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
           
 });

 function render1(location){
    location.forEach((location) => {
        const $h2 = $(`<h2>${location.name}, ${location.type}, ${location.dimension}</h2>`)   
        const $img1 = $(`<img src='' alt=${location.name} />`)

        $('body').append($h2)
        
        const $divLocation = $("div.name")
        $divLocation.empty()
        const $divType = $("div.type")
        $divType.empty()
        const $divDimension = $("div.dimension")
        $divDimension.empty()
        
        $divlocation.append( `Name: ${location.name}`)
        $divtype.append( ` Type: ${location.type}`)
        $divDimension.append( ` Dimension: ${location.dimension}`)
    }) 
}        

























 $.ajax("https://rickandmortyapi.com/api")
 .then((data) => {
     console.log(data)
 })
 
 $.ajax("https://rickandmortyapi.com/api/character")
 .then((data) => {
     console.log(data)
     console.log(data.results)
 })
 
 
 $.ajax("https://rickandmortyapi.com/api/location")
 .then((data) => {
     console.log(data)
     console.log(data.results)
 })
 
 $.ajax("https://rickandmortyapi.com/api/episode")
 .then((data) => {
     console.log(data)
     console.log(data.results)
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


//     $("input[type=submit]").on("click", (event) => {
//     event.preventDefault()

//     const inputText = $("input[type=text]").val()
//     character(textInput)
//     characterSearch(inputText)
// })