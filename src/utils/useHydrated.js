import { useEffect, useState } from "react";

const useHydrated = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setHydrated(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return hydrated;
};

export default useHydrated;
