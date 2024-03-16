export default {
    data() {
        return {
            delay: 1,
            requestInProgress: false,
        }
    },
    methods: {
        simulateRequest(data) {
            this.requestInProgress = true;
            return new Promise((resolve, reject) => {
                try {
                    setTimeout(() => {
                        resolve(data);
                        this.requestInProgress = false;
                    }, this.delay * 1000);
                } catch (err) {
                    reject(new Error('Request Error: ' + err));
                    this.requestInProgress = false;
                }
            });
        }
    }
}