import { brandBannerImgs } from "../data/data";
import Marquee from "react-fast-marquee";

export default function BrandBanner() {
  return (
    <section className="bg-neutral-900 py-2 -skew-y-3">
        <div>
            <Marquee autoFill={true} pauseOnHover={true}>
        {brandBannerImgs.map((img, index) => (
            <div className="h-11 ml-3" key={index}>
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
        </div>
    </section>
  )
}
