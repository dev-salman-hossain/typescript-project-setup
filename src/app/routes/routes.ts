import { RoomRoutes } from "../modules/room/room.route.js";
import { HotelRoutes } from "../modules/hotel/hotel.route.js";
import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route.js";
import { ProductRoutes } from "../modules/product/product.route.js";
import { OrderRoutes } from "../modules/order/order.route.js";

const router = Router();

const moduleRoutes = [
  {
    path: "/rooms",
    route: RoomRoutes,
  },
  {
    path: "/hotels",
    route: HotelRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/products",
    route: ProductRoutes,
  },
  {
    path: "/orders",
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
