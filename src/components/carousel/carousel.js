import React from 'react';
import './carousel.scss';

//redux
import { connect } from 'react-redux';
//router
import { Link } from 'react-router-dom';
//slider
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = ({ women, men }) => {

    const content = [women[3], men[4], women[4], men[5], men[9], women[8], men[18], women[9], men[20], women[10], men[12], women[11], men[13], women[13], men[14], women[14], men[15], women[1]]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="carousel container-fluid">
            <Slider {...settings}>
                {content.map(item => (
                    <Link
                        to={{
                            pathname: `${item.routeName}/${(item.name).split(' ').join('-').toLowerCase()}`,
                            state: item
                        }}>
                        <div className="image-wrapper">
                            <img src={item.image} alt="image" />
                        </div>
                        <div className="content-over">
                            <span>{item.name}</span>
                        </div>
                    </Link>
                ))}
            </Slider>
        </div>
    )
}

const mapStateToProps = state => ({
    women: state.shop.collections[0].items,
    men: state.shop.collections[1].items,
})

export default connect(mapStateToProps)(Carousel);