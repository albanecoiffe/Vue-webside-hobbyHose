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
            <br><br><br><br>

            <!-- d'ajout accessoires -->


            <div class="product-display container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img :src="image2" :key="image2" class="img-fluid" alt="product image">
                    </div>
                    <div class="col-12 col-md-6">
                        <h1>{{ title2 }}</h1>
                        <p>{{ description }}</p>
                        <p v-if="inStock">In Stock</p>
                        <p v-else>Out of Stock</p>
                        <p>Shipping: {{ shipping }}</p>
                        <ul>
                            <li v-for="detail in details2" :key="detail">{{ detail }}</li>
                        </ul>
                        <div class="color-circle-container">
                            <div
                                v-for="(variants2, index) in variants2"
                                :key="variants2.id"
                                @mouseover="updateVariant2(index)"
                                class="color-circle"
                                :style="{ backgroundColor: variants2.color }">
                            </div>
                        </div>
                        <button
                            class="button"
                            :class="{ disabledButton: !inStock }"
                            :disabled="!inStock"
                            @click="addToCart2">
                            Add to Cart
                        </button>


                    </div>
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

            product2: 'Hermes & Hobby horse',
            brand2: 'Ur Life With Hobby Horse',
            selectedVariant2: 0,
            description2: 'When the luxa associates with games, you can only fall in love. Certainly, the price is expensive, but remember, the brand Hermes is a brand of collection in the world, and the hobby horse is much more than a simple game, it is your raison d être',
            details2: ['Made in France', 'Designed by Liz Stirling', 'Dimensions: L 39 x H 114 cm', 'Price : 1,400 CAD'],

            variants2: [
                { id: 2234, color: '#93202C', image2: 'images/Hermes_hobby4.webp', quantity2: 64 },
                { id: 2235, color: '#344B6B', image2: 'images/Hermes_hobby3.webp', quantity2: 64 },


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
        },

        addToCart2() {
            this.$emit('add-to-cart', this.variants2[this.selectedVariant2].id) //Communicating Events
        },
        updateVariant2(index) {
            this.selectedVariant2 = index
        },
        addReview(review) {
            this.reviews.push(review)
        },
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

        title2() {
            return this.brand2 + ' ' + this.product2
        },
        image2() {
            return this.variants2[this.selectedVariant2].image2
        },//Computed Properties
        inStock2() {
            return this.variants2[this.selectedVariant2].quantity2
        },


        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 15
        },
    }
})
