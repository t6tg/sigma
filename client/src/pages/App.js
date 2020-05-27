import React from "react";
import Header from "../components/Header";
export default function App({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="flex justify-start">{children}</div>
      </div>
    </div>
  );
}
