
let products = [

    {
        id: 'product5',
        name: 'Samsung Galaxy A15 (Blue-Black, 8GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/71QZyo8ekbL._SX679_.jpg',
        price: '12,999.00',
        color: 'black, white, gray, green',
        brand: 'Samsung',
        System: 'Android 12',
        model: 'Samsung Galaxy A15',
        storage: '256GB',
        stock: 2,
        description: `
    - Sleek Blue-Black design<br>
    - 8GB RAM for efficient performance<br>
    - 256GB of storage space<br>
    - Android 12 OS<br>
    - High-quality camera<br>
    - Vivid display<br>
    - Durable battery life<br>
    - Affordable price point`
    },
    {
        id: 'product6',
        name: 'Xiaomi Mi Note 13 (Arctic White, 8GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/71XQD0wtMPL._SX569_.jpg',
        price: '26,999.00',
        color: 'white, black, gray, green',
        brand: 'Xiaomi',
        System: 'Android 12',
        model: 'Xiaomi Mi Note 13',
        storage: '256GB',
        stock: 5,
        description: `
    - Elegant Arctic White color<br>
    - 8GB RAM for smooth multitasking<br>
    - 256GB internal storage<br>
    - Runs on Android 12<br>
    - 5G ready<br>
    - High-resolution display<br>
    - Long-lasting battery<br>
    - High-performance camera`
    },
    {
        id: 'product7',
        name: 'OnePlus Nord 5T (Black, 8GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/41gsEWSkE1L._SX300_SY300_QL70_FMwebp_.jpg',
        price: '14,999.00',
        color: 'black, white, gray, green',
        brand: 'OnePlus',
        System: 'Android 12',
        model: 'OnePlus Nord 5T',
        storage: '256GB',
        stock: 25,
        description: `
    - Classic Black color<br>
    - 8GB RAM for efficient multitasking<br>
    - 256GB internal storage<br>
    - Runs on Android 12<br>
    - 5G connectivity<br>
    - Clear and vibrant display<br>
    - Reliable battery life<br>
    - High-quality camera system`
    },
    {
        id: 'product8',
        name: 'Samsung Galaxy M35 (Daybreak Blue, 8GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/81bjSZL8tNL._SX679_.jpg',
        price: '27,499.00',
        color: 'blue, black, white, gray, green',
        brand: 'Samsung',
        System: 'Android 12',
        model: 'Samsung Galaxy S35',
        storage: '256GB',
        stock: 8,
        description: `
    - Striking Daybreak Blue color<br>
    - 8GB RAM for smooth performance<br>
    - 256GB of storage<br>
    - Android 12 operating system<br>
    - 5G ready for fast internet<br>
    - High-resolution display<br>
    - Durable battery life<br>
    - Excellent camera quality`
    },
    {
        id: 'product1',
        name: 'OnePlus Nord CE4 Lite 5G (Mega Blue, 8GB RAM, 128GB Storage)',
        image: 'https://m.media-amazon.com/images/I/5155PFA2N+L._SX679_.jpg',
        price: '19,999.00',
        color: 'blue, green, gray, white, black',
        brand: 'OnePlus',
        System: 'OxygenOS',
        model: 'OnePlus Nord CE4 Lite',
        storage: '128GB',
        stock: 13,
        description: `
    - Stunning Mega Blue color <br>
    - 8GB RAM for smooth multitasking <br>
    - 128GB internal storage<br>
    - OxygenOS for a seamless experience<br>
    - 5G connectivity for fast internet<br>
    - High-resolution display<br>
    - Long-lasting battery life`
    },
    {
        id: 'product2',
        name: 'Samsung Galaxy S24 (Aurora Blue, 12GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/81vxWpPpgNL._SX679_.jpg',
        price: '1,34,999.00',
        color: 'blue, black, white, gray, green',
        brand: 'Samsung',
        System: 'Android 12',
        model: 'Samsung Galaxy S24 Ultra 5G',
        storage: '256GB',
        stock: 1,
        description: `
    - Elegant Aurora Blue finish<br>
    - 12GB RAM for powerful performance<br>
    - 256GB of ample storage<br>
    - Runs on Android 12<br>
    - Ultra-high resolution camera<br>
    - Super AMOLED display<br>
    - Supports 5G networks<br>
    - Advanced security features`
    },
    {
        id: 'product3',
        name: 'Xiaomi Mi 11T Pro 5G (Blue, 12GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/71qe5DogAtL._SX679_.jpg',
        price: '23,999.00',
        color: 'blue, black, white, gray, green',
        brand: 'Xiaomi',
        System: 'Android 12',
        model: 'Xiaomi Mi 11T Pro 5G',
        storage: '256GB',
        stock: 3,
        description: `
    - Stylish Blue color<br>
    - 12GB RAM for smooth performance<br>
    - 256GB internal storage capacity<br>
    - Android 12 operating system<br>
    - 5G ready for fast internet<br>
    - Crystal clear display<br>
    - Long battery life<br>
    - High-quality camera system`
    },
    {
        id: 'product4',
        name: 'OnePlus Nord 7 Pro 5G (Aurora Blue, 12GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/61NbiB1GU-L._SX679_.jpg',
        price: '29,999.00',
        color: 'blue, black, white, gray, green',
        brand: 'OnePlus',
        System: 'Android 12',
        model: 'OnePlus Nord 7 Pro 5G',
        storage: '256GB',
        stock: 10,
        description: `
    - Attractive Aurora Blue color<br>
    - 12GB RAM for seamless multitasking<br>
    - 256GB internal storage<br>
    - Runs on Android 12<br>
    - 5G connectivity for ultra-fast internet<br>
    - High-definition display<br>
    - Excellent battery life<br>
    - Premium build quality`
    },
    {
        id: 'product9',
        name: 'Xiaomi Mi 13 Pro (Fusion Black, 8GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/51bgfpFXKXL._SX679_.jpg',
        price: '27,390.00',
        color: 'blue, black, white, gray, green',
        brand: 'Xiaomi',
        System: 'Android 12',
        model: 'Xiaomi Mi 13 Pro',
        storage: '256GB',
        stock: 55,
        description: `
    - Sleek Fusion Black design<br>
    - 8GB RAM for smooth multitasking<br>
    - 256GB internal storage<br>
    - Android 12 operating system<br>
    - 5G ready<br>
    - High-definition display<br>
    - Long-lasting battery<br>
    - Advanced camera features`
    },
    {
        id: 'product10',
        name: 'OnePlus Nord 7 Pro (Dark Chrome, 16GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/61g1pqSjAhL._SX679_.jpg',
        price: '32,999.00',
        color: 'blue, black, white, gray, green',
        brand: 'OnePlus',
        System: 'Android 12',
        model: 'OnePlus Nord 7 Pro',
        storage: '256GB',
        stock: 25,
        description: `
    - Sophisticated Dark Chrome color<br>
    - Massive 16GB RAM for ultimate performance<br>
    - 256GB of internal storage<br>
    - Runs on Android 12<br>
    - 5G connectivity for fast internet<br>
    - Stunning high-resolution display<br>
    - Powerful battery life<br>
    - Top-of-the-line camera system`
    },
    {
        id: 'product11',
        name: 'Samsung Galaxy A55 (Awesome Navy, 8GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/71EeBkydf9L._SX679_.jpg',
        price: '12,999.00',
        color: 'black, white, gray, green',
        brand: 'Samsung',
        System: 'Android 12',
        model: 'Samsung Galaxy A55',
        storage: '256GB',
        stock: 4,
        description: `
    - Attractive Awesome Navy color<br>
    - 8GB RAM for smooth performance<br>
    - 256GB internal storage<br>
    - Android 12 operating system<br>
    - High-resolution display<br>
    - Durable battery life<br>
    - Excellent camera quality<br>
    - Affordable price point`
    },
    {
        id: 'product12',
        name: 'Xiaomi 14(Jade Green, 12GB RAM, 512GB Storage)',
        image: 'https://m.media-amazon.com/images/I/71MsYJjQhBL._SX679_.jpg',
        price: '69,999.00',
        color: 'white, black, gray, green',
        brand: 'Xiaomi',
        System: 'Android 12',
        model: 'Xiaomi 14',
        storage: '512GB',
        stock: 3,
        description: `
    - Elegant Jade Green color<br>
    - 12GB RAM for powerful performance<br>
    - 512GB of ample storage<br>
    - Runs on Android 12<br>
    - 5G ready for ultra-fast internet<br>
    - High-resolution display<br>
    - Long-lasting battery life<br>
    - Top-tier camera system`
    },
    {
        id: 'product13',
        name: 'OnePlus Nord 5T (Ultra Orange, 8GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/51KJE22BKrL._SX679_.jpg',
        price: '14,999.00',
        color: 'black, white, gray, green',
        brand: 'OnePlus',
        System: 'Android 12',
        model: 'OnePlus Nord 5T',
        storage: '256GB',
        stock: 12,
        description: `
    - Bold Ultra Orange color<br>
    - 8GB RAM for efficient multitasking<br>
    - 256GB internal storage<br>
    - Android 12 operating system<br>
    - 5G connectivity<br>
    - Clear and vibrant display<br>
    - Reliable battery life<br>
    - High-quality camera system`
    },
    {
        id: 'product14',
        name: 'Samsung Galaxy S21 (Olive, 8GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/815U7KIpuKL._SX569_.jpg',
        price: '27,999.00',
        color: 'blue, black, white, gray, green',
        brand: 'Samsung',
        System: 'Android 12',
        model: 'Samsung Galaxy S21',
        storage: '256GB',
        stock: 26,
        description: `
    - Unique Olive color<br>
    - 8GB RAM for smooth performance<br>
    - 256GB of storage<br>
    - Android 12 operating system<br>
    - High-resolution display<br>
    - Durable battery life<br>
    - Advanced camera features<br>
    - 5G ready`
    },
    {
        id: 'product15',
        name: 'Xiaomi Mi 13 Pro (Midnight Black, 8GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/7169hX0S18L._SX569_.jpg',
        price: '23,980.00',
        color: 'blue, black, white, gray, green',
        brand: 'Xiaomi',
        System: 'Android 12',
        model: 'Xiaomi Mi 13 Pro',
        storage: '256GB',
        stock: 200,
        description: `
    - Sleek Midnight Black design<br>
    - 8GB RAM for efficient multitasking<br>
    - 256GB internal storage<br>
    - Android 12 operating system<br>
    - 5G ready<br>
    - High-definition display<br>
    - Long-lasting battery<br>
    - Advanced camera features`
    },
    {
        id: 'product16',
        name: 'OnePlus Nord 7 Pro (Dark Chrome, 8GB RAM, 128GB Storage)',
        image: 'https://m.media-amazon.com/images/I/61g1pqSjAhL._SX679_.jpg',
        price: '29,999.00',
        color: 'blue, black, white, gray, green',
        brand: 'OnePlus',
        System: 'Android 12',
        model: 'OnePlus Nord 7 Pro',
        storage: '128GB',
        stock: 11,
        description: `
    - Sophisticated Dark Chrome color<br>
    - 8GB RAM for smooth multitasking<br>
    - 128GB internal storage<br>
    - Runs on Android 12<br>
    - 5G connectivity for fast internet<br>
    - Stunning high-resolution display<br>
    - Powerful battery life<br>
    - Top-of-the-line camera system`
    },
    {
        id: 'product17',
        name: 'Samsung Galaxy A35 (Awesome Lilac, 8GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/71picrEy4YL._SX679_.jpg',
        price: '33,999.00',
        color: 'black, white, gray, green',
        brand: 'Samsung',
        System: 'Android 12',
        model: 'Samsung Galaxy A35',
        storage: '256GB',
        stock: 7,
        description: `
    - Charming Awesome Lilac color<br>
    - 8GB RAM for smooth performance<br>
    - 256GB internal storage<br>
    - Android 12 operating system<br>
    - High-resolution display<br>
    - Durable battery life<br>
    - Excellent camera quality<br>
    - Affordable price point`
    },
    {
        id: 'product18',
        name: 'Xiaomi 14 civi (White, 12GB RAM, 512GB Storage)',
        image: 'https://m.media-amazon.com/images/I/711SMo2bL4L._SX679_.jpg',
        price: '69,999.00',
        color: 'white, black, gray, green',
        brand: 'Xiaomi',
        System: 'Android 12',
        model: 'Xiaomi 14',
        storage: '512GB',
        stock: 29,
        description: `
    - Elegant White color<br>
    - 12GB RAM for powerful performance<br>
    - 512GB of ample storage<br>
    - Runs on Android 12<br>
    - 5G ready for ultra-fast internet<br>
    - High-resolution display<br>
    - Long-lasting battery life<br>
    - Top-tier camera system`
    },
    {
        id: 'product19',
        name: 'OnePlus Nord 5T (Celadon Marble, 8GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/61nxQ62qglL._SX679_.jpg',
        price: '14,999.00',
        color: 'black, white, gray, green',
        brand: 'OnePlus',
        System: 'Android 12',
        model: 'OnePlus Nord 5T',
        storage: '256GB',
        stock: 1,
        description: `
    - Stylish Celadon Marble design<br>
    - 8GB RAM for efficient multitasking<br>
    - 256GB internal storage<br>
    - Android 12 operating system<br>
    - 5G connectivity<br>
    - Clear and vibrant display<br>
    - Reliable battery life<br>
    - High-quality camera system`
    },
    {
        id: 'product20',
        name: 'Samsung Galaxy S21 (Navy, 8GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/81JHcYDLcHL._SX569_.jpg',
        price: '27,999.00',
        color: 'blue, black, white, gray, green',
        brand: 'Samsung',
        System: 'Android 12',
        model: 'Samsung Galaxy S21',
        storage: '256GB',
        stock: 14,
        description: `
    - Elegant Navy color<br>
    - 8GB RAM for smooth performance<br>
    - 256GB of storage<br>
    - Android 12 operating system<br>
    - High-resolution display<br>
    - Durable battery life<br>
    - Advanced camera features<br>
    - 5G ready`
    },
    {
        id: 'product21',
        name: 'Xiaomi Mi 11X Pro (Cosmic Black, 8GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/61svSnhy8TS._SY606_.jpg',
        price: '23,999.00',
        color: 'blue, black, white, gray, green',
        brand: 'Xiaomi',
        System: 'Android 12',
        model: 'Xiaomi Mi 11X Pro',
        storage: '256GB',
        stock: 5,
        description: `
    - Sleek Cosmic Black design<br>
    - 8GB RAM for efficient multitasking<br>
    - 256GB internal storage<br>
    - Android 12 operating system<br>
    - 5G ready<br>
    - High-definition display<br>
    - Long-lasting battery<br>
    - Advanced camera features`
    },
    {
        id: 'product22',
        name: 'OnePlus Nord 7 Pro (Super Silver, 8GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/61Io5-ojWUL._SX679_.jpg',
        price: '29,999.00',
        color: 'blue, black, white, gray, green',
        brand: 'OnePlus',
        System: 'Android 12',
        model: 'OnePlus Nord 7 Pro',
        storage: '256GB',
        stock: 120,
        description: `
        - Sleek Super Silver design<br>
        - 8GB RAM for smooth multitasking<br>
        - 256GB internal storage for ample space<br>
        - Powered by Android 12 for the latest features<br>
        - 5G connectivity for fast internet speeds<br>
        - High-resolution display for vibrant visuals<br>
        - Long-lasting battery for extended use<br>
        - Premium build quality for durability`
    },
    {
        id: 'product23',
        name: 'Samsung Galaxy A22 (Black, 8GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/81qVJQ1qqlS._SX569_.jpg',
        price: '22,999.00',
        color: 'black, white, gray, green',
        brand: 'Samsung',
        System: 'Android 12',
        model: 'Samsung Galaxy A22',
        storage: '256GB',
        stock: 3,
        description: `
        - Elegant Black color<br>
        - 8GB RAM for efficient performance<br>
        - 256GB storage for plenty of apps and media<br>
        - Runs on Android 12 for a smooth experience<br>
        - High-quality display for clear visuals<br>
        - Reliable battery life for all-day use<br>
        - Advanced camera system for great photos<br>
        - Durable and stylish build`
    },
    {
        id: 'product24',
        name: 'Xiaomi Mi 11 (Jazz Blue, 8GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/71gYR8pOaQS._AC_UY327_FMwebp_QL65_.jpg',
        price: '9,999.00',
        color: 'white, black, gray, green',
        brand: 'Xiaomi',
        System: 'Android 12',
        model: 'Xiaomi Mi 11',
        storage: '256GB',
        stock: 19,
        description: `
        - Stylish Jazz Blue color<br>
        - 8GB RAM for smooth and responsive performance<br>
        - 256GB internal storage to accommodate your needs<br>
        - Powered by Android 12 for the latest features<br>
        - Vibrant display for a great viewing experience<br>
        - Decent battery life for everyday use<br>
        - Advanced camera setup for high-quality photos<br>
        - Affordable price point with excellent value`
    },
    {
        id: 'product25',
        name: 'OnePlus 12R (Iron Gray, 8 GB RAM, 256 GB Storage)',
        image: 'https://m.media-amazon.com/images/I/71XNeka-BRL._SX679_.jpg',
        price: '42,998.00',
        color: 'black, white, gray, green',
        brand: 'OnePlus',
        System: 'Android 12',
        model: 'OnePlus 12R',
        storage: '256GB',
        stock: 27,
        description: `
        - Sleek Iron Gray color<br>
        - 8GB RAM for efficient multitasking<br>
        - 256GB internal storage for ample space<br>
        - Powered by Android 12 for the latest features<br>
        - 5G connectivity for fast internet speeds<br>
        - High-resolution display for vibrant visuals<br>
        `
    },
    {
        id: 'product26',
        name: 'Samsung Galaxy S21 (Graphite, 8GB RAM, 256GB Storage)',
        image: 'https://m.media-amazon.com/images/I/81vqHyDCSCL._AC_UY327_FMwebp_QL65_.jpg',
        price: '27,999.00',
        color: 'blue, black, white, gray, green',
        brand: 'Samsung',
        System: 'Android 12',
        model: 'Samsung Galaxy S21',
        storage: '256GB',
        stock: 10,
        description: `
        - Sleek Graphite color<br>
        - 8GB RAM for powerful performance<br>
        - 256GB storage to hold all your files and apps<br>
        - Android 12 for the latest software features<br>
        - Stunning display for vibrant and clear visuals<br>
        - Strong battery life for all-day usage<br>
        - Advanced camera technology for professional-quality photos<br>
        - Premium design and build quality`
    }
];

