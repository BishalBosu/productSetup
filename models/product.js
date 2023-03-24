const fs = require('fs');

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        fs.writeFile('obj.txt', ()=>{
            

        })
    }

    static fetchAll() {
        return products;
    }
}