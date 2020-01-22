const Categories = require('../categories/categories.js');
const Products = require('../products/products.js');


describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
    
  });

  it('can post() a new category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

});




describe('Products Model', () => {

    let products;
  
    beforeEach(() => {
      products = new Products();
    });
  
    it('can post() a new product', () => {
      let obj = { price: 'Test product',weight:'50', quantity_in_stock:50};
      return products.create(obj)
        .then(record => {
          Object.keys(obj).forEach(key => {
            expect(record[key]).toEqual(obj[key])
          });
        })
        .catch(e => console.error('ERR', e));
    });
  
    it('can get() a product', () => {
        let obj = { price: 'Test product',weight:'50', quantity_in_stock:50};    
          return products.create(obj)
        .then(record => {
          return products.get(record._id)
            .then(product => {
              Object.keys(obj).forEach(key => {
                expect(product[0][key]).toEqual(obj[key]);
              });
            });
        });
    });
  
  });