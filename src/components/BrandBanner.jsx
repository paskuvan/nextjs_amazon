import { brandBannerImgs } from "../data/data";
import Marquee from "react-fast-marquee";
import { motion } from 'motion/react';
import * as variants from '../motion/animation.js'

export default function BrandBanner() {
  return (
    <motion.section
    variants={variants.staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="bg-neutral-900 py-2 -skew-y-3">
        <motion.div variants={variants.fadeIn}>
            <Marquee autoFill={true} pauseOnHover={true}>
        {brandBannerImgs.map((img, index) => (
            <div className="h-11  ml-3" key={index}>
                <img 
                src={img} 
                alt="logo" 
                className="w-full h-full object-cover" 
                width={484} 
                height={132} 
                />
            </div>
        ))}
        </Marquee>
        </motion.div>
    </motion.section>
  )
}
