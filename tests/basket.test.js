
const {scanItem, addToBasket, basket, getTotalPrice, removeItem} = require("../basket.js");

const orange = {
    barcode: 789,
    price: 7,
   };
   const pineapple = {
    barcode: 5367,
    price: 80,
   };
   const kiwi = {
    barcode: 765,
    price: 25,
   };
   const apple = {
    barcode: 123,
    price: 5,
   };
   
   const banana = {
    barcode: 456,
    price: 6
   };
  
   const productCatalouge = [apple,banana,orange,pineapple,kiwi];
       
describe("self chekout", () => {

    it("should scan an item using barcode", () => {
       const scannedItem = scanItem(123)
        expect(scannedItem).toEqual(apple);
      });

    it("should add item to basket", () => {
         addToBasket(apple)
         expect(basket).toContain(apple);
       });
    
    it("should show total price of your basket", () => {
        basket.push(kiwi);
        const total = getTotalPrice()
        expect(total).toBe(30);
      });

    it("should remove an item from your basket", () => {  
        removeItem(kiwi);
        expect(basket).not.toContain(kiwi)
      });

    })

 