const { getAll, getOne } = require('../models/product.model');

module.exports = {
  shop: async (req, res) => {
    const data = await getAll();

    res.render('../views/shop/shop.ejs', {
      title: 'SHOP',
      data
    });
  },
  item: async (req, res) => {
    const { id } = req.params;
    const [item] = await getOne({product_id: id});
    const data = await getAll();
    
    res.render('../views/shop/item.ejs', {
      title: 'ITEM',
      item,
      data
    });
  },
  addItem: (req, res) => res.send('Ruta para AGREGAR un nuevo ITEM'),
  cart: (req, res) => res.render('../views/shop/carrito.ejs', {title: 'CARRITO'}),
  addToCart: (req, res) => res.send('Ruta para AGREGAR ITEM al CARRITO'),
};
