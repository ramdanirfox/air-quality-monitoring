import { createSignal, For } from "solid-js";
import "./Counter.css";
import { SJXContextModel, useSJXContext } from "~/shared/context/SJXContext";

export interface IUdaraTerkiniCmpProps {
    aqiCtx?: SJXContextModel | undefined;
}

export default function UdaraTerkiniComponent( props: IUdaraTerkiniCmpProps ) {

  return (
    <div class="t-center text-white p-2 overflow-auto h-full w-full">
      <div class="border-b border-white">Kondisi Udara Terkini</div>
      <div class="flex flex-row">
        <For each={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} fallback={<div>Tidak Tersedia</div>}>
          {(item) => (
            <div class="flex flex-col px-2">
              <div>
                15:00
              </div>
              <div class="border border-white rounded-md p-2">
                <img class="p-2 h-20" src="images/air.png" />
                <div class="bg-[#26FF2633] px-2 rounded-sm shadow-md">
                  Fair
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
            </div>
          )}
        </For>
        <div class="flex flex-col px-2">
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
            </div>
      </div>
    </div>
  );
}
