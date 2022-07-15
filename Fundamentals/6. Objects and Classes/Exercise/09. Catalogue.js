
//ДРУГ

function catalogue(input) {
    const catalogue = {};
  
    for (const elem of input) {
      let [name, price] = elem.split(' : ');
      catalogue[name] = price;
    }
  
    const sortedKeys = Object.keys(catalogue)
      .sort((a, b) => a.localeCompare(b));
  
    let previousProduct = '';
  
    for (const product of sortedKeys) {
      if (!product.startsWith(previousProduct[0])) {
        console.log(product[0]);
      }
  
      previousProduct = product;
      console.log(`  ${product}: ${catalogue[product]}`);
    }
  }
  
  catalogue([
    'Apricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15 ',
    'T-Shirt : 10'
  ])








// Another 

 /*  function catalogue(input) {
    let arr = input.slice(0);
    arr.sort((a, b) => a.localeCompare(b));
    let abc = {};
    let char = '';
    let arrey = [];
    for (let el of arr) {
        if (el.charAt(0) !== char) {
            arrey = [];
            char = el.charAt(0);
            abc[char] = arrey;
            arrey.push(el.replace(' : ', ': '))
        } else {
            arrey.push(el.replace(' : ', ': '))
        }
    }
    for (let key of Object.keys(abc)) {
        console.log(key);
        for (let el of abc[key]) {
            console.log(`  ${el}`);
        }
    }
}
  catalogue([
    'Apricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15 ',
    'T-Shirt : 10']) 
    */
