import { useEffect, useRef } from "react";

export const useEventListener = (
  eventType: string,
  callback: (e: Event) => void,
  element: HTMLElement | Window = window
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    console.log("changed");
    const handler = (e: Event) => callbackRef.current(e);
    if (element) {
      element.addEventListener(eventType, handler);
    }

    return () => element && element.removeEventListener(eventType, handler);
  }, [eventType, element]);
};
