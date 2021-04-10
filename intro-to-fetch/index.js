// console.log("Hello World")
let url = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
fetch(url)  // The fetch method is available to us in the browser
    // And we supply at least a url and it will kick off 
    // a "GET" request to that url
    .then(res => res.json()) // .then() can be chained on a fetch to allow us
    // to take the response and do something with it
    .then(json => { // In this case I have used the json data to display in the console
        console.log(json)
        console.log(json.title)  // These logs are unique to the json that we got back
        console.log(json.locations)// and only work on this objects structure
        console.log(json.director)
    })

/*
BASIC fetch usage
fetch(<url>)
    .then(<cb to process the data>)
    .then(<cb to use the data>)
*/

const baseURL = "https://ghibliapi.herokuapp.com"
fetch(baseURL + "/films")
    .then(res => res.json())
    .then(json => {

        let myArr =json.map((item) =>
            ({ title: item.title, rt_score: +item.rt_score })
        ).sort((cur, prev) => prev.rt_score - cur.rt_score)

        //console.log(myArr)
        displayResults(myArr)
    })


    //Display Results
function displayResults(films) {
    console.log("Hello from display results",films) //Checks to prove I am passing my data

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

// let getLocations = (locUrl) => {
//     fetch(locUrl)
//         .then(res => res.json())
//         .then(json => {
//             console.log(json[0])
//         })
// }
