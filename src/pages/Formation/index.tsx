import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, A11y, Controller, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css";

import { FormationCard } from "../../components/FormationCard";
import "./style.scss";

export const Formation = () => {
    return (
        <div className="formation-component">
            <div className="formation-swiper">
                <Swiper
                    modules={[EffectCards, Navigation, A11y, Controller, Autoplay]}
                    effect="cards"
                    autoplay={{ delay: 5000 }}
                    
                    grabCursor
                    centeredSlides
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                >
                    <SwiperSlide>
                        <FormationCard
                            title="React"
                            subtitle="Rocketseat"
                            content="Hello"
                            imgLink="https://gitlab.com/uploads/-/system/project/avatar/31182514/logo-react-icon.png"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FormationCard
                            title="React"
                            subtitle="Rocketseat"
                            content="Hello"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FormationCard
                            title="React"
                            subtitle="Rocketseat"
                            content="Hello"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FormationCard
                            title="React"
                            subtitle="Rocketseat"
                            content="Hello"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};
