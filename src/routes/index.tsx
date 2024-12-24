import Counter from "~/components/Counter";
import "./index.css";
import { GoldenLayoutView } from "~/components/GoldenLayoutView";
import { Motion } from "solid-motionone";

export default function Home() {
  
  const CMotion = {
    ANIMATION_DURATION_SECOND: 1,
    ANIMATION_PAGE_EXIT: {opacity: 0},
    ANIMATION_PAGE_INVIEW: {opacity: 1},
    // ANIMATION_PAGE_ANIMATE: {opacity: 1, marginLeft: "-20px", marginRight: "20px"},
    // ANIMATION_PAGE_ENTER: {opacity: 0.1, marginLeft: "0px", marginRight: "0px"}, // moving animation with GoldenLayout requires useVirtualEventBindings to be disabled
    ANIMATION_PAGE_ANIMATE: {opacity: 1}, 
    ANIMATION_PAGE_ENTER: {opacity: 0.1},
  }

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
