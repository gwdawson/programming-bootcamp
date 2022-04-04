module.exports = function downloadPersonalInfo (username, password) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (username !== 'b1gb4db4tm4n1') {
                return reject('Incorrect username');
            }
            if (password !== 'myrobin') {
                return reject('Incorrect Password');
            }
            resolve({
                name: 'Bruce Wayne',
                city: 'Gotham',
                favouriteAnimal: 'Bat',
                likes: ['caves', 'fighting', 'cars'],
                lookingForLove: true,
            });
        }, Math.random() * 500);
    });
};