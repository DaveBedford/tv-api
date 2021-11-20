// No try/catch 
const card = document.querySelector('.row');
const form = document.querySelector('.searchForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm} };
    const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config)
    
    console.log(res.data)
    
    makeImages(res.data);
    form.elements.query.value = '';
});

const makeImages = (shows) => {
    card.innerHTML = '';
    for(let result of shows){
        if (result.show.image){
            card.innerHTML += `
            <div class="col-sm-3 mt-3">
                <div class="card">
                    <img class="card-img-top" src="${result.show.image.medium}" alt="Card image cap">
                    <div class="card-body">
                        <a class="text-decoration-none" href="${result.show.url}" target="_blank">${result.show.name}</a>
                        <p class="card-text">${result.show.summary}</p>
                    </div>
                </div>
            </div>
        `;
        }
    }
}


