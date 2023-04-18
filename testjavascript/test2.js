// import {featured} from "./featured.js";

const apiBase = "https://gamehub.local";
const woocommerceBase = "/wp-json/wc/store";
// const woocommerceBase = "/wp-json/wc/v3";
const productBase = "/products";
// const apiKeySecret = "?consumer_key=ck_4fde5a20b3a0c9f3bff2abe8c1e1ea4ade42628e&consumer_secret=cs_c545cd69dd253fe1f87175e41074e8aceadccd77"

const pagesBase = "/wp-json/wp/v2/pages";

const fullPagesURL = apiBase + pagesBase;
const fullProductURL = apiBase + woocommerceBase + productBase;
// const fullProductURL = apiBase + woocommerceBase + productBase + apiKeySecret;
const fullProductURLExample = "https://gamehub.local/wp-json/wc/store/products";
// const fullProductURLExample = "https://gamehub.local/wp-json/wc/v3/products?consumer_key=ck_d3f0c8529adfc4adf21fd89bef23a960a3eda2c2&consumer_secret=cs_1262e9396b21e788f1b0102168c2e36c74ceb68e";

const gamesList = [];

async function getProducts() {
    const response = await fetch(fullProductURL);

    const json = await response.json();

    console.log(json)

    return json;
}

function createProductHTML(product) {
    const container = document.querySelector(".container");

    const productContainer = document.createElement("div");
    productContainer.classList.add("product");
    productContainer.id = product.id;

    const title = document.createElement("h2");
    title.innerText = product.name;
    productContainer.append(title);

    for (let i = 0; i < product.images.length; i++) {
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        productContainer.append(img);
    }

    container.append(productContainer);
}

function createProductsHTML(products) {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        createProductHTML(product);
    }
}

async function productPage() {
    const products = await getProducts()
    createProductsHTML(products)
}

productPage()

function createThumbnail(item) {
  const a = document.createElement('a');
  a.href = "/product?id=" + item.id;

  a.innerText = item.title;
  document.body.append(item);
}