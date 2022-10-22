const baseUrl = "https://rickandmortyapi.com/api"


function search (character, location, episode){
    url1 = `${baseUrl}character/?name=${character}`console.log(url1)

    url2 = `${baseUrl}location/?name=${location}`
    console.log(url2)

    url3 = `${baseUrl}episode/?name=${episode}`
    console.log(url3)
}

search(character, location, episode)
