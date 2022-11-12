import { app } from "./controller/app";
import { vehicleRouter } from "./router/VehicleRouter";
import { userRouter } from "./router/UserRouter";


app.use("/user", userRouter)
app.use("/vehicle", vehicleRouter)
