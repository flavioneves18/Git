const acessKey = "hMUbckX25RO-1I8_UfLGehBriY72hGnBPiM_vqEkoWI";
const SEARCH_FORM = document.getElementById("search-form");
const SEARCH_BOX = document.getElementById('search-box');
const SEARCH_RESULTS = document.getElementById('search-results');
const BTN_SHOW_MORE = document.getElementById('btn-show-more');
let keyword = "";
let page = 1;

const fetchImages = async () => {
    keyword = SEARCH_BOX.value;
    const url = `https://api.unsplash.com/search/photos?client_id=${acessKey}&query=${keyword}&page=${page}&per_page=10`
    const data = await fetch(url).then(resposta => resposta.json());
    if(page === 1) {
        SEARCH_RESULTS.innerHTML = "";
 
    }
    const results = data.results;
    results.map((result) => {
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        SEARCH_RESULTS.appendChild(imageLink);
    })
    BTN_SHOW_MORE.style.display = "block";

}

SEARCH_FORM.addEventListener('submit',(e) => {
    e.preventDefault();
    page = 1;
    fetchImages();
})

BTN_SHOW_MORE.addEventListener('click',() => {
    page++;
    fetchImages();
})