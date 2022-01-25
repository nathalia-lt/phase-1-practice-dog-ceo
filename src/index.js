//console.log('%c HI', 'color: firebrick')



fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(dogObj =>  addImages(dogObj));

function addImages(dogObj){
    const imageArray = dogObj.message
    const container = document.querySelector('#dog-image-container')
    for(imageSrc of imageArray){
    const imageCreated = document.createElement('img')
    imageCreated.src = imageSrc
    container.appendChild(imageCreated)};
    //console.log(dogObj)}


fetch('https://dog.ceo/api/breeds/list/all')
.then(response => response.json())
.then(breedsObj =>  addBreeds(breedsObj.message));

/*function addBreeds(breedsObj){
    console.log(breedsObj);
    const ulDogBreeds = document.querySelector('#dog-breeds')
    for(breed of Object.keys(breedsObj)){
    const liCreated = document.createElement('li')
    liCreated.textContent = breed
    ulDogBreeds.appendChild(liCreated)}    
     // console.log(breedsObj)
}*/

function addBreeds(breedsObj){
    const ulDogBreeds = document.querySelector('#dog-breeds')
    Object.keys(breedsObj).forEach( e => {
        const liCreated = document.createElement('li') 
        liCreated.textContent = e
        liCreated.addEventListener('click', e => {
            liCreated.style.color = 'red'
        }); 
        ulDogBreeds.appendChild(liCreated)})}}
    
