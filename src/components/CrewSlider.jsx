// import Swiper core and required modules
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function CrewSlider({ crew, styles, onSwipe }) {


    // Recebe o membro atual
    const changeCrewMember = memberIndex => onSwipe(crew[memberIndex]);
    
    return (
        <Swiper
        className={styles.crew_slider}
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={(swiper) => changeCrewMember(swiper.realIndex)}
        >
          {crew.length > 0 && crew.map((member, index) => 
            <SwiperSlide key={index}>
                <h1>{member.role}</h1>
                <h2>{member.name}</h2>
                <p>{member.bio}</p>
            </SwiperSlide>
          )}
        </Swiper>
      );
}

export default CrewSlider;