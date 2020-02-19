(async function f() {

//данные с моего сервера
//     const productData = [];


    // const serverData = await fetch('http://localhost:8000/api/catalog')
    //     .then(respons => respons.json())
    //     .then(data => data)
    //     .catch(err => {
    //         err.message;
    //         return [];
    //     });



    const products = [
        {
            id: '7df3f04b-0ee0-4a8a-bda8-e2931e68860d',
            title: 'MacBook Pro 16-inch',
            description: '2.3GHz 8-Core Processor<br>1TB Storage<br>AMD Radeon Pro 5500M',
            price: {
                value: 2799.00,
                currency: 'USD',
            },
            imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/hero/macbook_pro_16__ni9nkbyq2dm6_large.jpg'
        },
        {
            id: '69d8b82e-1bc6-45a7-bcb0-ba205c91b8bd',
            title: 'MacBook Pro 13-inch',
            description: '2.4GHz Quad-Core Processor with Turbo Boost up to 4.1GHz<br>256GB Storage<br>Touch Bar and Touch ID',
            price: {
                value: 1799.00,
                currency: 'USD',
            },
            imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/hero/macbook_pro_16__ni9nkbyq2dm6_large.jpg'
        },
        {
            id: '9c56a489-5581-4552-802a-6e56249b0056',
            title: 'Mac Pro',
            description: '3.5GHz 8‑core Intel Xeon W processor, Turbo Boost up to 4.0GHz<br>256GB Storage<br>Radeon Pro 580X with 8GB of GDDR5 memory',
            price: {
                value: 5999.00,
                currency: 'USD',
            },
            imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/hero/mac_pro__bn92faz71k6a_large.jpg'
        },
        {
            id: 'e325ae53-ba9b-4b9e-b443-20db05f95c2e',
            title: 'MacBook Air',
            description: '2-core Intel Core i5 processor<br>1TB storage<br>12 hours battery life',
            price: {
                value: 1099.00,
                currency: 'USD',
            },
            imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/compare/macbook_air__csdfieli984m_large.jpg'
        },
        {
            id: '4f50005d-b422-4adf-b1f6-3b6551862500',
            title: 'iPhone 11 Pro Max',
            description: 'Midnight Green<br>521GB Storage<br>20 hours of video playback',
            price: {
                value: 1449.00,
                currency: 'USD',
            },
            imageLink: 'https://www.apple.com/v/iphone/home/af/images/overview/compare/compare_iphone_11_pro__fvqwhr4dkhiu_large.jpg'
        }
    ];

    let currentBasket = JSON.parse(localStorage.getItem('basket') ? localStorage.getItem('basket') : '[]');

    const rootEl = document.getElementById('rootEl');

    let currentResult = [];

    const url = 'http://www.nbrb.by/api/exrates/rates/usd?parammode=2';
    let curs = await fetch(url)
        .then(respons => respons.json())
        .then(data => data)
        .catch(err => err.message);


//разметка Продукта
    function inputItem(products) {

        if (currentResult.length === 0) {
            rootEl.innerHTML = 'No results found for your request';
        } else {
            products.forEach(function (item) {
                const newProductElement = document.createElement('div');
                if (item.price.currency = "USD") {
                    item.price.currency = "BYN";
                }

                newProductElement.className = 'product-information';

                newProductElement.innerHTML = `
                    <div class="wrap _product">
                         <div class="product-cell">
                            <div class="product--image-wrap">
                                <img class="product_img" src="${item.imageLink}"/>
                            </div>
                            <div class="product--value">
                                <p class="product_title">${item.title}</p>
                                <p class="product_description">${item.description}</p>
                            </div>
                         </div>
                         <div class="product--information_cost">
                            <p class="product_cost-info"=>${item.price.currency} ${(item.price.value*curs.Cur_OfficialRate).toLocaleString('en-En')}</p>
                            <a class="add-to-basket" id="${item.id}">Add to Basket</a>
                         </div>
                    </div>`;

                rootEl.appendChild(newProductElement);

                const button = document.getElementById(item.id);
                if (currentBasket.find(product => product.id === item.id)) {
                    button.textContent = 'Remove from Basket';
                    button.classList.add('active');
                }
                document.querySelector('.basket--circle_counter').innerHTML = currentBasket.length; //счетчик в корзине
                document.querySelector('.amount_sum').innerHTML = currentBasket.reduce((a, b) => a + b.price.value, 0);//счетчик суммы


                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    event.target.classList.toggle('active');
                    if (currentBasket.find(product => product.id === item.id)) {
                        event.target.textContent = 'Add to Basket';
                        currentBasket = currentBasket.filter((product) => product.id !== item.id);
                    } else {
                        event.target.textContent = 'Remove from Basket';
                        currentBasket.push(item);
                    }
                    localStorage.setItem('basket', JSON.stringify(currentBasket));
                    document.querySelector('.basket--circle_counter').innerHTML = currentBasket.length; //счетчик в корзине
                    document.querySelector('.amount_sum').innerHTML = currentBasket.reduce((a, b) => a + b.price.value, 0);//счетчик суммы
                })
            });
        }
    }

    currentResult = products.slice();

    inputItem(currentResult);


    function sortProductDesc(product) {
        currentResult = product.sort((a, b) =>
            a.price.value - b.price.value
        );

        inputItem(currentResult);
    }

    function sortProductAsc(product) {
        currentResult = product.sort((a, b) =>
            b.price.value - a.price.value
        );

        inputItem(currentResult);
    }

    let sortButton = document.getElementById('sort_value_change');
    sortButton.addEventListener("click", (event) => {
        let sortItem = event.target;
        rootEl.innerHTML = '';
        if (sortItem.textContent === 'Desc') {
            sortItem.innerText = 'Asc';
            sortProductAsc(currentResult);
        } else if (sortItem.textContent === 'Asc') {
            sortItem.innerText = 'Desc';
            sortProductDesc(currentResult);
        }
    });

    document.getElementById('search').addEventListener('keyup', (event) => {
        let request = event.target.value.trim();

        if (request.length >= 1) {
            let reg = new RegExp(request, 'gi');
            currentResult = products.filter((product) => product.title.search(reg) !== -1 || product.description.search(reg) !== -1);
        } else {
            currentResult = products.slice();
        }


        rootEl.innerHTML = '';
        if (document.getElementById('sort_value_change').textContent === 'Desc') {
            sortProductDesc(currentResult);
        } else if (document.getElementById('sort_value_change').textContent === 'Asc') {
            sortProductAsc(currentResult);
        }

    })
}());



// classes

class Products {
    constructor ({products, basket,  }) {
        this.textButton = textButton;
        this.textActiveButton = textActiveButton;
        this.rootEl = rootEl;
    }

    async getData() {
    const products = await fetch('http://localhost:8000/api/catalog')
        .then(respons => respons.json())
        .then(data => data)
        .catch(err => {
            err.message;
            return [];
        });
    this.defaultData = [...products];
    this.currentData = [...products];

    }

}

