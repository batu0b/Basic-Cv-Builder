import React from "react";
import Router from "./router";
import { AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <AnimatePresence>
      <Router />
    </AnimatePresence>
  );
}
