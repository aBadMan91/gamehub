const detailContainer = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
const name = params.get("name");

const url ="https://gamehub.local/wp-json/wc/store/products/" + id;

async function getProduct() {

    try {
        const response = await fetch(url);

        const product = await response.json();

        createHtml(product);
    }
    
    catch (error) {
        console.log(error);
        detailContainer.innerHTML = alert("error", error);
    }
}

document.title = "GameHub" + " " + "|" + " " + name;

getProduct();

function createHtml(product) {
    detailContainer.innerHTML = `
        <section class="gameImageContainer">
            <div class="topImage">
                <img src="${product.images[0].src}" alt="${product.images.alt}">
            </div>
        </section>
        <section class="game-specific_name">
            <h1>${product.name}</h1>
        </section>
        <section class="game-specific_details">
            <div class="game-specific_description">
                <p>${product.description}</p>
            </div>
            <div class="buy-info">
                <div class="game-specific_info">
                    <p><span class="bold-italic">${product.attributes[0].name}</span> ${product.attributes[0].terms[0].name}, ${product.attributes[0].terms[1].name}</p>
                    <p><span class="bold-italic">${product.attributes[1].name}</span> ${product.attributes[1].terms[0].name}</p>
                    <p><span class="bold-italic">${product.attributes[2].name}</span> ${product.attributes[2].terms[0].name}</p>
                    <p><span class="bold-italic">${product.attributes[3].name}</span> ${product.attributes[3].terms[0].name}</p>
                    <p><span class="bold-italic">${product.attributes[4].name}</span> ${product.attributes[4].terms[0].name}</p>
                    <p><span class="bold-italic">${product.attributes[5].name}</span> ${product.attributes[5].terms[0].name}</p>
                </div>
                <div class="game-price">
                    <p>${product.prices.price} NOK</p>
                </div>
                <div class="buy-cart-wish">
                    <div class="buy-now">
                        <p><a href="../checkout/checkout.html?id=${product.id}&name=${product.name}">Buy Now</a></p>
                    </div>
                    <div class="add-cart">
                        <a href="/cart/cart.html?${product.add_to_cart.url}">${product.add_to_cart.text} <i class="fa-solid fa-cart-shopping"></i></a>
                    </div>
                    <div class="add-wishlist">
                        <p>Wishlist <i class="fa-solid fa-heart"></i></p>
                    </div>
                </div>
            </div>
        </section>
        `;
}