// slider js start 

let slider = {
    slides: document.querySelectorAll('.slide'),
    currentSlide: 0,

    init: function () {
        if (!this.slides.length) {
            console.log("not found");
            return;
        }
        this.showSlide(this.currentSlide);
    },
    showSlide: function (slide) {
        this.slides.forEach(s => s.classList.remove('active'));
        this.slides[slide].classList.add('active');
    },
    prev: function () {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentSlide);
    },
    next: function () {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    }
}

slider.init();

// slider js end

// product js start


let productContainer = document.getElementById('product-container');

function renderProducts(product) {
    const productContainer = document.getElementById('product-container');

    productContainer.innerHTML = '';
    product.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';

        productElement.innerHTML = `
        <div>
            <a href="product.html?id=${product.id}" id="main-product">
                <img src="${product.image}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p><b>Price :</b> ₹${product.price}</p>
                <p><b>Color :</b> ${product.color}</p>
                <p><b>Brand :</b> ${product.brand}</p>
                <p><b>System :</b> ${product.System}</p>
                <p><b>Model :</b> ${product.model}</p>
               <b><p class="text-danger">${product.stock} Items In Stock</p></b>
            </a>
            <button class="btn2" onclick="addToCart('${product.id}')">Add To Cart</button>
        </div>
        `;
        productContainer.appendChild(productElement);
    });
}


