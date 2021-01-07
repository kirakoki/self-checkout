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
   let basket =[];


   const scanItem = scannedBarcode=> {
        return productCatalouge.find(item =>  {
            if(item.barcode == scannedBarcode)
                return true;
        })
   }

    const addToBasket = item => {
        return basket.push(item);
}

    const getTotalPrice = () => {
        return basket.reduce((acc, item) =>{
            return acc + item.price;  
        },0)
}

    const removeItem = item => {
       const index = basket.indexOf(item);
       return basket.splice(index,1);
    }


   module.exports = {
    scanItem,
    addToBasket,
    basket,
    getTotalPrice,
    removeItem
  };