"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./controller/app");
const BandRouter_1 = require("./router/BandRouter");
const UserRouter_1 = require("./router/UserRouter");
app_1.app.use("/user", UserRouter_1.userRouter);
app_1.app.use("/vehicle", BandRouter_1.vehicleRouter);
//# sourceMappingURL=index.js.map