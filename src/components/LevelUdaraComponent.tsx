import { createSignal } from "solid-js";
import "./Counter.css";
import { useSJXContext } from "~/shared/context/SJXContext";

interface ILevelUdaraComponent {
    jenis: "CO2" | "LPG"
}

export default function LevelUdaraComponent(props: ILevelUdaraComponent) {
  
  return (
    <div class="t-center text-white">
        <div>Level Udara {props.jenis}</div>
    </div>
  );
}