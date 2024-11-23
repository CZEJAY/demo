'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ImageCollage() {
  const images = [
    { src: '/images/placeholder1.jpg', rotation: -5, scale: 1.05 },
    { src: '/images/placeholder2.jpg', rotation: 3, scale: 1 },
    { src: '/images/placeholder3.jpg', rotation: -2, scale: 1.02 },
    { src: '/images/placeholder4.jpg', rotation: 4, scale: 0.98 },
    { src: '/images/placeholder5.jpg', rotation: -3, scale: 1.01 },
    { src: '/images/placeholder6.jpg', rotation: 2, scale: 1.03 },
    { src: '/images/placeholder7.jpg', rotation: -4, scale: 0.99 },
    { src: '/images/placeholder8.jpg', rotation: 3, scale: 1.02 },
    { src: '/images/placeholder9.jpg', rotation: -2, scale: 1 },
    { src: '/images/placeholder10.jpg', rotation: 4, scale: 1.01 },
    { src: '/images/placeholder11.jpg', rotation: -3, scale: 0.98 },
    { src: '/images/placeholder12.jpg', rotation: 2, scale: 1.04 },
  ]

  return (
    <div 
      className="absolute inset-0"
      style={{ 
        transform: 'skewY(-5deg)',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
      }}
    >
      <motion.div 
        className="grid grid-cols-3 gap-4 p-8 absolute inset-0"
        style={{ transform: 'skewY(5deg)' }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            style={{
              zIndex: images.length - index,
              transform: `rotate(${image.rotation}deg) scale(${image.scale})`,
            }}
          >
            <div 
              className="relative rounded-lg overflow-hidden shadow-lg"
              style={{ 
                height: '180px',
                width: '150px',
              }}
            >
              <Image
                src={image.src}
                alt={`Collage image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-110"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}