renderProducts(products);

function sortProducts() {
    const shortdata = document.getElementById('sort').value
    let filterproducts


    if (shortdata === 'asc') {
        filterproducts = [...products].sort((a, b) => (a.price.replace(/,/g, '')) - parseInt(b.price.replace(/,/g, '')))
    } else if (shortdata === 'desc') {
        filterproducts = [...products].sort((a, b) => parseInt(b.price.replace(/,/g, '')) - parseInt(a.price.replace(/,/g, '')))
    } else if (shortdata === '9000-15000') {
        filterproducts = products.filter(product => {
            const price = parseFloat(product.price.replace(/,/g, ''));
            return price >= 9000 && price <= 15000;
        });
    } else if (shortdata === '15000-20000') {
        filterproducts = products.filter(product => {
            const price = parseFloat(product.price.replace(/,/g, ''));
            return price >= 15000 && price <= 20000;
        });
    } else if (shortdata === '20000-30000') {
        filterproducts = products.filter(product => {
            const price = parseFloat(product.price.replace(/,/g, ''));
            console.log(price);
            return price >= 20000 && price <= 30000;
        });
    }
    else if (shortdata === '30000') {
        filterproducts = products.filter(product => {
            const price = parseFloat(product.price.replace(/,/g, ''));
            return price >= 30000;
        });
    }
    else {
        filterproducts = products;
    }

    productContainer.innerHTML = '';
    renderProducts(filterproducts);
}

