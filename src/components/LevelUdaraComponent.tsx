import { createSignal, Show } from "solid-js";
import "./Counter.css";
import { SJXContextModel, useSJXContext } from "~/shared/context/SJXContext";
import { clientOnly } from "@solidjs/start";
import { AQIQualityData } from "~/shared/models/AQIModel";

const ClientECharts = clientOnly(() => import('./EChartsComponent'));

interface ILevelUdaraComponent {
    jenis: "CO2" | "LPG",
    aqiCtx: SJXContextModel | undefined
}

export default function LevelUdaraComponent(props: ILevelUdaraComponent) {
  const aqiCtx = useSJXContext();
  const aqlUpd = aqiCtx?.ctx.aqiUpdateAll!;
  const aqlLoc = aqiCtx?.ctx.aqiSelectedLocation!;
  const field = props.jenis.toLowerCase() as "co2" | "lpg";
  return (
    <div class="t-center text-white h-full flex flex-col">
        <div>MQ-135</div>
        <div>Level Udara {props.jenis}</div>
        <Show when={aqlUpd.val() && aqlLoc.val() && aqlUpd.val()[aqlLoc.val()?.name!]} fallback={
          <div class="flex-1 flex flex-row justify-center items-center">
            Tidak Tersedia
          </div>
        }>
          <ClientECharts xdata={
            aqlUpd.val()[aqlLoc.val()?.name!].map((item) => item[field]!).slice(0, 7) 
          } xlabels={aqlUpd.val()[aqlLoc.val()?.name!].map((item) => item.period!).slice(0, 7)} />  
        </Show>
    </div>
  );
}
