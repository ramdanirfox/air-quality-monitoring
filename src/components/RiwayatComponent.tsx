import { createSignal } from "solid-js";
import "./Counter.css";
import { useSJXContext } from "~/shared/context/SJXContext";
import { Button } from "@kobalte/core/button";

export default function RiwayatComponent() {
  
  return (
    <div class="t-center text-white overflow-auto">
        <Button class="button">Tambah Lokasi</Button>
    </div>
  );
}
