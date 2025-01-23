import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottieAnimation = ({
  animationData,
  size = 10
}: {
  animationData: object;
  size?: number;
  cropHeight?: number;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      lottie.loadAnimation({
        container: containerRef.current,
        animationData,
        renderer: "svg",
        loop: true,
        autoplay: true,
      });
    }

    return () => {
      lottie.destroy();
    };
  }, [animationData]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: `${size}em`,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
};


export default LottieAnimation;
