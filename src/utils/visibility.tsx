import { createRef, RefObject, useEffect, useState } from "react";
import throttle from "lodash.throttle";

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */
// export default function useVisibility<Element extends HTMLElement>(
export default function useVisibility(
  offset = 0,
  initialState = false,
  throttleMilliseconds = 100
): [Boolean, RefObject<Element>] {
  const [isVisible, setIsVisible] = useState(initialState);
  const currentElement = createRef<Element>();

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false);
      return;
    }
    const top = currentElement.current.getBoundingClientRect().top;
    setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
  }, throttleMilliseconds);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return [isVisible, currentElement];
}