// brand sorting 

function filterByBrand(brand) {
    const filteredProducts = products.filter(product => product.brand === brand);
    renderProducts(filteredProducts);
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});

document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            searchProducts(query);
        }
    });
});


// searching 

function searchProducts(query) {
    const results = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );

    displayResults(results);
}

function displayResults(results) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";

    if (results.length > 0) {
        results.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';

            productElement.innerHTML = `
        <div>
            <a href="product.html?id=${product.id}" id="main-product">
                <img src="${product.image}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p><b>Price :</b> ₹${product.price}</p>
                <p><b>Color :</b> ${product.color}</p>
                <p><b>Brand :</b> ${product.brand}</p>
                <p><b>System :</b> ${product.System}</p>
                <p><b>Model :</b> ${product.model}</p>
                <b><p class="text-danger">${product.stock} Items In Stock</p></b>
            </a>
            <button class="btn2" onclick="addToCart('${product.id}')">Add To Cart</button>
        </div>
        `;
            productContainer.appendChild(productElement);
        });
    } else {
        productContainer.innerHTML = "<p>No products found.</p>";
    }
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
    const query = searchInput.value;
    searchProducts(query);
});

// searching

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

document.getElementById('register-btn').addEventListener('click', function (event) {
    event.preventDefault();

    var name = document.getElementById('exampleInputName2').value;
    var email = document.getElementById('exampleInputEmail2').value;
    var password = document.getElementById('exampleInputpass2').value;
    var password2 = document.getElementById('exampleInputPassword2').value;
    var check = document.getElementById('exampleCheck2').checked;
    var alert2 = document.getElementById('alert2');

    let correct = true;

    if (name === '') {
        alert2.innerHTML = 'Please enter your name';
        correct = false;
    } else if (name.length < 6) {
        alert2.innerHTML = 'Name must be at least 6 characters long';
        correct = false;
    } else if (email === '') {
        alert2.innerHTML = 'Please enter your email';
        correct = false;
    } else if (!validateEmail(email)) {
        alert2.innerHTML = 'Please enter a valid email';
        correct = false;
    } else if (password === '') {
        alert2.innerHTML = 'Please enter your password';
        correct = false;
    } else if (password.length < 8) {
        alert2.innerHTML = 'Password must be at least 8 characters long';
        correct = false;
    } else if (password2 === '') {
        alert2.innerHTML = 'Please confirm your password';
        correct = false;
    } else if (password !== password2) {
        alert2.innerHTML = 'Passwords do not match';
        correct = false;
    } else if (!check) {
        alert2.innerHTML = 'Please accept the terms & conditions';
        correct = false;
    }

    if (!correct) {
        alert2.style.color = 'red';
        alert2.style.backgroundColor = 'rgba(255, 0, 0, 0.129)';
        alert2.style.fontWeight = '500';
        alert2.style.border = '3px solid red';
        alert2.style.textAlign = 'center';
        alert2.style.padding = '10px 0px';
    } else {
        let users = JSON.parse(localStorage.getItem('users')) || [];

        let emailExists = users.some(user => user.email === email);
        if (emailExists) {
            alert2.innerHTML = 'Email is already registered';
            alert2.style.color = 'red';
            alert2.style.backgroundColor = 'rgba(255, 0, 0, 0.129)';
            alert2.style.fontWeight = '500';
            alert2.style.border = '3px solid red';
            alert2.style.textAlign = 'center';
            alert2.style.padding = '10px 0px';
        } else {
            users.push({ name, email, password });

            localStorage.setItem('users', JSON.stringify(users));

            alert2.innerHTML = 'Registration successful';
            alert2.style.color = '';
            alert2.style.backgroundColor = '';
            alert2.style.fontWeight = '';
            alert2.style.border = '';
            alert2.style.textAlign = '';
            alert2.style.padding = '';

            document.getElementById('exampleInputName2').value = '';
            document.getElementById('exampleInputEmail2').value = '';
            document.getElementById('exampleInputpass2').value = '';
            document.getElementById('exampleInputPassword2').value = '';
            document.getElementById('exampleCheck2').checked = false;

            setTimeout(function () {
                alert2.innerHTML = '';
            }, 2000);
        }
    }
});

