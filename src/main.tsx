import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { matchRoutes } from 'react-router-dom';
import { initializeFaro, createReactRouterV6DataOptions, ReactIntegration, getWebInstrumentations, } from '@grafana/faro-react';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

initializeFaro({
  url: 'https://faro-collector-prod-eu-west-2.grafana.net/collect/42c60372b14ffe69335e57b0e564405a',
  app: {
    name: 'Itaca Casa Vacanze ',
    version: '1.0.0',
    environment: 'production'
  },

  instrumentations: [
    // Mandatory, omits default instrumentations otherwise.
    ...getWebInstrumentations(),

    // Tracing package to get end-to-end visibility for HTTP requests.
    new TracingInstrumentation(),

    // React integration for React applications.
    new ReactIntegration({
      // Router instrumentation is handled in App.tsx via withFaroRouterInstrumentation
    }),
  ],
});

createRoot(document.getElementById("root")!).render(<App />);
