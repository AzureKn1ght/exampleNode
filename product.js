const database = require("./database");

function get_all_products() {
  database.q("select * from products");
}

function get_product_by_id(id) {
  database.q(`
    select * from products
    where id = ${id}
    `);
}

function create_new_product(name, price) {
  database.q(`
    insert into products (name, market_price)
    values ('${name}', '${price}')
    `);
}

function delete_product_by_id(id) {
  database.q(`
    delete from products
    where id = ${id}
    `);
}

function update_price_by_id(id, price) {
  database.q(`
    update products
    set market_price = ${price}
    where id = ${id}
    `);
}

module.exports = {
  get_all_products,
  get_product_by_id,
  create_new_product,
  delete_product_by_id,
  update_price_by_id,
};
