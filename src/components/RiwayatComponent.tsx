import { createSignal } from "solid-js";
import "./Counter.css";
import { useSJXContext } from "~/shared/context/SJXContext";
import { Button } from "@kobalte/core/button";
import { AQIIconAddMore } from "~/shared/icons/AQIIconAddMore";
import { AQIIconCO2 } from "~/shared/icons/AQIIconCO2";
import { AQIIconLPG } from "~/shared/icons/AQIIconLPG";

export default function RiwayatComponent() {

  return (
    <div class="t-center text-white overflow-auto">
      <div class="flex flex-row bg-[#D9D9D973] p-4 rounded-md mb-2 gap-2  ">
        <div class="flex flex-col text-left flex-1">
          <div class="text-xl">
            Kampus Mercu Buana
          </div>
          <div class="text-sm">
            Jl. Meruya Selatan No.1, RT.4/RW.1, Joglo, Kec. Kembangan
            Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11650
          </div>
          <div class="text-xl pt-2">
            Index Quality
          </div>
          <div class="text-center">
            <Button class="button w-full">GOOD</Button>
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
      <Button class="button w-full"><span class="pr-2"><AQIIconAddMore /></span> Tambah Lokasi<span class="pr-12"></span></Button>
    </div>
  );
}
