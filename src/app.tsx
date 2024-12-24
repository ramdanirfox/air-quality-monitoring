import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { SJXProvider } from "./shared/context/SJXContext";

export default function App() {
  return (
    
      <Router
        root={props => (
          <SJXProvider count={1}>
            <MetaProvider>
              <Title>Monitor Udara</Title>
              <Suspense>{props.children}</Suspense>
            </MetaProvider>
          </SJXProvider>
        )}
      >
        <FileRoutes />
      </Router>
  );
}
