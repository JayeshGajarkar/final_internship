function retryPromise(delay, retries = 3) {
    return new Promise((resolve, reject) => {
        function attempt() {
            setTimeout(() => {
                if (Math.random() >= 0.7) {
                    resolve("Success");
                } else {
                    if (retries > 0) {
                        console.log(`Retrying... attempts left: ${retries}`);
                        retries--;
                        attempt();
                    } else {
                        reject("Failed!");
                    }
                }
            }, delay);
        }

        attempt();
    });
}


retryPromise(1000, 3)
    .then(result => console.log(result))
    .catch(error => console.error(error));