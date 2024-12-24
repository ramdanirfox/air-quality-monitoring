import { createSignal } from "solid-js";
import "./Counter.css";
import { useSJXContext } from "~/shared/context/SJXContext";

export default function BrandComponent() {
  
  return (
    <div class="t-center text-white flex flex-col items-center justify-center h-full">
        <div class="inline-block">
            <img src="images/umb.png" />
        </div>
        <h1 class="text-2xl">Monitoring Polusi Udara</h1>
        <h2>Teknik Elektro</h2>
    </div>
  );
}
