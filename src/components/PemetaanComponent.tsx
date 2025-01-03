import { createEffect, createSignal, onMount, Show } from "solid-js";
import "./Counter.css";
import { SJXContextModel, useSJXContext } from "~/shared/context/SJXContext";
import { Map, NavigationControl, useMapEffect } from "solid-maplibre";

interface MapFlyerProps {
  center: [number, number];
}

function MapFlyer(props: MapFlyerProps) {
  useMapEffect((map) => {
    map.flyTo({ center: props.center });
  });
  return <></>;
}

export interface IPemetaanCmpProps {
  aqiCtx: SJXContextModel | undefined;
}

export default function PemetaanComponent(props: IPemetaanCmpProps) {
  const [sigShowMap, setSigShowMap] = createSignal(false);
  const [sigAddress, setSigAddress] = createSignal("-");
  const [sigLocName, setSigLocName] = createSignal("Select Location");
  const [center, setCenter] = createSignal<[number, number]>([106.82976614124544, -6.2773016456564275]);
  onMount(() => {
    setTimeout(() => {
      setSigShowMap(true);
    }, 500);
  }); 

  createEffect(() => {
    const loc = props.aqiCtx?.ctx.aqiSelectedLocation.val();
    if (loc) {
      setSigAddress(loc.address);
      setSigLocName(loc.name);
      setCenter([loc.latitude, loc.longitude]);
    }
  })

  // width: "100%",
  //             "aspect-ratio": "calc(16/9)",
  return (
    <div class="t-center text-white flex flex-col h-full p-4">
      <div class="flex-1">
      {/* <Show when={sigShowMap()}> */}
          <Map
            onload={(map: any) => {
              console.log("MapLibre", map);
            }}
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
          >
              <NavigationControl options={{ showCompass: true }} />
              <MapFlyer center={center()} />
          </Map>
        {/* </Show> */}
      </div>
      <div class="flex">
        <div class="flex-1 text-left flex items-center">
          <div>{sigLocName()}</div>
        </div>
        <div class="flex-1 text-xs text-right">
          {sigAddress()}
          {/* Jalan Satu<br />
          Nomor 2A */}
        </div>
      </div>
    </div>
  );
}
