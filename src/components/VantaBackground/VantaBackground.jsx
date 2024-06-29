import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          amplitudeFactor: 1.6,
          xOffset: -0.01,
          size: 1.3,
          THREE,
        })
      );
    }

    const handleResize = () => {
      if (vantaEffect) vantaEffect.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 w-full h-full z-0"
      style={{ minHeight: "100vh" }}
    ></div>
  );
};

export default VantaBackground;
