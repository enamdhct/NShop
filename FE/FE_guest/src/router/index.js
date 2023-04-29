import { createWebHistory, createRouter } from "vue-router";
import ProductSport from "@/views/ProductSport.vue";
import Promotion from "@/views/Promotion.vue";
import About from "@/views/About.vue";
import login from "../views/Login.vue";
import register from"../views/Register.vue";
const routes = [
    {
    path: "/", name: "home", component: ProductSport
    },
    {
        path: "/:ten", name: "home-client", component: ProductSport, props: true,
    },
    {
        path: "/login", name: "login", component: login
    },
    {
        path: "/register", name: "register", component: register
    },
    {
        path: "/promotion", name: "promotion", component: Promotion
    },
    {
        path: "/promotiondetail/:id",
        name: "promotiondetail",
        component: () => import("@/views/PromotionDetail.vue"),
        props: true
    },
    {
        path: "/about", name: "about", component: About
    },
    {
        path: "/contact", name: "contact", component: () => import("@/views/ContactForm.vue"),
    },
    {
        path: "/contactUser", name: "contactUser", component: () => import("@/views/ContactUser.vue"),
    },
    {
        path: "/productdetail/:id",
        name: "productdetail",
        component: () => import("@/views/ProductDetail.vue"),
        props: true
    },
    // {
    //     path: "/about", name: "about", component: About
    // },
    // {
    //     path: "/Detail",
    //     name: "Detail",
    //     component: () => import("@/views/ProductDetail.vue"),
    //     props: true
    // },
    {
        path: "/manager/",
        name: "manager",
        component: () => import("@/views/Admin.vue"),
        props:true,
        children: [
            {
                path: "/manager/productmanager",
                name: "productmanager",
                component: () => import("@/views/ProductManager.vue"),
            },
            {
                path: "/manager/usermanager",
                name: "accountmanager",
                component: () => import("@/views/UserManager.vue"),
            },
            {
                path: "/manager/ordertmanager",
                name: "ordermanager",
                component: () => import("@/views/OrderManager.vue"),
            },

            {
                path: "/manager/promotionmanager",
                name: "promotionmanager",
                component: () => import("@/views/PromotionManager.vue"),
            },
            {
                path: "/manager/contactnmanager",
                name: "contactnmanager",
                component: () => import("@/views/ContactManager.vue"),
            },
            

    {
        path: "/manager/statistical",
        name: "statistical",
        component: () => import("@/views/Statistical.vue"),
    },
    {
        path: "/statistical",
        name: "statisticalview",
        component: () => import("@/views/Statistical.vue"),
    },
    {
        path: "/manager/OrderCheckAdmin/",
        name: "OrderCheck",
        component: () => import("@/views/OrderCheck.vue"),
    }
        ]
   

},
    {
        path: "/usermanager",
        name: "usermanager",
        component: () => import("@/views/User.vue"),
        props: true
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    // {
    //     path: "/products/:id",
    //     name: "product.edit",
    //     component: () => import("@/views/ProductEdit.vue"),
    //     props: true // Truyền các biến trong $route.params vào làm props
    // },
    {
        path: "/productclub",
        name: "productclub",
        component: () => import("@/views/ClubProduct.vue"),
    },
    {
        path: "/productteam",
        name: "productteam",
        component: () => import("@/views/TeamProduct.vue"),
    },
    {
        path: "/editUser/:id",
        name: "EditUser",
        component: () => import("@/views/UserFormEdit.vue"),
        props: true
    },
    {
        path: "/CreateUser/",
        name: "AddUser",
        component: () => import("@/views/UserFormAdd.vue"),
    },
    {
        path: "/CreateOrder",
        name: "AddCart",
        component: () => import("@/views/OrderFormAdd.vue"),
    },
    {
        path: "/CreateOrder/:name/:price/:amount/:proid",
        name: "AddOrder",
        component: () => import("@/views/OrderFormAdd.vue"),
        props: true,
    },
    {
        path: "/EditOrder/:id",
        name: "EditCart",
        component: () => import("@/views/OrderFormEdit.vue"),
        props: true,
    },
    {
        path: "/editPromotion/:id",
        name: "EditPromotion",
        component: () => import("@/views/PromotionFormEdit.vue"),
        props: true
    },
    {
        path: "/CreatePromotion/",
        name: "AddPromotion",
        component: () => import("@/views/PromotionFormAdd.vue"),
    },
    {
        path: "/editProduct/:id",
        name: "EditProduct",
        component: () => import("@/views/ProductFormEdit.vue"),
        props: true
    },
    {
        path: "/CreateProduct/",
        name: "AddProduct",
        component: () => import("@/views/ProductFormAdd.vue"),
    },
    {
        path: "/CartUser/",
        name: "CartUser",
        component: () => import("@/views/Cart.vue"),
    },
    {
        path: "/CartUserManager/",
        name: "CartUserState",
        component: () => import("@/views/CartUserState.vue"),
    },
    {
        path: "/CartUser/Order/:id",
        name: "UserOrder",
        component: () => import("@/views/OrderFormEdit.vue"),
        props: true
    },
    // {
    //     path: "/hihi",
    //     name: "UserOrder",
    //     component: () => import("@/views/hihi.vue"),
    // },


];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: 'vue-active-link'
});
export default router;