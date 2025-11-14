import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { SJXProvider } from "./shared/context/SJXContext";

import "maplibre-gl/dist/maplibre-gl.css";

import "./shared/styles/ripple.css";
import "./shared/styles/KobalteButton.css";
import "./shared/styles/KobalteDialog.css";
import "./shared/styles/KobalteTextField.css";
// import { Presence } from "solid-motionone";

export default function App() {
  return (
    
      <Router base="/air-quality-monitoring"
        root={props => (
          <SJXProvider count={1}>
            <MetaProvider>
              <Title>Monitor Udara</Title>
              <Suspense fallback={"Memuat..."}>
                {/* <Presence exitBeforeEnter={true}> */}
                  {props.children}
                {/* </Presence> */}
              </Suspense>
            </MetaProvider>
          </SJXProvider>
        )}
      >
        <FileRoutes />
      </Router>
  );
}
