'use client'

import { useState } from 'react'
import { reviews } from "@/lib/data"
import Image from "next/image"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import { Quote } from 'lucide-react'

const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden bg-purple-900/70 opacity-10">
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

export function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section ref={ref} className="relative max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12 overflow-hidden">
      <BackgroundPattern />
      <motion.div 
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
        }}
        className="relative z-10 space-y-4 text-center"
      >
        <motion.span 
          className="inline-block text-xl capitalize md:text-4xl bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text font-bold"
          whileHover={{ scale: 1.05 }}
        >
          For Professionals Across The Globe
        </motion.span>
        <h2 className="text-lg font-semibold text-gray-900 ">
          Join the professionals who depend on us for success.
        </h2>
        <p className="text-lg text-gray-600">
          Find solutions that help individuals and businesses like yours.
        </p>
      </motion.div>

      <div className="relative z-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          speed={700}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full rounded-xl cursor-pointer"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {reviews.map((item, idx) => (
            <SwiperSlide key={idx}>
              <CardItem
                src={item.src}
                altText={item.altText}
                reviewText={item.reviewText}
                index={idx}
                activeIndex={activeIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

function CardItem({
  src,
  altText,
  reviewText,
  index,
  activeIndex,
}: {
  src: string
  altText: string
  reviewText: string
  index: number
  activeIndex: number
}) {
  const isActive = index === activeIndex

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col justify-between h-full bg-white rounded-lg shadow-xl overflow-hidden"
      >
        <div className="absolute top-4 left-4 text-purple-600 opacity-20">
          <Quote size={48} />
        </div>
        <div className="p-8 flex-grow">
          <motion.p 
            className="text-gray-700 mb-6 relative z-10 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            "{reviewText}"
          </motion.p>
          <div className="flex items-center">
            <div className={`mr-4 ${!src && "invisible"}`}>
              <Image
                src={`/assets/${src}.png`}
                width={48}
                height={48}
                alt={altText}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{altText}</h3>
              <p className="text-sm text-gray-500">Satisfied Customer</p>
            </div>
          </div>
        </div>
        <motion.div 
          className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2"
          whileHover={{ height: '0.75rem' }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </motion.div>
    </AnimatePresence>
  )
}