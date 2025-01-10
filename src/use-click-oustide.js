import { useEffect, useRef } from "react";

export const useClickOutside = (callback, buttonRef, watch) => {
  const ref = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      console.log(buttonRef.current.contains(e.target));

      if (ref.current && !ref.current.contains(e.target)) {
        if (buttonRef.current && !buttonRef.current.contains(e.target)) {
          callback();
        }
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => window.addEventListener("click", handleOutsideClick);
  }, [callback, watch, buttonRef]);
  return ref;
};
