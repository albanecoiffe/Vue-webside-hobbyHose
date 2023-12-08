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
            product: 'Hermes & Hobby horse',
            brand: 'Ur Life With Hobby Horse',
            selectedVariant: 0,
            description: 'When the luxa associates with games, you can only fall in love. Certainly, the price is expensive, but remember, the brand Hermes is a brand of collection in the world, and the hobby horse is much more than a simple game, it is your raison d être',
            details: ['Made in France', 'Designed by Liz Stirling', 'Dimensions: L 39 x H 114 cm', 'Price : 1,400 CAD'],
            variants: [
                { id: 2234, color: '#93202C', image: 'images/Hermes_hobby1.png', quantity: 64 },
                { id: 2235, color: '#344B6B', image: 'images/Hermes_hobby2.png', quantity: 16 },

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