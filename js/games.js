const baseUrl ="https://gamehub-aleks.local/wp-json/wc/store/products";

const productContainer = document.querySelector(".product-list");
const searchButton = document.querySelector(".search-button");
const categorySelection = document.querySelector(".selection")

async function getProducts(url) {
    
    try {
        const response = await fetch(url);
        const getResults = await response.json();

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

categorySelection.onchange = function(event) {
    let newUrl;
    if(event.target.value === "featured"){
        newUrl = baseUrl + "?featured=true";
    }
    else {
        const chosenCategory = event.target.value;
        newUrl = baseUrl + `?category=${chosenCategory}`
    }
    productContainer.innerHTML = "";
    getProducts(newUrl);
    document.getElementById("search-input").value = "";
}

searchButton.onclick = function() {

    const searchInput = document.querySelector ("#search-input").value;
    const newUrl = baseUrl + `?search=${searchInput}`;

    productContainer.innerHTML = "";
    getProducts(newUrl);
    document.getElementById("selection").selectedIndex = 0;
}