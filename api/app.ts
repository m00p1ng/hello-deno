import { Application } from "https://deno.land/x/oak/mod.ts";

import resourcesRouter from "./routes/resources.ts";

const app = new Application();

app.use(resourcesRouter.routes());
app.use(resourcesRouter.allowedMethods());

app.listen({ port: 3000 });
