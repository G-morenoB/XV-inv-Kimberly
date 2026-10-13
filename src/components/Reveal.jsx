import React, { useEffect } from "react";
import { useInView } from "../lib/useScroll";

// Anima su contenido cuando entra en pantalla al deslizar.
// variant: up | left | right | zoom | drop | pop | unroll | hop
export function Reveal({ as: Tag = "div", variant = "up", delay = 0, className = "", style, onShow, children, ...rest }) {
  const [ref, seen] = useInView();
  useEffect(() => { if (seen && onShow) onShow(ref.current); }, [seen]);
  return (
    <Tag ref={ref} className={`sr sr-${variant} ${seen ? "in" : ""} ${className}`}
      style={{ "--dl": delay + "s", ...style }} {...rest}>
      {children}
    </Tag>
  );
}
