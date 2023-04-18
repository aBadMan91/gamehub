const featuredURL = "https://gamehub.local/wp-json/wc/store/products?featured=true";

const featuredContainer = document.querySelector(".highlighted");

async function getFeaturedProducts() {
    try {
        const response = await fetch(featuredURL);
        const getResults = await response.json();

        console.log(getResults);

        createHTML(getResults);
    }

    catch(error){
        console.log(error);
    }
}

getFeaturedProducts();

function createHTML(products) {
    products.forEach(function(product) {
        featuredContainer.innerHTML += `
        <div class="highlighted-game">
            <a href="products/productdetails.html?id=${product.id}&name=${product.name}">
                <img src="${product.images[0].src}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.prices.price} NOK</p>
            </a>
        </div>`;
    });
}