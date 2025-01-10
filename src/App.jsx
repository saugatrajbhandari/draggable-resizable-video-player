import { useRef, useState } from "react";

import { Rnd } from "react-rnd";
import { useClickOutside } from "./use-click-oustide";

function App() {
  const [watch, setWatch] = useState(false);

  const noWatch = () => {
    setWatch(false);
  };

  const buttonRef = useRef();
  const ref = useClickOutside(noWatch, buttonRef, watch);
  return (
    <div>
      <button
        ref={buttonRef}
        onClick={() => {
          setWatch(true);
        }}
      >
        watch
      </button>

      <div ref={ref}>
        {watch && (
          <Rnd
            style={{ position: "relative", zIndex: "1000" }}
            default={{
              y: 30,
              width: 100,
              height: 180,
            }}
            bounds={{
              top: 10,
              left: 50, // Leave space on the left
              right: window.innerWidth - 50, // Leave space on the right
              bottom: window.innerHeight - 50, // Leave space at the bottom
            }}
            minWidth={100}
            minHeight={100}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/PtGf40OhIpE?autoplay=1&rel=0"
              title="Selecting the Right Construction Materials: Enirman&#39;s Guide"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p
              onClick={() => setWatch(false)}
              style={{ position: "absolute", top: -50, right: 60 }}
            >
              Close
            </p>
            <p style={{ position: "absolute", top: -50, right: 0 }}>Drag</p>
          </Rnd>
        )}
      </div>
    </div>
  );
}

export default App;
