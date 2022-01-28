type Joke = { //Definicion del tipo JOKE
    text: string;
    score: Score;
    date: Date;
}

type Score = 1|2|3; //Definicion del tipo score para JOKE

const reportJokes: Joke[] = []; //Definicion array para almacenar objetos JOKES

let joke: Joke = {  //Definicion objeto JOKE
    text: "",
    score: 1,
    date: new Date() //Date ISO es por defecto
}

// Funcion asincrona para conseguir chistes //
async function getJoke(){ 
    if (joke.text !== ""){ //Si hay chiste, lo añadimos como objeto joke en array reportJokes
        reportJokes.push({...joke})
        console.log(reportJokes);
    }
    const response = await fetch("https://icanhazdadjoke.com/", {headers:{
        'Accept': 'application/json'
    }});

    const result = await response.json();

    joke.text = result.joke;

    //Para mostrar el texto del chiste en pantalla en vez de en console
    const jokeDom = document.getElementById("joke");

    if (jokeDom !==null){ //Si hay chiste, que lo muestre el el <p>joke
        jokeDom.innerHTML = joke.text;
    }
}

//Añadir score y date
function setScore (score: Score) {
    joke.score = score;
    joke.date = new Date();
}

