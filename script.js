const jokeEl =document.getElementById('joke');
const btn =document.getElementById('btn')
const apikey ='ZHQUZmmLuNCkj/2ahE7MEw==6MEX7CGDuvOCkRjq'
const apiURL ='https://api.api-ninjas.com/v1/jokes?limit=1'

const options ={
    method:'GET',
    headers:{'X-Api-Key': apikey},

};
async function getJokes(){
  try {
    jokeEl.innerText = 'Updating...'
  btn.innerText = 'Loading...'
  btn.disabled = true;
  const response = await fetch(apiURL,options)
  const data = await response.json()
  btn.disabled= false;
  jokeEl.innerText = data[0].joke 
  btn.innerText= 'TELL ME A JOKE'
  } catch (error) {
    jokeEl.innerText = 'THERE IS AN ERROR PLS TRY AGAIN LATER'
    btn.disabled = false;
    btn.innerText= 'TELL ME A JOKE'
  } 
}



btn.addEventListener('click', getJokes)