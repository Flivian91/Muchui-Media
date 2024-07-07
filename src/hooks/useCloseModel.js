import { useEffect, useRef } from "react";

export function useCloseModel(handler) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClose(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler(false);
        }
      }
      document.addEventListener("click", handleClose, true);
      return () => document.removeEventListener("click", handleClose, true);
    },
    [handler]
  );
  return ref
}
