const baseUrl ="https://gamehub.local/wp-json/wc/store/products";

const productContainer = document.querySelector(".product-list");
const categories = document.querySelectorAll(".categories")
const searchButton = document.querySelector(".search-button");

async function getProducts(url) {
    
    try {
        const response = await fetch(url);
        const getResults = await response.json();

        console.log(getResults);

        createHTML(getResults);
    }

    catch(error){
        console.log(error);
    }
}

getProducts(baseUrl);

function createHTML(products) {
    products.forEach(function(product) {
        productContainer.innerHTML += `
        <div class="products">
            <a href="products/productdetails.html?id=${product.id}&name=${product.name}">
                <img src="${product.images[0].src}" alt="${product.name}" class="gameImageThumbnailsColumn">
                <h3>${product.sku}</h3>
                <p>${product.prices.price} NOK</p>
            </a>
        </div>`;
    });
}

categories.forEach(function(category) {
    category.onclick = function(event) {
        let newUrl;
        if(event.target.id === "featured"){
            newUrl = baseUrl + "?featured=true";
        }
        else {
            const chosenCategory = event.target.value;
            newUrl = baseUrl + `?category=${chosenCategory}`
        }
        productContainer.innerHTML = "";
        getProducts(newUrl);
    }
})

searchButton.onclick = function() {

    const searchInput = document.querySelector ("#search-input").value;
    const newUrl = baseUrl + `?search=${searchInput}`;

    productContainer.innerHTML = "";
    getProducts(newUrl);
}