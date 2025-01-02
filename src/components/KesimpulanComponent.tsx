import { createSignal, onCleanup, onMount, Show } from "solid-js";
import "./Counter.css";
import { SJXContextModel, useSJXContext } from "~/shared/context/SJXContext";
import { AQIIconLPG } from "~/shared/icons/AQIIconLPG";
import { AQIIconCO2 } from "~/shared/icons/AQIIconCO2";
import { parseISO } from "date-fns/parseISO";
import { format } from "date-fns/format";
import { AQIAPIEvent, AQIService } from "~/shared/services/AQIServices";
import { OpenMeteoWeatherModel } from "~/shared/models/AQIModel";
import { WMO_CODE } from "~/shared/constants/wmo-code";

export interface IKesimpulanCmpProps { 
  aqiCtx: SJXContextModel | undefined
}

export default function KesimpulanComponent(props: IKesimpulanCmpProps) {
  const [sigRsrcWeather, setSigRsrcWeather] = createSignal<AQIAPIEvent>();
  const [sigWeather, setSigWeather] = createSignal<OpenMeteoWeatherModel>();
  onMount(() => {
    setSigRsrcWeather(AQIService.getCurrentWeather((w) => {
      if (w) {
        console.log("Weather", w);
        setSigWeather(w);
      }
    }));
  })

  onCleanup(() => {
    
  });

  return (
    <div class="t-center text-white h-full flex flex-col gap-4 p-4 overflow-auto">
      {/* Cuaca */}
      <div class="flex flex-row items-center justify-center gap-2">
        <div class="flex-1 t-center">
          <Show when={sigRsrcWeather()?.resource.state == "ready" && sigWeather()} fallback={<img src="images/icons8-night-64.png" />}>
          <img class="w-20 h-20" src={(WMO_CODE as any)[sigWeather()?.current.weather_code!] ? (WMO_CODE as any)[sigWeather()?.current.weather_code!].day.image : "images/icons8-night-64.png"} />
          </Show>
        </div>
        <div class="text-3xl drop-shadow-md flex-1">
          <Show when={sigRsrcWeather()?.resource.state == "ready" && sigWeather()} fallback={<div>--</div>}>
            {sigWeather()?.current.temperature_2m}{sigWeather()?.current_units.temperature_2m}
          </Show>
        </div>
        <div class="flex flex-col flex-1 text-right">
          {/* <div class="drop-shadow-md">15:30 PM</div> */}
          <div class="drop-shadow-md">{props.aqiCtx?.ctx.externalDateTimeUTC.val()! && format(parseISO(props.aqiCtx?.ctx.externalDateTimeUTC.val()!), "HH:mm:ss aa")}</div>
          <div>
          <Show when={sigRsrcWeather()?.resource.state == "ready" && sigWeather()} fallback={"--"}>
            {(WMO_CODE as any)[sigWeather()?.current.weather_code!] ? (WMO_CODE as any)[sigWeather()?.current.weather_code!].day.description : "--"}
          </Show>
          </div>
        </div>
      </div>

      <div class="flex flex-row justify-center gap-2 flex-1">
        <div class="shadow-xl bg-[#D9D9D933] rounded-lg py-4 px-4 flex-1 flex flex-col justify-center relative">
          <div class="flex flex-row absolute top-0 left-0 w-full">
            <div class="flex-1 text-left">
              <div class="p-4">
                LPG
              </div>
            </div>
            <div>
              <AQIIconLPG />
            </div>
          </div>
          <h2 class="text-6xl">17</h2>
          <h4>PPM</h4>
        </div>
        <div class="shadow-xl bg-[#D9D9D933] rounded-lg py-4 px-4 flex-1 flex flex-col justify-center relative">
          <div class="flex flex-row absolute top-0 left-0 w-full">
            <div class="flex-1 text-left">
              <div class="p-4">
                CO<sup>2</sup>
              </div>
            </div>
            <div>
              <AQIIconCO2 />
            </div>
          </div>
          <h2 class="text-6xl">250</h2>
          <h4>PPM</h4>
        </div>
      </div>
    </div>
  );
}
