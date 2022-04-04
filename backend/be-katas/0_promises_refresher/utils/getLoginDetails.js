module.exports = function getLoginDetails() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve({
                username: 'b1gb4db4tm4n1',
                password: 's3edcft6'
            });
        }, Math.random * 500);
    });
};