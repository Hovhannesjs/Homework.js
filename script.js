const starshipsContainer = document.getElementById('starships-container')
const paginationConatainer = document.getElementById('pagination')
const loadingSpinner = document.getElementById('loading-spinner')
let currentPage = 1
let totalStarships;
const starshipsPerPage = 10
function showLoadingSpinner(){
    loadingSpinner.classList.add('loading-spinner-vissable')
}
function hideLoadingSpinner(){
    loadingSpinner.classList.remove('loading-spinner-vissable')
}

function renderStarships(starships){

    starshipsContainer.innerHTML=""

    starships.forEach((starship) => {
        const starshipElement = document.createElement('div');
        starshipElement.classList.add('starships')
        starshipElement.innerHTML=`
           <h2>${starship.name}</h2>
           <p><strong>Model:</strong>${starship.model}</p>
           <p><strong>Manufacturer:</strong>${starship.manufacturer}</p>
           <p><strong>Cost:</strong>${starship.cost_in_credits}</p>
           <p><strong>length:</strong>${starship.length}</p>`

        starshipsContainer.appendChild(starshipElement)
    });
}
function renderPagination (){
    const totalPages = Math.ceil(totalStarships/starshipsPerPage)
    paginationConatainer.innerHTML="";
    console.log(totalStarships,2)
    for(let i = 1; i <= totalPages; i++){
        const button = document.createElement('button');
        button.innerHTML = i
       
        
        if(i === currentPage){
            button.classList.add('active')
        }

        button.addEventListener('click',()=>{
            currentPage = i
            fetchStarships()
        })
        paginationConatainer.appendChild(button)
    }

}
function fetchStarships(){
    showLoadingSpinner()
fetch(`https://swapi.dev/api/starships/?page=${currentPage}`)
.then ((response)=>{
    return response.json()
})
.then((data)=>{
     totalStarships = data.count
   renderStarships(data.results)
    renderPagination()
    hideLoadingSpinner()
})
.catch((err)=>{
    console.log(err)
})
}

fetchStarships()



   