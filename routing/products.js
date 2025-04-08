const express = require("express");
const router = express.Router();
const { STATUS_CODE } = require("../constants/statusCode");
const { MENU_LINKS } = require("../constants/navigation");
const productsSlice = require("../store/products"); 


router.get("/add", (_request, response) => {
  response.render("add-product", {
    headTitle: "Shop - Add Product", 
    path: "/products/add",           
    menuLinks: MENU_LINKS,           
    activeLinkPath: "/products/add"  
  });
});


router.post("/add", (request, response) => {
  const { name, description } = request.body;
  const newProduct = { name, description };

  productsSlice.newestProduct = newProduct; 
  productsSlice.products.push(newProduct); 

  response.status(STATUS_CODE.FOUND).redirect("/products/new");
});


router.get("/new", (_request, response) => {
  response.render("product-detail", {
    headTitle: "Shop - New Product",  
    path: "/products/new",            
    menuLinks: MENU_LINKS,            
    activeLinkPath: "/products/new",  
    product: productsSlice.newestProduct 
  });
});

module.exports = router;