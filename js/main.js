var app = new Vue({
    el: "#app",
    data: {
        products: [
            { 
                id: 1, 
                title: "Халапеньо", 
                short_text: "Середня гострота", 
                image: "jalapeno.jpeg",
                characteristics: {
                    plant: [
                        "Сильний ріст, що забезпечує хороше покриття листя",
                        "Дуже висока продуктивність з гарним зав'язуванням плодів",
                        "Ранньостиглий сорт"
                    ],
                    fruit: [
                        "Довгий термін зберігання на рослині і після збору врожаю",
                        "Яскравий, блискучий, привабливий темно-червоний колір",
                        "Середній розмір плоду: 140-160 грамів"
                    ],
                    cycle: ["Весна", "Осінь", "Зима"],
                    color: "Зелений"
                }
            },
            { 
                id: 2, 
                title: "Серрано", 
                short_text: "Висока гострота", 
                image: "serrano.jpg",
                characteristics: {
                    plant: [
                        "Середня сила росту рослин з міцними гілками",
                        "Добра адаптивність до різних умов",
                        "Стійкий до загальних хвороб"
                    ],
                    fruit: [
                        "Тонка та витягнута форма",
                        "Яскраво-зелений колір, що стає червоним при дозріванні",
                        "Ідеально підходить для соусів та сушіння"
                    ],
                    cycle: ["Літо", "Осінь"],
                    color: "Зелений/Червоний"
                }
            },
            { 
                id: 3, 
                title: "Каєнський перець", 
                short_text: "Дуже висока гострота", 
                image: "cayenne.jpeg",
                characteristics: {
                    plant: [
                        "Високий, прямостоячий ріст",
                        "Потребує підтримки для важких врожаїв",
                        "Добре росте в теплих кліматичних умовах"
                    ],
                    fruit: [
                        "Довгі та тонкі плоди",
                        "Яскраво-червоні при дозріванні",
                        "Чудово підходить для сушіння та виготовлення порошку чилі"
                    ],
                    cycle: ["Весна", "Літо"],
                    color: "Червоний"
                }
            },
            { 
                id: 4, 
                title: "Пташине око", 
                short_text: "Екстремальна гострота", 
                image: "birdseye.jpg",
                characteristics: {
                    plant: [
                        "Компактний та кущистий ріст",
                        "Добре росте в тропічних умовах",
                        "Висока продуктивність з маленькими плодами"
                    ],
                    fruit: [
                        "Малі та круглі плоди",
                        "Перетворюється з зеленого на яскраво-червоний",
                        "Використовуються в азіатській та африканській кухні"
                    ],
                    cycle: ["Круглий рік"],
                    color: "Червоний/Зелений"
                }
            },
            { 
                id: 5, 
                title: "Бхут Джолокія", 
                short_text: "Пекельна гострота", 
                image: "bhutjolokia.jpg",
                characteristics: {
                    plant: [
                        "Повільно росте, але дуже продуктивний",
                        "Потребує теплих температур",
                        "Потребує добре дренованого ґрунту"
                    ],
                    fruit: [
                        "Зморшкувата та горбиста текстура",
                        "Яскраво-червоні або оранжеві при дозріванні",
                        "Один з найгарячіших перців у світі"
                    ],
                    cycle: ["Літо", "Осінь"],
                    color: "Червоний/Оранжевий"
                }
            }
        ],
        product: {},
        btnVisible: 0
    },
    mounted() {
        this.getProduct();
        this.checkInCart(); // Перевірка наявності товару в кошику при завантаженні сторінки
    },
    methods: {
        getProduct() {
            if (window.location.hash) {
                var id = window.location.hash.replace("#", "");
                this.product = this.products.find(p => p.id == id) || {};
            }
        },
        addToCart: function(id) { 
            var cart = []; 
            if(window.localStorage.getItem('cart')){ 
                cart = window.localStorage.getItem('cart').split(','); 
            } 
            if(cart.indexOf(String(id)) == -1){ 
                cart.push(id); 
                window.localStorage.setItem('cart', cart.join()); 
                this.btnVisible = 1; 
            } 
        },
        checkInCart: function() {
            // Перевірка наявності товару в кошику
            if (this.product && this.product.id && window.localStorage.getItem("cart")) {
                var cart = window.localStorage.getItem("cart").split(',');
                if (cart.indexOf(String(this.product.id)) !== -1) {
                    this.btnVisible = 1; // Якщо товар є в кошику, показуємо кнопку "Go to cart"
                }
            }
        }
    }
});
