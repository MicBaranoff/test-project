export default {
    data() {
        return {
            requestInProgress: false,
            currentIndex: 0,
            delay: 1,
            elementsToShow: 3,
            remainingElements: [],
        }
    },

    methods: {
        fetchData(array, callback) {
            this.remainingElements = array.slice(this.currentIndex);

            if (this.remainingElements.length === 0) return;

            const elementsToReturn = this.remainingElements.slice(0, this.elementsToShow);
            this.currentIndex += elementsToReturn.length;

            setTimeout(() => {
                callback(elementsToReturn);
            }, this.delay * 1000);
        },

        fetchDataWithPromise(array, showPreloader = true) {
            if (showPreloader) this.requestInProgress = true;

            return new Promise((resolve) => {
                this.fetchData(array, (elements) => {
                    this.requestInProgress = false;
                    resolve(elements);
                });
            });
        }
    },

    computed: {
        isNothingToFetch() {
            return this.remainingElements.length <= this.elementsToShow;
        }
    }
}