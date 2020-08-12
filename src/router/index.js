import Vue from "vue";
import VueRouter from "vue-router";
import MegaFundatec from "../components/MegaFundatec.vue";
import Pagamento from "../components/Pagamento.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MegaFundatec",
    component: MegaFundatec,
  },
  {
    path: "/pagamento",
    name: "Pagamento",
    component: Pagamento,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
