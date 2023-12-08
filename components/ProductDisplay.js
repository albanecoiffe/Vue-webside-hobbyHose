app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        /*html*/
        `<div class="product-display container">
            <div class="row">
                <div class="col-12 col-md-6">
                    <img :src="image" :key="image" class="img-fluid" alt="product image">
                </div>
                <div class="col-12 col-md-6">
                    <h1>{{ title }}</h1>
                    <p>{{ description }}</p>
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>
                    <p>Shipping: {{ shipping }}</p>
                    <ul>
                        <li v-for="detail in details" :key="detail">{{ detail }}</li>
                    </ul>
                    <div class="color-circle-container">
                        <div
                            v-for="(variant, index) in variants"
                            :key="variant.id"
                            @mouseover="updateVariant(index)"
                            class="color-circle"
                            :style="{ backgroundColor: variant.color }">
                        </div>
                    </div>
                    <button
                        class="button"
                        :class="{ disabledButton: !inStock }"
                        :disabled="!inStock"
                        @click="addToCart">
                        Add to Cart
                    </button>
                </div>
            </div>
            <review-list v-if="reviews.length" :reviews="reviews"></review-list>
            <review-form @review-submitted="addReview"></review-form>
        </div>`,
    data: function () {
        return {
            cart: 0,
            product: 'Hobby horse',
            brand: 'Ur Life With Hobby Horse',
            selectedVariant: 0,
            description: 'This new line for kids features recreational universe built around imaginary miniature cowboys and cowgirls. Textile items, games and unique accessories create a real playground for everyone.',
            details: ['Made in France', 'Designed by Luna Caralada', 'Dimensions: L 39 x H 114 cm', `Price : 130 CAD`],
            variants: [
                { id: 2234, color: '#0D0D0D', image: 'images/hobby_horse_black.png', quantity: 64 },
                { id: 2235, color: '#E1D9D5', image: 'images/hobby_horse_white.png', quantity: 16 },
                { id: 2236, color: '#E3C998', image: 'images/hobby_horse_brown.png', quantity: 0 },
                { id: 2237, color: '#FFC0D9', image: 'images/hobby_horse_home.jpeg', quantity: 17 },
                { id: 2238, color: '#FF8F8F', image: 'images/hobby_horse_unicorn.jpeg', quantity: 4 },
                { id: 2239, color: '#A9A9A9', image: 'images/hobby_horse_gris.webp', quantity: 2 },

            ],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id) //Communicating Events
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review) {
            this.reviews.push(review)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },//Computed Properties
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },//Computed Properties
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 15
        }
    }
})