import { createSignal, For, Show } from "solid-js";
import "./Counter.css";
import { SJXContextModel, useSJXContext } from "~/shared/context/SJXContext";
import { format, parse } from "date-fns";

export interface IUdaraTerkiniCmpProps {
  aqiCtx?: SJXContextModel | undefined;
}

export default function UdaraTerkiniComponent(props: IUdaraTerkiniCmpProps) {
  const aqiCtx = useSJXContext();
  const aqiUpd = aqiCtx?.ctx.aqiUpdateAll!;
  const aqiLoc = aqiCtx?.ctx.aqiSelectedLocation!;
  return (
    <div class="t-center text-white p-2 overflow-auto h-full w-full">
      <div class="border-b border-white">Kondisi Udara Terkini</div>
      <div class="flex flex-row">
        <For each={aqiUpd.val() && aqiLoc.val() && aqiUpd.val()[aqiLoc.val()!.name] ? aqiUpd.val()[aqiLoc.val()!.name] : []} fallback={<div>Tidak Tersedia</div>}>
          {(item, i) => (
            <div class="flex flex-col px-2">
              <Show when={i()} fallback={
                <div class="flex flex-row">
                  <div class="flex-1 pr-2">
                    Now
                  </div>
                  <div>
                    {format(parse(item.period!, "yyyy-MM-dd HH:mm:ss", new Date()), "HH:mm:ss")}
                  </div>
                </div>
              }>
                <div>
                  {format(parse(item.period!, "yyyy-MM-dd HH:mm:ss", new Date()), "HH:mm:ss")}
                </div>
              </Show>
              <div class="border border-white rounded-md p-2">
                <img class="p-2 h-20" src="images/air.png" />
                <div class="bg-[#26FF2633] px-2 rounded-sm shadow-md">
                  Fair?
                </div>
                <div class="flex flex-row py-1">
                  <div class="flex-1">
                    CO<sup>2</sup>
                  </div>
                  <div class="border border-white rounded-md flex-1">
                    {item.co2}
                  </div>
                </div>
                <div class="flex flex-row py-1">
                  <div class="flex-1">
                    LPG
                  </div>
                  <div class="border border-white rounded-md flex-1">
                    {item.lpg}
                  </div>
                </div>
              </div>
            </div>
          )}
        </For>
        {/* <div class="flex flex-col px-2">
              <div class="flex flex-row">
                <div class="flex-1 pr-2">
                  Now
                </div>
                <div>
                  17:30
                </div>
              </div>
              <div class="border border-white rounded-md p-2">
                <img class="p-2 h-20" src="images/air_bad.png" />
                <div class="bg-[#FF00004D] px-2 rounded-sm shadow-md">
                  Bad
                </div>
                <div class="flex flex-row py-1">
                  <div class="flex-1">
                    CO<sup>2</sup>
                  </div>
                  <div class="border border-white rounded-md flex-1">
                    377
                  </div>
                </div>
                <div class="flex flex-row py-1">
                  <div class="flex-1">
                    LPG
                  </div>
                  <div class="border border-white rounded-md flex-1">
                    15
                  </div>
                </div>
              </div>
            </div> */}
      </div>
    </div>
  );
}
