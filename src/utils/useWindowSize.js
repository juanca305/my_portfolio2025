// import { useState, useEffect } from "react";

// const useWindowSize = () => {
//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== "undefined" ? window.innerWidth : 1200,
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth });
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowSize;
// };

// export default useWindowSize;
//********************************************************* */
// import { useState, useLayoutEffect } from "react";

// const useWindowSize = () => {
//   const [windowSize, setWindowSize] = useState({
//     width: typeof window !== "undefined" ? window.innerWidth : 1200,
//   });

//   useLayoutEffect(() => {
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth });
//     };

//     handleResize(); // Set initial size correctly on mount
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowSize;
// };

// export default useWindowSize;
//************************************************** */
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: undefined });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    // Debounce resize
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100); // adjust delay as needed
    };

    handleResize(); // Get initial width after mount
    window.addEventListener("resize", debouncedResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;

