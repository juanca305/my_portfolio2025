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
// import { useState, useEffect } from "react";

// const useWindowSize = () => {
//   const [windowSize, setWindowSize] = useState({ width: null });

//   useEffect(() => {
//     const handleResize = () => {
//       console.log("[useWindowSize] Setting width:", window.innerWidth);
//       setWindowSize({ width: window.innerWidth });
//     };

//     // Debounce resize
//     let resizeTimeout;
//     const debouncedResize = () => {
//       clearTimeout(resizeTimeout);
//       resizeTimeout = setTimeout(handleResize, 100); // adjust delay as needed
//     };

//     handleResize(); // Get initial width after mount    
//     window.addEventListener("resize", debouncedResize);

//     return () => {
//       clearTimeout(resizeTimeout);
//       window.removeEventListener("resize", debouncedResize);
//     };
//   }, []);

//   return windowSize;
// };

// export default useWindowSize;

//********************************* */
// import { useState, useEffect } from "react";

// const useWindowSize = () => {
//   // Initialize width synchronously if window is available
//   const getWidth = () => (typeof window !== "undefined" ? window.innerWidth : undefined);

//   const [windowSize, setWindowSize] = useState({ width: getWidth() });

//   useEffect(() => {
//     const handleResize = () => {
//       console.log("[useWindowSize] Setting width:", window.innerWidth);
//       setWindowSize({ width: window.innerWidth });
//     };

//     // Debounce resize events
//     let resizeTimeout;
//     const debouncedResize = () => {
//       clearTimeout(resizeTimeout);
//       resizeTimeout = setTimeout(handleResize, 100);
//     };

//     window.addEventListener("resize", debouncedResize);

//     // No need to call handleResize here because state initialized with current width

//     return () => {
//       clearTimeout(resizeTimeout);
//       window.removeEventListener("resize", debouncedResize);
//     };
//   }, []);

//   return windowSize;
// };

// export default useWindowSize;

//*************************************** */
// import { useState, useEffect } from "react";

// const useWindowSize = () => {
//   const [windowSize, setWindowSize] = useState({ width: null });

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth });
//     };

//     // On mount, call handleResize to set width for first time
//     if (typeof window !== "undefined") {
//       handleResize();
//       window.addEventListener("resize", handleResize);
//       window.addEventListener("orientationchange", handleResize); // Add orientation change listener
//     }

//     return () => {
//       if (typeof window !== "undefined") {
//         window.removeEventListener("resize", handleResize);
//         window.removeEventListener("orientationchange", handleResize);
//       }
//     };
//   }, []);

//   return windowSize;
// };

// export default useWindowSize;

///*************************** */

// import { useState, useEffect } from "react";

// const useWindowSize = () => {
//   const [windowSize, setWindowSize] = useState({ width: undefined });

//   useEffect(() => {
//     let timeoutId;

//     const handleResize = () => {
//       // Debounced update
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         setWindowSize({ width: window.innerWidth });
//       }, 150);
//     };

//     // Set initial size after small delay to avoid wrong first read
//     timeoutId = setTimeout(() => {
//       setWindowSize({ width: window.innerWidth });
//     }, 150);

//     window.addEventListener("resize", handleResize);

//     return () => {
//       clearTimeout(timeoutId);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return windowSize;
// };

// export default useWindowSize;
///*********************************************** */
import { useState, useLayoutEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: undefined });

  useLayoutEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth });
    };
    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return windowSize;
};

export default useWindowSize;




