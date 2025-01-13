
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

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const product = products.find(p => p.id === productId);

document.getElementById('product-name').innerHTML = product.name;
document.getElementById('product-image').src = product.image;
document.getElementById('product-price').innerHTML = `<b>Price : </b>₹${product.price}`;
document.getElementById('product-brand').innerHTML = `<b>brand : </b>${product.brand}`;
document.getElementById('product-system').innerHTML = `<b>Operating System : </b>${product.System}`;
document.getElementById('product-storage').innerHTML = `<b>Memory Storage Capacity : </b>${product.storage}`;
document.getElementById('product-modal').innerHTML = `<b>Model Name : </b>${product.model}`;
document.getElementById('product-stock').innerHTML = `<b><p class="text-danger">${product.stock} Items In Stock</p></b>`;
document.getElementById('product-description').innerHTML = `<b>Description : </b>${product.description}`;
document.getElementById('title').innerHTML = `${product.name}`;

document.getElementById('increment').addEventListener('click', () => {
    const quantityValue = document.getElementById('quantity-value');
    const currentQuantity = parseInt(quantityValue.textContent);
    quantityValue.textContent = currentQuantity + 1;
});

document.getElementById('decrement').addEventListener('click', () => {
    const quantityValue = document.getElementById('quantity-value');
    const currentQuantity = parseInt(quantityValue.textContent);
    if (currentQuantity > 1) {
        quantityValue.textContent = currentQuantity - 1;
    }
});

