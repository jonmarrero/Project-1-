const baseUrl = "https://rickandmortyapi.com/api/character?name="

const $divCharacter = $(".character")
const $divStatus = $(".status")
const $divSpecies = $(".species")
const $button = $("button")
const $type = $("input[type=text]")

function searchCharacter (character){
    const url = `${baseUrl}${character}`
    
    $.ajax(url)
    .then((charInfo) => {
        const char1 = charInfo.results[0]
        console.log(char1)
        const charName = charInfo.results[0].name
        console.log(charName)
        const charStatus = charInfo.results[0].status
        console.log(charStatus)
        const charSpecies = charInfo.results[0].species
        console.log(charSpecies)

        $divCharacter.append( ` Name: ${charName}`)
        $divStatus.append(` Species: ${charStatus}`)
        $divSpecies.append( ` Dead or ALive: ${charSpecies}`)
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