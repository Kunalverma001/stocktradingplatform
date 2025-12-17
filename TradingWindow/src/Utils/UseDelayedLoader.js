import { useRef } from "react";

export default function useDelayedLoader(setLoading, delay = 300) {
  const timerRef = useRef(null);

  const startLoading = () => {
    timerRef.current = setTimeout(() => {
      setLoading(true);
    }, delay);
  };

  const stopLoading = () => {
    clearTimeout(timerRef.current);
    setLoading(false);
  };

  return { startLoading, stopLoading };
}