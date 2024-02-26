const apiKey = "jGovseZr3hcC5qseKSWhnw==YgwydvS6IHig8bhB";
const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  method:'GET',
  headers:{
    'X-Api-Key':apiKey,
  },

}
async function get_joke(){
  try {
    jokeEl.innerText = 'Loading...';
    const response =await fetch(apiUrl,options);
    const data =await response.json();
    const randomJoke = data[0].joke;
    jokeEl.innerText = randomJoke +'😂';
    
  } catch (error) {
    jokeEl.innerText = 'Ops something went wrong,try again later';
    
  }
 
}


btnEl.addEventListener('click',get_joke);

