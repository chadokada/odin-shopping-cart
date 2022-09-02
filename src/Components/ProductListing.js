const products = { //Put this in a separate file 
  hats : [
    {name: 'Ribbed Beanie', price: 20.50, source: 'ribbed_beanie.jpg', type:'hats'},
    {name: 'Bowler', price: 25.00, source: 'bowler.jpg', type:'hats'},
    {name: 'Pink Princess Bowler', price: 35.00, source: 'pink_bowler.png', type:'hats'},
  ],
  bags : [
    {name: 'Tote Bag', price: 25.00, source: 'crochet_tote.jpg', type:'bags'},
    {name: 'Grocery Bag', price: 30.00, source: 'grocery_bag.png', type:'bags'},
    {name: 'Hand Bag', price: 35.00,source: 'green_purse.png', type:'bags'},
    {name: 'Citrus Bag', price: 45.00,source: 'citrus_bag.png', type:'bags'},
  ]
}

export {products};