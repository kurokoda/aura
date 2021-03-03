// Globals
import React from "react";

// Components
import { Home } from "Internal/pages/Home";
import { ConnectedGlobalRecords } from "views/pages/GlobalRecords";
import { Timer } from "views/pages/Timer";

// Sub-component
function NotFound() {
  return <span>404</span>;
}

// Routes
const routes = [
  {
    exact: true,
    component: Home,
    path: "/",
  },
  {
    component: ConnectedGlobalRecords,
    path: "/records",
  },
  {
    component: Timer,
    path: "/timer",
  },
  {
    component: NotFound,
  },
];

export { routes };
