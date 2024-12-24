import { createSignal } from "solid-js";
import "./Counter.css";
import { useSJXContext } from "~/shared/context/SJXContext";
import { clientOnly } from "@solidjs/start";

const ClientECharts = clientOnly(() => import('./EChartsComponent'));

interface ILevelUdaraComponent {
    jenis: "CO2" | "LPG"
}

export default function LevelUdaraComponent(props: ILevelUdaraComponent) {
  return (
    <div class="t-center text-white h-full flex flex-col">
        <div>MQ-135</div>
        <div>Level Udara {props.jenis}</div>
        <ClientECharts />
    </div>
  );
}
