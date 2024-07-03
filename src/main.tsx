import { TonConnectUIProvider } from "@tonconnect/ui-react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import WebApp from "@twa-dev/sdk";

WebApp.ready();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TonConnectUIProvider
    manifestUrl="https://ton-bot-demo.vercel.app/tonconnect-manifest.json"
    actionsConfiguration={{
      twaReturnUrl: "https://t.me/PacSampleBot",
    }}
  >
    <App />
  </TonConnectUIProvider>
);
