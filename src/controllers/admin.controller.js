const { getAll , getOne, create, edit, deleteOne } = require('../models/product.model');

module.exports = {
  admin: async (req, res) => {
    const data = await getAll();

    res.render('../views/admin/admin.ejs', {
      title: 'ADMIN',
      data
    });
},
  createView: (req, res) => res.render('../views/admin/create-item.ejs', {title: 'CREAR ITEM'}),
  createItem: async (req, res) => {

    const product_DB = {
      product_name: req.body.nombre,
      product_description: req.body.descripcion,
      price: Number(req.body.precio),
      stock: Number(req.body.stock),
      discount: Number(req.body.descuento),
      sku: req.body.sku,
      dues: req.body.cuotas,
      image_front: '/img/products/' + req.files[0].filename,
      image_back: '/img/products/' + req.files[1].filename,
      category_id: Number(req.body.categoria),
      licence_id: Number(req.body.licencia)
    };

    await create([Object.values(product_DB)]);

    res.redirect('/admin');
  },
  editView: async (req, res) => {
    const { id } = req.params;
    const [product] = await getOne({product_id: id});

    res.render('../views/admin/edit-item.ejs', {
      title: 'EDITAR ITEM',
      product
    });
  },
  editItem: async (req, res) => {
    const { id } = req.params;
    const haveImages = req.files.length !== 0;

    const product_DB = haveImages
      ? {
        product_name: req.body.nombre,
        product_description: req.body.descripcion,
        price: Number(req.body.precio),
        stock: Number(req.body.stock),
        discount: Number(req.body.descuento),
        sku: req.body.sku,
        dues: req.body.cuotas,
        image_front: '/img/products/' + req.files[0].filename,
        image_back: '/img/products/' + req.files[1].filename,
        category_id: Number(req.body.categoria),
        licence_id: Number(req.body.licencia)
      }
      : {
        product_name: req.body.nombre,
        product_description: req.body.descripcion,
        price: Number(req.body.precio),
        stock: Number(req.body.stock),
        discount: Number(req.body.descuento),
        sku: req.body.sku,
        dues: req.body.cuotas,
        category_id: Number(req.body.categoria),
        licence_id: Number(req.body.licencia)
      };

    await edit(product_DB, {product_id: id});

    res.redirect('/admin');
},
  deleteItem: async (req, res) => {
    const { id } = req.params;

    await deleteOne({product_id: id});

    res.redirect('/admin')
  },
};
