import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Add Google Fonts imports in the head
// const linkPoppins = document.createElement("link");
// linkPoppins.rel = "stylesheet";
// linkPoppins.href =
//   "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto+Mono:wght@400;500;600&display=swap";

// const linkGabarito = document.createElement("link");
// linkGabarito.rel = "stylesheet";
// linkGabarito.href =
//   "https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap";

// const linkLexend = document.createElement("link");
// linkLexend.rel = "stylesheet";
// linkLexend.href = "https://fonts.cdnfonts.com/css/lexend";

// const linkSatoshi = document.createElement("link");
// linkSatoshi.rel = "stylesheet";
// linkSatoshi.href = "https://fonts.cdnfonts.com/css/satoshi";

// document.head.appendChild(linkPoppins);
// document.head.appendChild(linkGabarito);
// document.head.appendChild(linkLexend);
// document.head.appendChild(linkSatoshi);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
