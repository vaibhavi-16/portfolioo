import { useEffect } from "react";

export default function useTilt(ref) {
  useEffect(() => {
    const card = ref.current;
    if (!card) return;

    const move = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `
        rotateX(${-rotateX}deg)
        rotateY(${rotateY}deg)
        translateZ(30px)
      `;
    };

    const reset = () => {
      card.style.transform = `
        rotateX(0deg)
        rotateY(0deg)
        translateZ(0px)
      `;
    };

    card.addEventListener("mousemove", move);
    card.addEventListener("mouseleave", reset);

    return () => {
      card.removeEventListener("mousemove", move);
      card.removeEventListener("mouseleave", reset);
    };
  }, [ref]);
}
