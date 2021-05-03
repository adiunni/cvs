
import Slider from 'react-slick'
import styles from './SliderComp.module.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { Center,Box } from '@chakra-ui/layout';

export default function SliderComp(){

    const settings = {
        dots:true,
        infinite:true,
        speed:700,
        slidesToShow:4,
        autoplay:true,
        autoplaySpeed:3000,
        loop:true,
    };

    return (
        <Box height='40vh' pl={1} pr={2}>
            <Slider {...settings}>
                <div className={[styles.main,styles.background1].join(" ")}>
                    <Center>
                        <h1 className={styles.h1}>1</h1>
                    </Center>
                </div>
                <div className={[styles.main,styles.background2].join(" ")}>
                    <Center>
                        <h1 className={styles.h1}>2</h1>
                    </Center>
                </div>
                <div className={[styles.main,styles.background3].join(" ")}>
                    <Center>
                        <h1 className={styles.h1}>3</h1>
                    </Center>
                </div>
                <div className={[styles.main,styles.background4].join(" ")}>
                    <Center>
                        <h1 className={styles.h1}>4</h1>
                    </Center>
                </div>
                <div className={[styles.main,styles.background5].join(" ")}>
                    <Center>
                        <h1 className={styles.h1}>5</h1>
                    </Center>
                </div>
            </Slider>
        </Box>
    )
}