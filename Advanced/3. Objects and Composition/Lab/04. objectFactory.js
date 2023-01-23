// Another

function factory(library, orders) {
    const resArr = [];

    for (let order of orders) {
        let resObj = {};
        let { template, parts } = order;
        resObj.name = template.name;
        for (let func of parts) {
            resObj[func] = library[func];
        }
        resArr.push(resObj);
    }
    return resArr;
}


const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };


  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  
  const products = factory(library, orders);
  console.log(products);
  