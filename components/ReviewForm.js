app.component('review-form', {
    template: `
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-8 col-lg-6 mx-auto"> 
                    <form class="review-form" @submit.prevent="onSubmit">
                        <h3>Leave a review</h3>
                        
                        <div class="mb-3">
                            <label for="name" class="form-label">Name:</label>
                            <input id="name" v-model="name" class="form-control">
                        </div>

                        <div class="mb-3">
                            <label for="review" class="form-label">Review:</label>
                            <textarea id="review" v-model="review" class="form-control"></textarea>
                        </div>

                        <div class="mb-3">
                            <label for="rating" class="form-label">Rating:</label>
                            <select id="rating" v-model.number="rating" class="form-select">
                                <option>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>
                            </select>
                        </div>

                        <button class="btn btn-custom" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === null) {
                alert('Review is incomplete. Please fill out every field.')
                return
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null
        },
    }
})
