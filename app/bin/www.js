"use strict";

const app = require("../app")
const logger = require("../src/config/logger")
const PORT = process.env.PORT;

app.listen(PORT, () => {
    logger.info(`server started at ${PORT} port`);
});
