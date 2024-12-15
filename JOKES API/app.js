const loadjoke = async () => {
 try{
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random')
    const jokedata = await response.json();
   joke = ` ${jokedata.setup} ${jokedata.punchline}`
    document.getElementById('loadJoke').innerHTML=joke;
 }
 catch(error){
    console.error(error)
 }  
}

document.getElementById("loadJokeBtn").addEventListener("click",loadjoke)
