

const baseURL = "https://ghibliapi.herokuapp.com"

//async function getFilms() { //if you are writing an async "function syntax"
const getFilms = async () => {   
let res = await fetch(baseURL + "/films")
    console.log(res)
    let json = await res.json()
    console.log(json)

        let myArr =json.map((item) =>
            ({ title: item.title, rt_score: +item.rt_score })
        ).sort((cur, prev) => prev.rt_score - cur.rt_score)

        //console.log(myArr)
        displayResults(myArr)
}

getFilms()

    //Display Results
function displayResults(films) {
    //Grabs the ul element from the index.html
    let filmList = document.getElementById ("film-list") //This is the first time we grab a dom element by ID

    //Goes through the films that are passed into the function
    films.map(film => {
        //For each film I make  a new li tag
        let filmLi = document.createElement('li') 
        //Assignment of the film title and rt_score the the inner text
        filmLi.innerText = `${film.title } ${film.rt_score}`
        //Adds the newly made li tag with text to the ul tag
        filmList.appendChild(filmLi)
    })
}

