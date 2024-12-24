import { createSignal } from "solid-js";
import "./Counter.css";
import { useSJXContext } from "~/shared/context/SJXContext";
import { AQIIconLPG } from "~/shared/icons/AQIIconLPG";
import { AQIIconCO2 } from "~/shared/icons/AQIIconCO2";

export default function KesimpulanComponent() {
  
  return (
    <div class="t-center text-white h-full flex flex-col gap-4 p-4 overflow-auto">
        {/* Cuaca */}
        <div class="flex flex-row items-center justify-center gap-2">
          <div class="flex-1 t-center">
            <img src="images/icons8-night-64.png" />
          </div>
          <div class="text-3xl drop-shadow-md flex-1">
            30°C
          </div>
          <div class="flex flex-col flex-1 text-right">
            <div class="drop-shadow-md">15:30 PM</div>
            <div>Sunny</div>
          </div>
        </div>
        
        <div class="flex flex-row justify-center gap-2 flex-1">
          <div class="shadow-xl bg-[#D9D9D933] rounded-lg py-4 px-4 flex-1 flex flex-col justify-center">
            <div class="flex flex-row">
              <div class="flex-1 text-left">
                LPG
              </div>
              <div>
                <AQIIconLPG />
              </div>
            </div>
            <h2 class="text-6xl">17</h2>
            <h4>PPM</h4>
          </div>
          <div class="shadow-xl bg-[#D9D9D933] rounded-lg py-4 px-4 flex-1 flex flex-col justify-center">
            <div class="flex flex-row">
              <div class="flex-1 text-left">
                CO<sup>2</sup>
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
