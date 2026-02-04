import { useEffect, useRef, useState } from "react";

const Ticker = ({ items, className = "" }) => {
  const [duration, setDuration] = useState(20); // Default fallback duration
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const width = contentRef.current.scrollWidth;
      // We calculate duration based on a fixed speed (pixels per second)
      // Change 40 to a higher number for faster, lower for slower.
      setDuration(width / 40); 
    }
  }, [items]);

  const tickerItems = [...items, ...items];

  return (
    <div className={`relative overflow-hidden bg-secondary py-5 ${className}`}>
      <div className="flex whitespace-nowrap">
        {/* Track 1 */}
        <div 
          ref={contentRef}
          className="flex animate-ticker-infinite"
          style={{ animationDuration: `${duration}s` }}
        >
          {tickerItems.map((item, index) => (
            <span
              key={`a-${index}`}
              className="inline-flex items-center flex-shrink-0 mx-8 text-secondary-foreground/80 text-sm font-medium uppercase tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-primary mr-4 flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>

        {/* Track 2 (The identical copy that follows Track 1) */}
        <div 
          className="flex animate-ticker-infinite"
          style={{ animationDuration: `${duration}s` }}
        >
          {tickerItems.map((item, index) => (
            <span
              key={`b-${index}`}
              className="inline-flex items-center flex-shrink-0 mx-8 text-secondary-foreground/80 text-sm font-medium uppercase tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-primary mr-4 flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .animate-ticker-infinite {
          animation: tickerLoop linear infinite;
        }
        @keyframes tickerLoop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Ticker;





// OLD VERSION TICKER
// import { useEffect, useRef, useState } from "react";

// const Ticker = ({ items, className = "" }) => {
//   const containerRef = useRef(null);
//   const contentRef = useRef(null);
//   const [contentWidth, setContentWidth] = useState(0);

//   // Quadruple items for seamless looping
//   const duplicatedItems = [...items, ...items, ...items, ...items];

//   useEffect(() => {
//     if (contentRef.current) {
//       // Get half the width since we duplicated content
//       setContentWidth(contentRef.current.scrollWidth / 2);
//     }
//   }, [items]);

//   return (
//     <div 
//       ref={containerRef}
//       className={`relative overflow-hidden bg-secondary py-5 ${className}`}
//     >
//       <div 
//         ref={contentRef}
//         className="flex whitespace-nowrap will-change-transform"
//         style={{
//           animation: contentWidth > 0 ? `tickerScroll ${contentWidth / 300}s linear infinite` : 'none',
//         }}
//       >
//         {duplicatedItems.map((item, index) => (
//           <span
//             key={index}
//             className="inline-flex items-center flex-shrink-0 mx-8 text-secondary-foreground/80 text-sm font-medium uppercase tracking-wider"
//           >
//             <span className="w-2 h-2 rounded-full bg-primary mr-4 flex-shrink-0" />
//             {item}
//           </span>
//         ))}
//       </div>
//       <style>{`
//         @keyframes tickerScroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Ticker;