// Handle Login
document.getElementById('login-submit').addEventListener('click', function (event) {
    event.preventDefault();
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var alert = document.getElementById('alert');

    let correct = true;

    if (email === '') {
        alert.innerHTML = 'Please enter your email';
        correct = false;
    } else if (!validateEmail(email)) {
        alert.innerHTML = 'Please enter a valid email';
        correct = false;
    } else if (password === '') {
        alert.innerHTML = 'Please enter your password';
        correct = false;
    } else if (password.length < 8) {
        alert.innerHTML = 'Password must be at least 8 characters long';
        correct = false;
    }

    if (!correct) {
        alert.style.color = 'red';
        alert.style.backgroundColor = 'rgba(255, 0, 0, 0.129)';
        alert.style.fontWeight = '500';
        alert.style.border = '3px solid red';
        alert.style.textAlign = 'center';
        alert.style.padding = '10px 0px';
        alert.style.marginTop = '10px';
    } else {
        let users = JSON.parse(localStorage.getItem('users')) || [];

        let user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert.innerHTML = 'Logged in successfully';
            alert.style.color = '';
            alert.style.backgroundColor = '';
            alert.style.fontWeight = '';
            alert.style.border = '';
            alert.style.textAlign = '';
            alert.style.padding = '';

            document.getElementById('exampleInputEmail1').value = '';
            document.getElementById('exampleInputPassword1').value = '';

            setTimeout(function () {
                alert.innerHTML = '';
            }, 2000);
        } else {
            alert.innerHTML = 'Incorrect email or password';
            alert.style.color = 'red';
            alert.style.backgroundColor = 'rgba(255, 0, 0, 0.129)';
            alert.style.fontWeight = '500';
            alert.style.border = '3px solid red';
            alert.style.textAlign = 'center';
            alert.style.padding = '10px 0px';
            alert.style.marginTop = '10px';
        }
    }
});

