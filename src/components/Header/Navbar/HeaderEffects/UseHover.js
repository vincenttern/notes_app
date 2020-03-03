import React, { useState, useEffect, useRef } from "react";

export default function UseHover() {
  const refFirst = useRef();
  const refSecond = useRef();

  const [hoveredFirst, setHoveredFirst] = useState(false);
  const [hoveredSecond, setHoveredSecond] = useState(false);

  const enterFirst = () => setHoveredFirst(true);
  const leaveFirst = () => setHoveredFirst(false);
  const enterSecond = () => setHoveredSecond(true);
  const leaveSecond = () => setHoveredSecond(false);

  useEffect(() => {
    refFirst.current.addEventListener("mouseenter", enterFirst);
    refFirst.current.addEventListener("mouseleave", leaveFirst);
    refSecond.current.addEventListener("mouseenter", enterSecond);
    refSecond.current.addEventListener("mouseleave", leaveSecond);

    return () => {
      refFirst.current.removeEventListener("mouseenter", enterFirst);
      refFirst.current.removeEventListener("mouseleave", leaveFirst);
      refSecond.current.removeEventListener("mouseenter", enterSecond);
      refSecond.current.removeEventListener("mouseleave", leaveSecond);
    };
  }, [refFirst, refSecond]);

  return [refFirst, hoveredFirst, refSecond, hoveredSecond];
}
