import { Router } from "express";
import * as controller from "./controller.js";
import Auth from "./Auth.js";

const router=Router();


import multer from "multer";
const storage = multer.diskStorage({
    destination: "./images",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });



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

router.route('/addProduct').post(upload.array( 'images'), controller.AddProducts);
router.route("/image/:filename").get(controller.SetPath)



export default router;