function cityTaxes(name, population, treasury){

let record = {
    name: name,
    population: population,
    treasury: treasury,
    taxRate: 10,
    collectTaxes() { // това е първа функцията
        this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percentage) { // втора функция за същия обект
        this.population += this.population * percentage / 100;
    },
    applyRecession: function (percentage) {
        this.treasury -= this.treasury * percentage / 100;
    },
};
        return record

}
const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);
