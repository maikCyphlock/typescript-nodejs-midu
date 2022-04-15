"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DailyServices = __importStar(require("../services/dailyServices"));
const utils_1 = __importDefault(require("../utils/utils"));
/**
 * @swagger
 * api/daily/{id}:
 *  get:
 *      summary: Get Data by Id
 *      description: Use to request an Daily
 *      produces;
 *        - application/json
 *      parameters:
 *        -in: path
 *         name: id
 *      description: ID of Daily
 *
 */
const route = express_1.default.Router();
route.get('/', (_req, res) => {
    res.send(DailyServices.getEntriesWithoutSensitiveInfo());
});
route.get('/:id', (req, res) => {
    const daily = DailyServices.findById(parseInt(req.params.id));
    return (daily != null) ? res.send(daily).status(200) : res.status(404).send({ status: 'not found' });
});
route.post('/', (req, res) => {
    try {
        const NewDailyEntry = (0, utils_1.default)(req.body);
        const AddedDailyEntry = DailyServices.AddDaily(NewDailyEntry);
        res.json(AddedDailyEntry);
    }
    catch (e) {
        res.status(404).send(e.message);
    }
});
exports.default = route;
