import { Router } from "express";
import * as controller from "./controller.js";
import Auth from "./Auth.js";

const router=Router();

router.route("/addadmin").post(controller.addAdmin);
router.route("/adminlogin").post(controller.adminLogin);
router.route("/adminusername/:phone").get(controller.forgotAdminusername);
router.route("/adminpassword/:phone").patch(controller.forgotAdminpassword);
router.route("/fetchadminusername").post(Auth,controller.fetchAdminusername);


router.route("/addcategory").post(controller.addCategory);
router.route("/getcategory").get(controller.getCategory);
router.route("/getcategorydetails/:id").post(controller.getcategoryfulldata);
router.route("/editcategorydetails/:id").patch(controller.editCategorydetails);
router.route("/deletecategory/:id").delete(controller.deleteCategory);

router.route("/addproduct").post(controller.addProduct);



export default router;