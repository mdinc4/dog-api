
let loading= document.getElementById("loading");
let imageContainer= document.getElementById("image");
const apiUrl= "https://dog.ceo/api/breeds/image/random";



const fetchDogImage=  () => {

    fetch(apiUrl)
    .then((response) =>{
        if(!response.ok) {
        throw new Error("Network response was not ok" + response.statusText);
        }
    return response.json();
    }).then((data) => {
        console.log(data.message);
        imageContainer.innerHTML= `<img src="${data.message}" class="dogImage" alt="Dog Image" />`;
    }).catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        imageContainer.innerHTML= `<p>Error fetching dog image: ${error.message}</p>`;
    })
}
        




fetchDogImage();