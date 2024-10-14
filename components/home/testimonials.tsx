"use client";

import {
  motion,
  useAnimationControls,
  useDragControls,
  PanInfo,
} from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Michael Andrew.",
    role: "CEO of Angi Tech",
    image: "/user.png?height=100&width=100",
    text: "Working with Stonuc was a game-changer for our startup. They not only understood our vision but also helped us refine it into a scalable product. Their agile approach allowed us to launch our MVP in record time, and their continuous support has been invaluable as we grow. I can't recommend them highly enough!",
  },
  {
    name: "Gift Uche.",
    role: "Founder of Atop Shop",
    image: "/user.png?height=100&width=100",
    text: "Stonuc exceeded our expectations at every stage of the project. Their focus on user experience transformed our online platform into a seamless shopping experience for our customers. The team was communicative and proactive, making the entire development process enjoyable and efficient. We're thrilled with the results!",
  },
  {
    name: "David Adeyemi.",
    role: "CTO of HealthTech Solutions",
    image: "/user.png?height=100&width=100",
    text: "The collaboration with Stonuc was exceptional. They brought a wealth of expertise in software development and UI/UX design, helping us create a health management app that users love. Their attention to detail and commitment to quality are unmatched. We look forward to continuing our partnership!",
  },
];

type Testimonial = (typeof testimonials)[0];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
    <div className="flex items-center mb-4">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={50}
        height={50}
        className="rounded-full mr-4"
      />
      <div>
        <h3 className="text-gray-800 font-semibold">{testimonial.name}</h3>
        <p className="text-gray-700 text-sm">{testimonial.role}</p>
      </div>
    </div>
    <p className="text-gray-600 flex-grow">{testimonial.text}</p>
    <div className="absolute top-4 left-4 text-primary opacity-20">
      <Quote size={48} />
    </div>
    <motion.div
      className="gradient-bg h-2"
      whileHover={{ height: "0.75rem" }}
      transition={{ type: "spring", stiffness: 300 }}
    />
  </div>
);

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  speed?: number;
  isInfinite?: boolean;
}

const TestimonialsCarousel = ({
  testimonials,
  speed = 30,
  isInfinite = true,
}: TestimonialsCarouselProps) => {
  const controls = useAnimationControls();
  const dragControls = useDragControls();
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const cardWidth = 300;
  const cardGap = 24;
  const totalWidth = testimonials.length * (cardWidth + cardGap);

  const animate = (timestamp: number) => {
    if (!containerRef.current) return;

    const progress = (timestamp % (speed * 1000)) / (speed * 1000);
    const x = -progress * totalWidth;

    controls.set({ x });

    if (isInfinite || progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, isInfinite]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const draggedDistance = info.offset.x;
    const currentPosition = info.point.x;

    let newX = (currentPosition % totalWidth) - draggedDistance;
    if (isInfinite) {
      if (newX > 0) newX -= totalWidth;
      if (newX < -totalWidth) newX += totalWidth;
    } else {
      newX = Math.max(Math.min(newX, 0), -totalWidth + containerWidth);
    }

    controls.set({ x: newX });
  };

  return (
    <div
      ref={containerRef}
      className="overflow-hidden cursor-grab active:cursor-grabbing"
    >
      <motion.div
        className="flex gap-6"
        style={{
          width: isInfinite ? `${totalWidth * 2}px` : `${totalWidth}px`,
        }}
        animate={controls}
        drag="x"
        dragControls={dragControls}
        dragConstraints={containerRef}
        onDragEnd={handleDragEnd}
        dragElastic={0.1}
        dragMomentum={false}
      >
        {(isInfinite ? [...testimonials, ...testimonials] : testimonials).map(
          (testimonial, index) => (
            <div key={index} className="w-[300px] flex-shrink-0">
              <TestimonialCard testimonial={testimonial} />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden bg-sky-900/70 opacity-10">
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2) rotate(0)">
          <path d="M25,17.3 L38.5,8.7 L38.5,26 L25,34.6 L11.5,26 L11.5,8.7z" fill="none" stroke="#000000" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" />
    </svg>
  </div>
)

export default function Testimonials() {
  return (
    <section className="bg-primary/5  overflow-hidden max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
      <BackgroundPattern />
      <motion.div 
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
        }}
        className="relative z-10 space-y-4 text-center"
      >
        <motion.span 
          className="inline-block text-2xl font-bold capitalize md:text-4xl gradient-text"
        >
          For Professionals Across The Globe
        </motion.span>
        <h2 className="text-lg  text-gray-800 ">
          Join the professionals who depend on us for success.
        </h2>
        <p className="text-lg text-gray-600">
          Find solutions that help individuals and businesses like yours.
        </p>
      </motion.div>
        <TestimonialsCarousel
          testimonials={testimonials}
          speed={40}
          isInfinite={true}
        />
      </div>
    </section>
  );
}
