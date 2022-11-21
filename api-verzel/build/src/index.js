"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./controller/app");
const VehicleRouter_1 = require("./router/VehicleRouter");
const UserRouter_1 = require("./router/UserRouter");
app_1.app.use("/user", UserRouter_1.userRouter);
app_1.app.use("/vehicle", VehicleRouter_1.vehicleRouter);
//# sourceMappingURL=index.js.map