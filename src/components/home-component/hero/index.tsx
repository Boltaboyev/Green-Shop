import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay, Pagination} from "swiper/modules"

import {HeroSliderType} from "../../../@types"
import {slider_data} from "../../../utils"

import HeroItem from "./hero-item"

const Hero = () => {
    return (
        <div className="container2 py-[10px]">
            <Swiper
                className="rounded-2xl"
                modules={[Autoplay, Pagination]}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                pagination={{clickable: true}}
                loop>
                {slider_data.map((value: HeroSliderType) => (
                    <SwiperSlide key={value.id}>
                        <HeroItem {...value} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Hero
