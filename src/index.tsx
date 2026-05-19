import { serve } from "bun";
import index from "./index.html";
import cv from "./cv.html";

const server = serve({
  routes: {
    "/cv": cv,
    "/*": index,
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});
