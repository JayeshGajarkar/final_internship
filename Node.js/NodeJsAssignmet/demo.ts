function retryPromise(delay: number, retries: number = 3): Promise<string> {
    return new Promise((resolve, reject) => {
        function attempt() {
            setTimeout(() => {
                if (Math.random() >= 0.7) {  //use random function to simulate the failure
                    resolve("Success");
                } else {
                    if (retries > 0) {
                        console.log(`Retrying... attempts left: ${retries}`);
                        retries--;
                        attempt();  //retry function call if retires remains
                    } else {
                        reject("Failed!"); //reject the promise after the all attempt
                    }
                }
            }, delay);  
        }

        attempt();
    });
}

//exmaple usage
retryPromise(1000, 3)
    .then(result => console.log(result))
    .catch(error => console.error(error));