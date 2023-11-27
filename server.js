import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};