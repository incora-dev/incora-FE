import { IMappedIntent } from "../interfaces";
import ScrollSwipe from "./swipe.utils";
import { debounce } from "lodash";

interface IScrollSwipe {
  id?: string;
  ref?: any;
  handleScroll?: Function;
  handleTouch?: Function;
  scrollSensitivity?: number;
  touchSensitivity?: number;
  scrollPreventDefault?: boolean;
  touchPreventDefault?: boolean;
  kill?: boolean;
}

type IDirection = "HORIZONTAL" | "VERTICAL";

interface IScrollResponce {
  direction: IDirection;
  intent: number;
  lastEvent: Event;
  mappedIntent: IMappedIntent;
  scrollPending: boolean;
  startEvent: Event;
}

export const scrollSwipe = ({
  id,
  ref,
  handleScroll,
  handleTouch,
  scrollSensitivity = 40,
  touchSensitivity = 40,
  scrollPreventDefault = false,
  touchPreventDefault = false,
  kill = false,
}: IScrollSwipe) => {
  const ss = new ScrollSwipe({
    target: ref
      ? ref.current
      : id
      ? document.getElementById(id)
      : document.body,
    scrollSensitivity,
    touchSensitivity,
    scrollPreventDefault,
    touchPreventDefault,
    scrollCb,
    touchCb,
  });

  if (kill) {
    ss.killAll();
    return;
  }

  function scrollCb(data: IScrollResponce) {
    const { mappedIntent } = data;
    if (handleScroll) handleScroll(mappedIntent, id);
    ss.listen();
  }

  function touchCb(data: IScrollResponce) {
    if (handleTouch) handleTouch(data, id);
    ss.listen();
  }
};
