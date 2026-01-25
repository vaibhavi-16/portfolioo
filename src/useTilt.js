import { useEffect } from "react";

export default function useTilt(ref) {
  useEffect(() => {
    const card = ref.current;
    if (!card) return;

    card.style.transition = "transform 0.12s ease-out";

    const move = (e) => {
      card.classList.remove("jiggle");       // stop idle float
      card.classList.add("hover-jiggle");    // start hover jiggle

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
        scale(1.04)
      `;
    };

    const reset = () => {
      card.classList.remove("hover-jiggle"); // stop hover jiggle
      card.classList.add("jiggle");          // resume idle float

      card.style.transform = `
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
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
