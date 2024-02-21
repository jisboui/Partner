import { createRouter, createWebHistory } from "vue-router";
import Landing from "../views/dashboards/Landing.vue";
import Default from "../views/dashboards/Default.vue";
import Automotive from "../views/dashboards/Automotive.vue";
import SmartHome from "../views/dashboards/SmartHome.vue";
import VRDefault from "../views/dashboards/vr/VRDefault.vue";
import VRInfo from "../views/dashboards/vr/VRInfo.vue";
import CRM from "../views/dashboards/CRM.vue";
import Overview from "../views/pages/profile/Overview.vue";
import Teams from "../views/pages/profile/Teams.vue";
import Projects from "../views/pages/profile/Projects.vue";
import General from "../views/pages/projects/General.vue";
import CampaignHistory from "../views/Campaign/CampaignHistory.vue";
import NewProject from "../views/pages/projects/NewProject.vue";
import Pricing from "../views/pages/Pricing.vue";
import RTL from "../views/pages/Rtl.vue";
import Charts from "../views/pages/Charts.vue";
import SweetAlerts from "../views/pages/SweetAlerts.vue";
import Notifications from "../views/pages/Notifications.vue";
import Kanban from "../views/applications/Kanban.vue";
import Wizard from "../views/applications/wizard/Wizard.vue";
import DataTables from "../views/applications/DataTables.vue";
import Calendar from "../views/applications/Calendar.vue";
import Analytics from "../views/applications/analytics/Analytics.vue";
import EcommerceOverview from "../views/ecommerce/overview/Overview.vue";
import NewProduct from "../views/ecommerce/products/NewProduct.vue";
import EditProduct from "../views/ecommerce/EditProduct.vue";
import ProductPage from "../views/ecommerce/ProductPage.vue";
/* import ProductsList from "../views/ecommerce/ProductsList.vue"; */
import OrderDetails from "../views/ecommerce/Orders/OrderDetails";
import OrderList from "../views/ecommerce/Orders/OrderList";
import Referral from "../views/ecommerce/Referral";
import Reports from "../views/pages/Users/Reports.vue";
import NewUser from "../views/pages/Users/NewUser.vue";
import Settings from "../views/pages/Account/Settings.vue";
import Billing from "../views/pages/Account/Billing.vue";
import Invoice from "../views/pages/Account/Invoice.vue";
import Security from "../views/pages/Account/Security.vue";
import Widgets from "../views/pages/Widgets.vue";
import Basic from "../views/auth/signin/Basic.vue";
import Cover from "../views/auth/signin/Cover.vue";
import Illustration from "../views/auth/signin/Illustration.vue";
import ResetBasic from "../views/auth/reset/Basic.vue";
import ResetCover from "../views/auth/reset/Cover.vue";
import ResetIllustration from "../views/auth/reset/Illustration.vue";
import VerificationBasic from "../views/auth/verification/Basic.vue";
import VerificationCover from "../views/auth/verification/Cover.vue";
import VerificationIllustration from "../views/auth/verification/Illustration.vue";
import SignupBasic from "../views/auth/signup/Basic.vue";
import SignupCover from "../views/auth/signup/Cover.vue";
import SignupIllustration from "../views/auth/signup/Illustration.vue";
import Error404 from "../views/auth/error/Error404.vue";
import Error500 from "../views/auth/error/Error500.vue";
import lockBasic from "../views/auth/lock/Basic.vue";
import lockCover from "../views/auth/lock/Cover.vue";
import lockIllustration from "../views/auth/lock/Illustration.vue";
import AddCampaign from "../views/Campaign/AddCampaign.vue";
import ManageProfil from "../views/ManageProfil/ManageProfil.vue";
import ProductList from "../views/Produits/ProductList.vue";
import NewProd from "../views/Produits/NewProd.vue";
import EditProd from "../views/Produits/EditProd.vue";
import NewAd from "../views/EspaceAds/NewAd.vue";
import BibAds from "../views/EspaceAds/BibAds.vue";
import Sondage from "../views/Survey/Sondage.vue";
import DiscountVoucher from "../views/DiscountVoucher/DiscountVoucher.vue";
import dvDetails from "../views/DiscountVoucher/dvDetails.vue";
import dvValidation from "../views/DiscountVoucher/dvValidation.vue";
import editCampaign from "../views/Campaign/editCampaign.vue";
import dvList from "../views/DiscountVoucher/dvList.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboards/dashboard-default",
 
  },
  {
    path: "/dashboards/dashboard-default",
    name: "Default",
    component: Default,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/dashboards/landing",
    name: "Landing",
    component: Landing,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/dashboards/automotive",
    name: "Automotive",
    component: Automotive,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/dashboards/smart-home",
    name: "Smart Home",
    component: SmartHome,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/dashboards/vr/vr-default",
    name: "VR Default",
    component: VRDefault,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/dashboards/vr/vr-info",
    name: "VR Info",
    component: VRInfo,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/dashboards/crm",
    name: "CRM",
    component: CRM,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/pages/profile/overview",
    name: "Profile Overview",
    component: Overview,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/pages/profile/teams",
    name: "Teams",
    component: Teams,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/pages/profile/projects",
    name: "All Projects",
    component: Projects,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/pages/projects/general",
    name: "General",
    component: General,
  meta: {
    requiresAuth: true
  }
  },
  
  {
    path: "/pages/projects/new-project",
    name: "New Project",
    component: NewProject,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/pages/pricing-page",
    name: "Pricing Page",
    component: Pricing,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/pages/rtl-page",
    name: "RTL",
    component: RTL,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/pages/charts",
    name: "Charts",
    component: Charts,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/pages/widgets",
    name: "Widgets",
    component: Widgets,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/pages/sweet-alerts",
    name: "Sweet Alerts",
    component: SweetAlerts,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/pages/notifications",
    name: "Notifications",
    component: Notifications,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/applications/kanban",
    name: "Kanban",
    component: Kanban,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/applications/wizard",
    name: "Wizard",
    component: Wizard,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/applications/data-tables",
    name: "Data Tables",
    component: DataTables,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/applications/calendar",
    name: "Calendar",
    component: Calendar,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/applications/analytics",
    name: "Analytics",
    component: Analytics,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/ecommerce/overview",
    name: "Overview",
    component: EcommerceOverview,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/ecommerce/products/new-product",
    name: "New Product",
    component: NewProduct,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/ecommerce/products/edit-product",
    name: "Edit Product",
    component: EditProduct,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/ecommerce/products/product-page",
    name: "Product Page",
    component: ProductPage,
  meta: {
    requiresAuth: true
  }
  },
 /*  {
    path: "/ecommerce/products/products-list",
    name: "Products List",
    component: ProductsList,
  meta: {
    requiresAuth: true
  }
  }, */
  {
    path: "/ecommerce/Orders/order-details",
    name: "Order Details",
    component: OrderDetails,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/ecommerce/Orders/order-list",
    name: "Order List",
    component: OrderList,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/ecommerce/referral",
    name: "Referral",
    component: Referral,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/pages/users/reports",
    name: "Reports",
    component: Reports,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/pages/users/new-user",
    name: "New User",
    component: NewUser,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/pages/account/settings",
    name: "Settings",
    component: Settings,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/pages/account/billing",
    name: "Billing",
    component: Billing,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/pages/account/invoice",
    name: "Invoice",
    component: Invoice,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/pages/account/Security",
    name: "Security",
    component: Security,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/authentication/signin/basic",
    name: "Signin Basic",
    component: Basic,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/authentication/signin/cover",
    name: "Signin Cover",
    component: Cover,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/authentication/signin/illustration",
    name: "Signin Illustration",
    component: Illustration,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/authentication/reset/basic",
    name: "Reset Basic",
    component: ResetBasic,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/authentication/reset/cover",
    name: "Reset Cover",
    component: ResetCover,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/authentication/reset/illustration",
    name: "Reset Illustration",
    component: ResetIllustration,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/authentication/lock/basic",
    name: "Lock Basic",
    component: lockBasic,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/authentication/lock/cover",
    name: "Lock Cover",
    component: lockCover,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/authentication/lock/illustration",
    name: "Lock Illustration",
    component: lockIllustration,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/authentication/verification/basic",
    name: "Verification Basic",
    component: VerificationBasic,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/authentication/verification/cover",
    name: "Verification Cover",
    component: VerificationCover,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/authentication/verification/illustration",
    name: "Verification Illustration",
    component: VerificationIllustration,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/authentication/signup/basic",
    name: "Signup Basic",
    component: SignupBasic,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/authentication/signup/cover",
    name: "Signup Cover",
    component: SignupCover,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/authentication/signup/illustration",
    name: "Signup Illustration",
    component: SignupIllustration,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/authentication/error/error404",
    name: "Error Error404",
    component: Error404,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/authentication/error/error500",
    name: "Error Error500",
    component: Error500,
  meta: {
    requiresAuth: true
  }
  },
  /** route de company */
  {
    path: "/campaign/add-campaign",
    name: "AddCampaign", 
    component: AddCampaign,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/campaign/campaign-history",
    name: "CampaignHistory", 
    component: CampaignHistory,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/manageprofil/manage-profil",
    name: "ManageProfil", 
    component: ManageProfil,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/produits/product-list",
    name: "ProductList", 
    component: ProductList,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/produits/new-prod",
    name: "NewProd", 
    component: NewProd,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/produits/edit-prod",
    name: "EditProd", 
    component: EditProd,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/espaceads/ajouter-ad",
    name: "NewAd", 
    component: NewAd,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/espaceads/bib-ads",
    name: "BibAds", 
    component: BibAds,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/survey/sondage",
    name: "Sondage", 
    component: Sondage,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/DiscountVoucher/discount-voucher",
    name: "DiscountVoucher", 
    component: DiscountVoucher,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/DiscountVoucher/dv-details",
    name: "dvDetails", 
    component: dvDetails,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/DiscountVoucher/dv-validation",
    name: "dvValidation", 
    component: dvValidation,
  meta: {
    requiresAuth: true
  }
  },
  {
    path: "/campaign/edit-campaign",
    name: "editCampaign", 
    component: editCampaign,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/DiscountVoucher/dv-list",
    name: "dvList", 
    component: dvList,
  meta: {
    requiresAuth: true
  }
  },


];
const isAuthenticated = () => localStorage.getItem("isAuthenticated") === "true";
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
});
router.beforeEach((to, from, next) => {
  // Allow access to "/authentication/signin/illustration" regardless of authentication status
  if (to.path === "/authentication/signin/illustration") {
    next();
  } else if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({ name: "Signin Illustration" });
    } else {
      next();
    }
  } else {
    // Continue to the route
    next();
  }
});
router.addRoute({
  path: "/",
  name: "/",
  redirect: isAuthenticated() ? "/dashboards/dashboard-default" : "/authentication/signin/illustration"
});
export default router;
