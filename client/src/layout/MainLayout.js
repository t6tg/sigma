import React from "react";
import { Navbar, Footer } from "./components";

export default function MainLayout({ children }) {
  const isLogin = true;
  return (
    <div>
      {isLogin && <Navbar />}
      {children}
      <Footer />
    </div>
  );
}
