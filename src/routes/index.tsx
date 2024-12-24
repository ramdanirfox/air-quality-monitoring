import Counter from "~/components/Counter";
import "./index.css";
import { GoldenLayoutView } from "~/components/GoldenLayoutView";

export default function Home() {
  
  return (
    <main class="bg-slate-500">
      {/* <h1>Hello world!</h1>
      <Counter /> */}
      <GoldenLayoutView></GoldenLayoutView>
    </main>
  );
}
