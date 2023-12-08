app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        /*html*/
        `<div class="product-display">
            <div class="row">
                <div class="col-12 col-md-6">
                    <img :src="image" class="img-fluid" alt="product image"> <!-- Image responsive -->
                </div>
                <div class="col-12 col-md-6">
                    <h1>{{ title }}</h1>
                    <p>{{ description }}</p>
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>
                    <p>Shipping: {{ shipping }}</p>
                    <ul>
                        <li v-for="detail in details">{{ detail }}</li>
                    </ul>
                <div 
                    v-for="(variant, index) in variants" 
                    :key="variant.id" 
                    @mouseover="updateVariant(index)"
                    class="color-circle"
                    :style="{backgroundColor : variant.color}">
                </div><!--Class & Style Binding-->

                <button 
                    class="button" 
                    :class="{ disabledButton: !inStock }"
                    :disabled="!inStock"
                    v-on:click="addToCart">
                    Add to Cart
                </button><!--Event Handling--><!--Class & Style Binding-->

            </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list><!--Forms & v-model-->
        <review-form @review-submitted="addReview"></review-form>
    </div>`,
    data: function () {
        return {
            cart: 0,
            product: 'Hobby horse accessories',
            brand: 'Ur Life With Hobby Horse : ',
            selectedVariant: 0,
            description: 'You cannot buy Hobby Horse without the associated accessories!',
            details: ['Made in France', 'Designed by Olivier Robertodo', 'Hauteur: 1 metre', `Price : 150 CAD`],
            variants: [
                { id: 2234, color: '#8ACDD7', image: 'images/jump_ocean.webp', quantity: 64 },
                { id: 2235, color: '#B31312', image: 'images/jump_fire.webp', quantity: 16 },
                { id: 2236, color: '#D0D4CA', image: 'images/jump_wall.webp', quantity: 0 },
                { id: 2237, color: '#A7D397', image: 'images/jump_grass.webp', quantity: 1 },

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