document.addEventListener('DOMContentLoaded', function () {

    slowMath.add(6, 2)
        .then((sum) => {
            console.log(`6 and 2 is equal to ${sum}`);
            return slowMath.multiply(sum, 2)
        }).then((product) => {
            console.log(`Multiply by 2 equals to ${product}`);
            return slowMath.divide(product, 4)
        }).then((quotient) => {
            console.log(`Divide by 4 equals to ${quotient}`);
            return slowMath.subtract(quotient, 3)
        }).then((difference) => {
            console.log(`Subtract 3 equals to ${difference}`);
            return slowMath.add(difference, 98)
        }).then((sum) => {
            console.log(`Add 98 equals to ${sum}`);
            return slowMath.remainder(sum, 2)
        }).then((remainder) => {
            console.log(`The remainder by division of 2 is ${remainder}`);
            return slowMath.multiply(remainder, 50)
        }).then((product) => {
            console.log(`Add 50 equals to ${product}`);
            return slowMath.remainder(product, 40)
        }).then((remainder) => {
            console.log(`The remainder by division of 40 is ${remainder}`);
            return slowMath.add(remainder, 32)
        }).then((sum) => {
            console.log(`Add 32 equals to ${sum}`);
            console.log(`The final result is ${sum}!`);
        })

        .catch((err) => {
            console.log('There has been an issue!');
            console.log(err);
        })




})