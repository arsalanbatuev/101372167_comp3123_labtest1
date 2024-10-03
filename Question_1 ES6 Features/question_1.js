function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {

        if (Array.isArray(array)) {
            let wordsOnly = [];
            for (let item of array) {
                if (item.toLowerCase) {  
                    wordsOnly.push(item.toLowerCase());  
                }
            }
            resolve(wordsOnly);  
        } else {
            reject('Not valid array');  
        }

    });
}

const mixedItems = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedItems)
    .then(result => console.log(result))
    .catch(error => console.log(error));
