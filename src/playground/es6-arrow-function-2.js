/*jshint esversion: 6*/
const add = (a, b) => {
    return a + b;
};

//console.log(add(55, 1));

const user = {
    name: 'Max',
    cities: ['Boston', 'Nashville', 'Austin'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
        	return this.name + ' has lived in ' + city;
        });
        return cityMessages;
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

//console.log(user.printPlacesLived());

const multiplier = {
	numbers: [2,4,6,8],
	multiplyBy: 2,
	multiply() {
		const result = this.numbers.map((origNum) => origNum * this.multiplyBy);
		return result;
	}
};


console.log(multiplier.multiply());