import Counter from "~/components/Counter";
import "./index.css";
import { GoldenLayoutView } from "~/components/GoldenLayoutView";
import { Motion } from "solid-motionone";
import { AQIService } from "~/shared/services/AQIServices";
import { useSJXContext } from "~/shared/context/SJXContext";
import { Accessor, createSignal, onCleanup, onMount } from "solid-js";
import { parseISO } from "date-fns/parseISO";
import { createTimer, TimeoutSource } from "@solid-primitives/timer";

export default function Home() {
  const [sigTimeDelay, setSigTimeDelay] = createSignal<number | false>(1000); // set to false to stop
  const timeoutSourceAccessor: Accessor<TimeoutSource> = () => {
    return sigTimeDelay;
  };
  const CMotion = {
    ANIMATION_DURATION_SECOND: 1,
    ANIMATION_PAGE_EXIT: { opacity: 0 },
    ANIMATION_PAGE_INVIEW: { opacity: 1 },
    // ANIMATION_PAGE_ANIMATE: {opacity: 1, marginLeft: "-20px", marginRight: "20px"},
    // ANIMATION_PAGE_ENTER: {opacity: 0.1, marginLeft: "0px", marginRight: "0px"}, // moving animation with GoldenLayout requires useVirtualEventBindings to be disabled
    ANIMATION_PAGE_ANIMATE: { opacity: 1 },
    ANIMATION_PAGE_ENTER: { opacity: 0.1 },
  }

  onMount(() => {
    // console.log("Timer init");
    const aqiCtx = useSJXContext();
    setSigTimeDelay(1000);
    AQIService.externalTimingAPI((res) => {
      // console.log("API Timer");
      if (res) {
        aqiCtx?.ctx.lastNavigatorTime.set(performance.now());
        aqiCtx?.ctx.externalDateTimeUTC.set(res.dateTime!);
        const d = parseISO(aqiCtx?.ctx.externalDateTimeUTC.val()!);
        console.log("Date is ", res, aqiCtx?.ctx.lastNavigatorTime.val());
        const timerStop = createTimer(() => {
          const currentTime = performance.now();
          const elapsedTime = currentTime - aqiCtx?.ctx.lastNavigatorTime.val()!;
          d.setMilliseconds(d.getMilliseconds() + elapsedTime);
          // console.log("Elapsed : ", elapsedTime, aqiCtx?.ctx.externalDateTimeUTC.val());
          aqiCtx?.ctx.externalDateTimeUTC.set(d.toISOString());
          aqiCtx?.ctx.lastNavigatorTime.set(currentTime);
        }, timeoutSourceAccessor(), setInterval);
      }
    })
  })

  onCleanup(() => {
    setSigTimeDelay(false);
  })

  return (
    <main class="bg-tampilan-awal bg-cover">
      <Motion
        initial={CMotion.ANIMATION_PAGE_ENTER}
        animate={CMotion.ANIMATION_PAGE_ANIMATE}
        exit={CMotion.ANIMATION_PAGE_EXIT}
        transition={{ duration: CMotion.ANIMATION_DURATION_SECOND }}
      >
        {/* <h1>Hello world!</h1>
          <Counter /> */}
        <GoldenLayoutView></GoldenLayoutView>
      </Motion>
    </main>
  );
}
