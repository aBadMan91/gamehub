const baseUrl ="https://gamehub.local/wp-json/wc/store/products";

const perPageUrl ="https://gamehub.local/wp-json/wc/store/products?per_page=8";

const productContainer = document.querySelector(".product-list");

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

getProducts(perPageUrl);

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