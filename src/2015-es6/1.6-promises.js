const oneFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            reject('Error');
        }
        resolve('Hey!');
    })
}

oneFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));