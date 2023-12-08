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
            <br><br><br><br>

            <!-- d'ajout accessoires -->

            <div class="product-display container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img :src="image3" :key="image3" class="img-fluid" alt="product image">
                    </div>
                    <div class="col-12 col-md-6">
                        <h1>{{ title3 }}</h1>
                        <p>{{ description }}</p>
                        <p v-if="inStock">In Stock</p>
                        <p v-else>Out of Stock</p>
                        <p>Shipping: {{ shipping }}</p>
                        <ul>
                            <li v-for="detail in details3" :key="detail">{{ detail }}</li>
                        </ul>
                        <div class="color-circle-container">
                            <div
                                v-for="(variants3, index) in variants2"
                                :key="variants3.id"
                                @mouseover="updateVariant3(index)"
                                class="color-circle"
                                :style="{ backgroundColor: variants3.color }">
                            </div>
                        </div>
                        <button
                            class="button"
                            :class="{ disabledButton: !inStock }"
                            :disabled="!inStock"
                            @click="addToCart3">
                            Add to Cart
                        </button>


                    </div>
                </div>
            </div>
            <br><br><br><br>

            <!-- d'ajout accessoires -->

            <div class="product-display container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img :src="image4" :key="image4" class="img-fluid" alt="product image">
                    </div>
                    <div class="col-12 col-md-6">
                        <h1>{{ title4 }}</h1>
                        <p>{{ description }}</p>
                        <p v-if="inStock">In Stock</p>
                        <p v-else>Out of Stock</p>
                        <p>Shipping: {{ shipping }}</p>
                        <ul>
                            <li v-for="detail in details4" :key="detail">{{ detail }}</li>
                        </ul>
                        <div class="color-circle-container">
                            <div
                                v-for="(variants4, index) in variants4"
                                :key="variants4.id"
                                @mouseover="updateVariant4(index)"
                                class="color-circle"
                                :style="{ backgroundColor: variants4.color }">
                            </div>
                        </div>
                        <button
                            class="button"
                            :class="{ disabledButton: !inStock }"
                            :disabled="!inStock"
                            @click="addToCart4">
                            Add to Cart
                        </button>


                    </div>
                </div>
            </div>
            <br><br><br><br>

            <!-- d'ajout accessoires -->

            <div class="product-display container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img :src="image5" :key="image5" class="img-fluid" alt="product image">
                    </div>
                    <div class="col-12 col-md-6">
                        <h1>{{ title5 }}</h1>
                        <p>{{ description }}</p>
                        <p v-if="inStock">In Stock</p>
                        <p v-else>Out of Stock</p>
                        <p>Shipping: {{ shipping }}</p>
                        <ul>
                            <li v-for="detail in details5" :key="detail">{{ detail }}</li>
                        </ul>
                        <div class="color-circle-container">
                            <div
                                v-for="(variants5, index) in variants5"
                                :key="variants5.id"
                                @mouseover="updateVariant5(index)"
                                class="color-circle"
                                :style="{ backgroundColor: variants5.color }">
                            </div>
                        </div>
                        <button
                            class="button"
                            :class="{ disabledButton: !inStock }"
                            :disabled="!inStock"
                            @click="addToCart5">
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
            product: 'Hobby horse accessories',
            brand: 'Jumping : ',

            selectedVariant: 0,
            description: 'You cannot buy Hobby Horse without the associated accessories!',
            details: ['Made in France', 'Designed by Olivier Robertodo', 'Hauteur: 1 metre', `Price : 150 CAD`],
            variants: [
                { id: 2234, color: '#8ACDD7', image: 'images/jump_ocean.webp', quantity: 64 },
                { id: 2235, color: '#B31312', image: 'images/jump_fire.webp', quantity: 16 },
                { id: 2236, color: '#D0D4CA', image: 'images/jump_wall.webp', quantity: 0 },
                { id: 2237, color: '#A7D397', image: 'images/jump_grass.webp', quantity: 1 },

            ],

            product2: 'Hobby horse accessories',
            brand2: ' Halter : ',
            selectedVariant2: 0,
            description2: 'You cannot buy Hobby Horse without the associated accessories!',
            details2: ['Made in France', 'Designed by Gerald Goriogo', 'Taille : Unique', `Price : 15 CAD`],

            variants2: [
                { id: 2234, color: '#e57386', image2: 'images/licol_rose.jpeg', quantity2: 64 },
                { id: 2235, color: '#317AC1', image2: 'images/licol_bleu.jpeg', quantity2: 64 },
                { id: 2236, color: '#E1A624', image2: 'images/licol_jaune.jpeg', quantity2: 1 },

            ],

            product3: 'Hobby horse accessories',
            brand3: ' Show ribbon : ',
            selectedVariant3: 0,
            description3: 'You cannot buy Hobby Horse without the associated accessories!',
            details3: ['Made in France', 'Designed by Farida Briochio', 'Taille : Unique', `Price : 4 CAD`],

            variants3: [
                { id: 2234, color: '#e57386', image3: 'images/flot_rose.jpeg', quantity2: 0 },
                { id: 2235, color: '#317AC1', image3: 'images/flot_bleu.jpeg', quantity2: 64 },
                { id: 2236, color: '#E1A624', image3: 'images/flot_jaune.jpeg', quantity2: 1 },

            ],

            product4: 'Hobby horse accessories',
            brand4: ' EAR BONNETS : ',
            selectedVariant4: 0,
            description4: 'You cannot buy Hobby Horse without the associated accessories!',
            details4: ['Made in France', 'Designed by Romane Briochio', 'Taille : Unique', `Price : 4 CAD`],

            variants4: [
                { id: 2234, color: '#e57386', image4: 'images/bonnet_rose.webp', quantity4: 1 },
                { id: 2235, color: '#317AC1', image4: 'images/bonnet_bleu.jpeg', quantity4: 64 },
                { id: 2235, color: '#F7F6CF', image4: 'images/bonnet_creme.webp', quantity4: 64 },


            ],

            product5: 'Hobby horse accessories',
            brand5: ' Protective Suit Lycra : ',
            selectedVariant5: 0,
            description5: 'You cannot buy Hobby Horse without the associated accessories!',
            details5: ['Made in France', 'Designed by Gregoire Rominville', 'Taille : Unique', `Price : 7 CAD`],

            variants5: [
                { id: 2234, color: '#e57386', image5: 'images/blanket_rose.webp', quantity5: 1 },
                { id: 2235, color: '#1E0F1C', image5: 'images/blanket_noir.webp', quantity5: 64 },



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

        addToCart3() {
            this.$emit('add-to-cart', this.variants3[this.selectedVariant3].id) //Communicating Events
        },
        updateVariant3(index) {
            this.selectedVariant3 = index
        },
        addReview(review) {
            this.reviews.push(review)
        },

        addToCart4() {
            this.$emit('add-to-cart', this.variants4[this.selectedVariant4].id) //Communicating Events
        },
        updateVariant4(index) {
            this.selectedVariant4 = index
        },
        addReview(review) {
            this.reviews.push(review)
        },

        addToCart5() {
            this.$emit('add-to-cart', this.variants5[this.selectedVariant5].id) //Communicating Events
        },
        updateVariant5(index) {
            this.selectedVariant5 = index
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
        },

        title2() {
            return this.brand2 + ' ' + this.product2
        },
        image2() {
            return this.variants2[this.selectedVariant2].image2
        },//Computed Properties
        inStock2() {
            return this.variants2[this.selectedVariant2].quantity2
        },

        title3() {
            return this.brand3 + ' ' + this.product3
        },
        image3() {
            return this.variants3[this.selectedVariant3].image3
        },//Computed Properties
        inStock3() {
            return this.variants3[this.selectedVariant3].quantity3
        },

        title4() {
            return this.brand4 + ' ' + this.product4
        },
        image4() {
            return this.variants4[this.selectedVariant4].image4
        },//Computed Properties
        inStock4() {
            return this.variants4[this.selectedVariant4].quantity4
        },

        title5() {
            return this.brand5 + ' ' + this.product5
        },
        image5() {
            return this.variants5[this.selectedVariant5].image5
        },//Computed Properties
        inStock5() {
            return this.variants5[this.selectedVariant5].quantity5
        },
    }
})

