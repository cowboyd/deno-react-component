import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Component } from "./component.tsx";

const container = document.getElementById("root");

if (!container) {
  throw new Error(`no dom node for root`);
}

const root = createRoot(container);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}

root.render(<App />);