$(".sign").click(function () {
    $(".signup").css({ display: "flex" });
});
$(".login").click(function () {
    $(".signup").css({ display: "none" });
});

document.querySelectorAll('.page-back').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('#staticBackdrop').forEach(modal => {
            modal.style.display = "none";
        });
    });
});


function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = products.find(p => p.id === productId);
    let cartItem = cart.find(item => item.id === productId);

    if (product) {
        if (cartItem) {
            if (cartItem.quantity < product.stock) {
                cartItem.quantity += 1;
            } else {
                alert('Sorry, no more stock available.');
                return;
            }
        } else {
            product.quantity = 1;
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Cart after adding item:', cart);
        updateCartIndicator();
    }
}

function updateCartIndicator() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalQuantity = cart.length;
    console.log('Total Quantity:', totalQuantity);
    document.querySelector('.item-count').textContent = totalQuantity;
}

function renderCart() {
    console.log("Render Cart called");

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    const buynow = document.getElementById('buy-now');

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center mt-4 fs-4">Your cart is empty</p>';
        cartTotalContainer.textContent = '₹0.00';
        buynow.style.display = 'none';
        return;
    }

    let total = 0;
    cart.forEach(item => {
        total += parseFloat(item.price.replace(/,/g, '')) * item.quantity;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
        
            <div class="main1">
                <div class="img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                    <div class="content">
                        <div class="stock-error"></div>
                         <div class="name">
                             <h4>${item.name}</h4>
                             <p>₹${item.price}</p>
                         </div>
                    <p><b>Color :</b> ${item.color}</p>
                    <p><b>Brand :</b> ${item.brand}</p>
                    <p><b>System :</b> ${item.System}</p>
                    <b><p class="text-danger">${item.stock} Items In Stock</p></b>
                    <p><b>Quantity:</b> <button onclick="updateQuantity('${item.id}', -1)" type="button" class="btn btn-outline-dark left">-</button>
                    ${item.quantity}
                    <button onclick="updateQuantity('${item.id}', 1)" type="button" class="btn btn-outline-dark right">+</button></p>
                    <button onclick="removeFromCart('${item.id}')" type="button" class="btn btn-danger">Remove</button>
                </div>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    cartTotalContainer.textContent = `₹${total.toFixed(2)}`;
}

function updateQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItem = cart.find(item => item.id === productId);
    let product = products.find(p => p.id === productId);

    if (cartItem) {
        if (change > 0 && cartItem.quantity >= product.stock) {
            alert('Sorry, no more stock available.');
            return;
        }

        if (change < 0 && cartItem.quantity === 1) {
            return;
        }

        cartItem.quantity += change;

        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartIndicator();
    }
}



function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartIndicator();
}


if (window.location.pathname.endsWith('cart.html')) {
    renderCart();
}

document.querySelectorAll('.btn2').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        const productId = button.parentElement.querySelector('button').href.split('id=')[1];
        addToCart(productId);
    });
});

updateCartIndicator();

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateCartIndicator();
});

