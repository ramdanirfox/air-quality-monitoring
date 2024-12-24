import { createSignal } from "solid-js";
import "./Counter.css";
import { useSJXContext } from "~/shared/context/SJXContext";

export default function BrandComponent() {
  
  return (
    <div class="t-center text-white">
        <div>Monitoring Polusi Udara</div>
        <div>Teknik Elektro</div>
    </div>
  );
}
