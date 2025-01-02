import { createSignal, For } from "solid-js";
import "./Counter.css";
import { useSJXContext } from "~/shared/context/SJXContext";
import { Button } from "@kobalte/core/button";
import { AQIIconAddMore } from "~/shared/icons/AQIIconAddMore";
import { AQIIconCO2 } from "~/shared/icons/AQIIconCO2";
import { AQIIconLPG } from "~/shared/icons/AQIIconLPG";
import { DUMMY_LIST_LOCATION } from "~/shared/constants/dummy-constant";

export default function RiwayatComponent() {

  return (
    <div class="t-center text-white overflow-auto">
      <For each={DUMMY_LIST_LOCATION}>
        {(item) => (
          <div class="flex flex-row bg-[#D9D9D973] p-4 rounded-md mb-2 gap-2">
          <div class="flex flex-col text-left flex-1">
            <div class="text-xl">
              {item.name}
            </div>
            <div class="text-sm">
              {item.address}
            </div>
            <div class="text-xl pt-2">
              Index Quality
            </div>
            <div class="text-center">
              <Button class="button w-full">GOOD?</Button>
            </div>
          </div>
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
            <h2 class="text-6xl">?</h2>
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
            <h2 class="text-6xl">?</h2>
            <h4>PPM</h4>
          </div>
        </div>
        )}
      </For>
      <Button class="button w-full"><span class="pr-2"><AQIIconAddMore /></span> Tambah Lokasi<span class="pr-12"></span></Button>
    </div>
  );
}
