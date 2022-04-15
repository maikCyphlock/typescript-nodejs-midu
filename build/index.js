"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const daily_1 = __importDefault(require("./routes/daily"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: '0.0.1',
            title: 'Docu API',
            description: 'API FOR ME',
            contact: {
                name: 'maikol aguilar'
            },
            servers: ['http://localhost:3000']
        }
    },
    baseUrl: '/',
    apis: ['./routes/daily']
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/api/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
app.use('/api/daily', daily_1.default);
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
