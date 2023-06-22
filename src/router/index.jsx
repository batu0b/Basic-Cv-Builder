import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, ResumeFormPage, Template } from "../pages";

export default function Router() {
  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";

      console.log(event);
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/CreateResume" element={<ResumeFormPage />} />
      <Route path="/SelectTemplate" element={<Template />} />
    </Routes>
  );
}
