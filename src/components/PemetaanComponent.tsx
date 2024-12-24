import { createSignal, onMount, Show } from "solid-js";
import "./Counter.css";
import { useSJXContext } from "~/shared/context/SJXContext";
import { Map } from "solid-maplibre";

export default function BrandComponent() {
  const [sigShowMap, setSigShowMap] = createSignal(false);
  onMount(() => {
    setTimeout(() => {
      setSigShowMap(true);
    }, 500);
  }); 
  // width: "100%",
  //             "aspect-ratio": "calc(16/9)",
  return (
    <div class="t-center text-white flex flex-col h-full p-4">
      <div class="flex-1">
      <Show when={sigShowMap()}>
          <Map
            style={{
                width: "100%",
                height: "100%",
                "border-radius": "8px"
            }}
            options={{
              center: [106.82976614124544, -6.2773016456564275], 
              // style: "https://demotiles.maplibre.org/styles/osm-bright-gl-style/style.json",
              style: {
                "version": 8,
                "metadata": {},
                "center": [106.82976614124544, -6.2773016456564275, 16],  // Center coordinates and zoom level from your style
                "sources": {
                  "googlesatellite": {
                    "type": "raster",
                    "tiles": [
                      "https://mt2.google.com/vt/lyrs=s&hl=id&x={x}&y={y}&z={z}",
                      "https://mt1.google.com/vt/lyrs=s&hl=id&x={x}&y={y}&z={z}",
                      "https://mt0.google.com/vt/lyrs=s&hl=id&x={x}&y={y}&z={z}"
                    ],
                    "tileSize": 256
                  },
                  "googlelabels": {
                    "type": "raster",
                    "tiles": [
                      "https://mt2.google.com/vt/lyrs=h&hl=id&x={x}&y={y}&z={z}",
                      "https://mt1.google.com/vt/lyrs=h&hl=id&x={x}&y={y}&z={z}",
                      "https://mt0.google.com/vt/lyrs=h&hl=id&x={x}&y={y}&z={z}"
                    ],
                    "tileSize": 256
                  }
                },
                "sprite": "none", // Assuming no sprite is used in your style
                // "glyphs": "", // Assuming no custom glyphs are used
                "layers": [
                  {
                    "id": "googlesatellite",
                    "type": "raster",
                    "source": "googlesatellite",
                    "minzoom": 0,
                    "maxzoom": 24
                  },
                  {
                    "id": "googlelabels",
                    "type": "raster",
                    "source": "googlelabels",
                    "minzoom": 0,
                    "maxzoom": 24
                  }
                ]
              },
              zoom: 16,
            }}
          />
        </Show>
      </div>
      <div class="flex">
        <div class="flex-1 text-left flex items-center">
          <div>Nama Tempat</div>
        </div>
        <div class="flex-1 text-xs text-right">
          Jalan Satu<br />
          Nomor 2A
        </div>
      </div>
    </div>
  );
}
