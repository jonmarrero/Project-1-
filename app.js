const baseUrl = "https://rickandmortyapi.com/api/character?name="
const baseUrl1 = "https://rickandmortyapi.com/api/location?page="

const $divCharacter = $(".character")
const $divStatus = $(".status")
const $divSpecies = $(".species")
const $button = $("button")
const $type = $("input[type=text]")
const $divLocation = $(".location")
const $divType = $(".type")
const $divDimension = $(".dimension")

function searchCharacter (character, location){
    const url = `${baseUrl}${character}`
    const url1 = `${baseUrl1}${location}`
    
    $.ajax(url, url1)
    .then((charInfo) => {
        const char1 = charInfo.results[0]
        console.log(char1)
        const charName = charInfo.results[0].name
        console.log(charName)
        const charStatus = charInfo.results[0].status
        console.log(charStatus)
        const charSpecies = charInfo.results[0].species
        console.log(charSpecies)
        const charLocation = charInfo.results[0].location
        console.log(charLocation)
        const charType = charInfo.results[0].type
        console.log(charType)
        const charDimension = charInfo.results[0].dimension
        console.log(charDimension)

        $divCharacter.append( ` Name: ${charName}`)
        $divStatus.append(` Dead or Alive: ${charStatus}`)
        $divSpecies.append( ` Species: ${charSpecies}`)
        $divLocation.append(` Location: ${charLocation}`)
        $divType.append(` Type: ${charType}`)
        $divDimension.append(` Dimension: ${charDimension}`)
    }) 
}
// searchCharacter('Rick')

$button.on("click", event => {
    const $divCharacter = $("div.character")
    $divCharacter.empty()
    const $divSpecies = $("div.species")
    $divSpecies.empty()
    const $divStatus = $("div.status")
    $divStatus.empty()
    const $divLocation = $("div.location")
    $divLocation.empty()
    const $divType = $("div.type")
    $divType.empty()
    const $divDimension = $("div.dimension")
    $divDimension.empty()

    event.preventDefault()
    const person = $type[0].value
    searchCharacter(person)
})
console.log($type)





// ------------------------------------------------------
//  THIS IS ALL MY CODE I ATTEMPTED TO WRITE BEFORE FIGURING OUT THE CORRECT CODE TO GET MY APP WORKING
// ------------------------------------------------------


// const baseUrl = "https://rickandmortyapi.com/api"

// $(function(){

//     const promise = $.ajax({
//         url: 'https://rickandmortyapi.com/api/character'
//     });

//     promise.then(
//        (data) => {
//         console.log(data)
//        },
//        (error) => {
//         console.log(error)
//        } 
//     )

//     function render(characters){
//         characters.forEach((character) => {
//             const $h1 = $(`<h2>${character.name}, ${character.species}, ${character.status}</h2>`)   
//             const $img = $(`<img src='' alt=${character.name} />`)

//             $('body').append($h1)
            
//             const $divCharacter = $("div.name")
//             $divCharacter.empty()
//             const $divSpecies = $("div.species")
//             $divSpecies.empty()
//             const $divStatus = $("Dead or Alive")
//             $divStatus.empty()
            
//             $divCharacter.append( `Name: ${character.name}`)
//             $divSpecies.append( ` Species: ${character.species}`)
//             $divStatus.append( ` Dead or Alive: ${character.status}`)
//         }) 
//     } 
           
//  });

//  $.ajax("https://rickandmortyapi.com/api")
//  .then((data) => {
//      console.log(data)
//  })
 
//  $.ajax("https://rickandmortyapi.com/api/character")
//  .then((data) => {
//      console.log(data)
//      console.log(data.results)
//  })
 
 
//  $.ajax("https://rickandmortyapi.com/api/location")
//  .then((data) => {
//      console.log(data)
//      console.log(data.results)
//  })
 
//  $.ajax("https://rickandmortyapi.com/api/episode")
//  .then((data) => {
//      console.log(data)
//      console.log(data.results)
//  })

// // function characterSearch(character){
// //     // constructing url for request
// //     const url = "https://rickandmortyapi.com/api"

// //     $.ajax(url)
// //     .then((character) => {
// //     console.log(character)

// //     const $divCharacter = $("div.name")
// //     $divCharacter.empty()
// //     const $divSpecies = $("div.species")
// //     $divSpecies.empty()
// //     const $divStatus = $("Dead or Alive")
// //     $divStatus.empty()
                
// //     $divCharacter.append( `Name: ${character.name}`)
// //     $divSpecies.append( ` Species: ${character.species}`)
// //     $divStatus.append( ` Dead or Alive: ${character.status}`)


// // })

// const $submit = ($("input[type=submit]"))
//     $submit.on("click", (event) => {
//     event.preventDefault()

//     const inputText = $("input[type=text]").val()
//     character(textInput)
//     characterSearch(inputText)
// })