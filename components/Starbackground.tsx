import React, { useRef, useEffect } from "react";

interface StarBackgroundProps {
  numStars?: number;
}

export const StarBackground: React.FC<StarBackgroundProps> = ({
  numStars = 100,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars: {
      x: number;
      y: number;
      size: number;
      fillColor: string;
      strokeColor: string;
      vx: number;
      vy: number;
      rotation: number;
      rotationSpeed: number;
      isOutline: boolean;
    }[] = [];

    const starSizes = [8, 12, 16, 20];
    const starColors = [
      { fill: "rgba(255, 255, 255, 0.8)", stroke: "rgba(255, 255, 255, 0.2)" },
      { fill: "rgba(224, 231, 255, 0.8)", stroke: "rgba(224, 231, 255, 0.2)" },
      { fill: "rgba(199, 210, 254, 0.8)", stroke: "rgba(199, 210, 254, 0.2)" },
      { fill: "rgba(165, 180, 252, 0.8)", stroke: "rgba(165, 180, 252, 0.2)" },
    ];

    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = starSizes[Math.floor(Math.random() * starSizes.length)];
      const { fill, stroke } =
        starColors[Math.floor(Math.random() * starColors.length)];
      const vx = (Math.random() - 0.5) * 0.1;
      const vy = (Math.random() - 0.5) * 0.1;
      const rotation = Math.random() * Math.PI * 2;
      const rotationSpeed = (Math.random() - 0.5) * 0.01;
      const isOutline = Math.random() > 0.5;
      stars.push({
        x,
        y,
        size,
        fillColor: fill,
        strokeColor: stroke,
        vx,
        vy,
        rotation,
        rotationSpeed,
        isOutline,
      });
    }

    const drawStar = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      fillColor: string,
      strokeColor: string,
      rotation: number,
      isOutline: boolean
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();

      for (let i = 0; i < 5; i++) {
        ctx.lineTo(
          Math.cos(((18 + i * 72) * Math.PI) / 180) * size,
          -Math.sin(((18 + i * 72) * Math.PI) / 180) * size
        );
        ctx.lineTo(
          Math.cos(((54 + i * 72) * Math.PI) / 180) * size * 0.5,
          -Math.sin(((54 + i * 72) * Math.PI) / 180) * size * 0.5
        );
      }

      ctx.closePath();

      if (isOutline) {
        ctx.strokeStyle = fillColor;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      } else {
        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      ctx.restore();
    };

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        drawStar(
          ctx,
          star.x,
          star.y,
          star.size,
          star.fillColor,
          star.strokeColor,
          star.rotation,
          star.isOutline
        );

        star.x += star.vx;
        star.y += star.vy;
        star.rotation += star.rotationSpeed;

        if (star.x < -star.size) star.x = canvas.width + star.size;
        if (star.x > canvas.width + star.size) star.x = -star.size;
        if (star.y < -star.size) star.y = canvas.height + star.size;
        if (star.y > canvas.height + star.size) star.y = -star.size;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};
