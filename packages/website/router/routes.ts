import { BasicLayout, PageView } from "website/layouts";

const routes = [
  {
    path: "/",
    name: "Home",
    component: BasicLayout,
    redirect: { name: "Command" },
    children: [
      {
        path: "command",
        name: "Command",
        component: PageView,
        props: { hasBackground: true },
        // params: { hasBackground: true },
        redirect: { name: "Facetime" },
        children: [
          {
            path: "facetime",
            name: "Facetime",
            component: () => import("website/pages/command/facetime/index.vue"),
          },
        ],
      },
    ],
  },
];

export default routes;
