import React, { useRef, useState, useLayoutEffect } from "react";

const Scenario1 = ({ text, children }) => {

  const anchorRef = useRef(null);
  const tooltipRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    if (visible && anchorRef.current && tooltipRef.current) {
      const anchorRect = anchorRef.current.getBoundingClientRect();

      setPosition({
        top: anchorRect.bottom + window.scrollY + 8,
        left: anchorRect.left + window.scrollX,
      });
    }
  }, [visible]);

  return (
    <div
      style={{ display: "inline-block", position: "relative" }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={anchorRef}
    ><div />
      {children}
      {visible && (
        <div
          ref={tooltipRef}
          style={{
            position: "absolute",
            top: position.top,
            left: position.left,
            backgroundColor: "black",
            color: "white",
            padding: "6px 10px",
            borderRadius: "4px",
            whiteSpace: "nowrap",
            zIndex: 1000,
            pointerEvents: "none",
          }}
        ><div />
          {text}
        </div>
      )}
    </div>
  );
};

export default Scenario1;
