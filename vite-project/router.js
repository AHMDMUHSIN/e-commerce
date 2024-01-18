import { Router } from "express";
import * as controller from "./controller.js";
import Auth from "./Auth.js";

const router=Router();




/////////ADMIN//////

router.route("/addadmin").post(controller.addAdmin);
router.route("/adminlogin").post(controller.adminLogin);
router.route("/adminusername/:phone").get(controller.forgotAdminusername);
router.route("/adminpassword/:phone").patch(controller.forgotAdminpassword);
router.route("/fetchadminusername").post(Auth,controller.fetchAdminusername);

///////////CATEGORY/////////


router.route("/addcategory").post(controller.addCategory);
router.route("/getcategory").get(controller.getCategory);
router.route("/getcategorydetails/:id").post(controller.getcategoryfulldata);
router.route("/editcategorydetails/:id").patch(controller.editCategorydetails);
router.route("/deletecategory/:id").delete(controller.deleteCategory);


////////////////PRODUCTS/////////


router.route("/addproduct").post(controller.AddProducts);
router.route("/getCatWiseProducts/:categoryname").get(controller.getCategoryWisedProduct);
router.route("/getProduct/:id").get(controller.getProduct);
router.route("/editProdect/:id").patch(controller.editProdect);
router.route("/deleteproduct/:id").delete(controller.deleteProduct);
router.route("/getAllProducts").get(controller.getAllProducts);

////////////CUSTOMER///////////

router.route("/addcustomer").post(controller.addCustomer);
router.route("/userlogin").post(controller.userLogin);
router.route("/fetchcustomername").post(Auth,controller.fetchCustomername);


/////////////CART/////

router.route("/addToCart").post(controller.AddToCart);
router.route("/getCartProduct/:id").get(controller.getCartProduct);
router.route("/delCartProduct/:id").delete(controller.delCartProduct);
router.route("/delAlltProduct/:id").delete(controller.deleteAllProducts);
router.route("/placeOrder/:id").post(controller.placeOrder);

/////////////wishlist//////////

router.route("/addToWhishList").post(controller.AddToWishList);
router.route("/getWishlistProduct/:id").get(controller.getWishlistProduct);
router.route("/delWishListProduct/:id").delete(controller.delwishListProduct);

//////////////quantity//////////////

router.route("/updateCartItem/:prodId").patch(controller.editQuantity);



export default router;