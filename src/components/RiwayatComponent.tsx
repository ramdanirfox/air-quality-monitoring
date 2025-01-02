import { createEffect, createSignal, For, onCleanup, onMount, Show } from "solid-js";
import "./Counter.css";
import { SJXContextModel, useSJXContext } from "~/shared/context/SJXContext";
import { Button } from "@kobalte/core/button";
import { AQIIconAddMore } from "~/shared/icons/AQIIconAddMore";
import { AQIIconCO2 } from "~/shared/icons/AQIIconCO2";
import { AQIIconLPG } from "~/shared/icons/AQIIconLPG";
import { DUMMY_LIST_LOCATION } from "~/shared/constants/dummy-constant";
import { Dialog } from "@kobalte/core/dialog";
import { TextField } from "@kobalte/core/text-field";
import { AQIAPIEvent, AQIService } from "~/shared/services/AQIServices";
import { AQILocationData } from "~/shared/models/AQIModel";

export interface IRiwayatCmpProps {
  aqiCtx: SJXContextModel | undefined;
}

export default function RiwayatComponent(props: IRiwayatCmpProps) {
  const [sigRsrcLocations, setSigRsrcLocations] = createSignal<AQIAPIEvent>();
  const fnOnSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    alert(e + "");
  };

  onMount(() => {
    setSigRsrcLocations(AQIService.getLocations((loc) => {
      if (loc) {
        console.log("Locations OK", loc);
      }
      else {
        console.log("Locations", loc);
      }
    }));
  });

  const fnUpdateAQIChannel = (loc: AQILocationData) => {
    AQIService.getAirQuality((loc) => {
      
    });
  }

  onCleanup(() => {
    // alert("OnCleanup Called!");
  });


  return (
    <div class="t-center text-white h-full overflow-auto p-2">
      <Show when={sigRsrcLocations() && sigRsrcLocations()?.resource.state == "ready" && sigRsrcLocations()?.resource()} fallback={
        <div>{sigRsrcLocations()?.resource.state} {sigRsrcLocations()?.resource.error && sigRsrcLocations()?.resource.error.message}</div>
        }>
        <For each={sigRsrcLocations()?.resource()}>
          {(item) => (
            <button class="block w-full">
            <div class="flex flex-row aqi-flex-responsive bg-[#D9D9D973] hover:bg-[#D9D9D933] transition duration-300 p-4 rounded-md mb-2 gap-2 w-full">
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
              <div class="shadow-xl bg-[#D9D9D933] rounded-lg py-4 px-4 flex-1 flex flex-col justify-center relative w-full">
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
              <div class="shadow-xl bg-[#D9D9D933] rounded-lg py-4 px-4 flex-1 flex flex-col justify-center relative w-full">
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
            </button>
          )}
        </For>
      </Show>
      <Dialog>
        <Dialog.Trigger class="dialog__trigger w-full">
          {/* <Button class="button w-full"> */}
          <span class="pr-2"><AQIIconAddMore /></span> Tambah Lokasi<span class="pr-12"></span>
          {/* </Button> */}
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay class="dialog__overlay" />
          <div class="dialog__positioner">
            <Dialog.Content class="dialog__content">
              <div class="dialog__header">
                <Dialog.Title class="dialog__title">Tambah Lokasi</Dialog.Title>
              </div>
              <Dialog.Description class="dialog__description">
                <form onSubmit={fnOnSubmit}>
                  <TextField class="text-field" name="location">
                    <TextField.Label class="text-field__label">Lokasi</TextField.Label>
                    <TextField.Input class="text-field__input" />
                  </TextField>
                  <TextField class="text-field" name="date">
                    <TextField.Label class="text-field__label">Tanggal</TextField.Label>
                    <TextField.Input class="text-field__input" />
                  </TextField>
                  <div>
                    {/* <Dialog.CloseButton class="dialog__close-button"> */}
                    <Dialog.CloseButton>
                      {/* <CrossIcon /> */}
                      <button class="button" type="button">Batal</button>
                    </Dialog.CloseButton>
                    {/* <button type="reset">Reset</button> */}
                    <button class="button" type="submit">Tambah</button>
                  </div>
                </form>
              </Dialog.Description>
            </Dialog.Content>
          </div>
        </Dialog.Portal>
      </Dialog>
    </div>
  );
}
