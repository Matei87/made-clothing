import React from 'react';
import './carousel.scss';

//redux
import { connect } from 'react-redux';
//router
import { Link, withRouter } from 'react-router-dom';
//slider
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = ({ women, men }) => {
    console.log(women[3]);
    const content = [women[3], men[4], women[4], men[5], men[9], women[8], men[18], women[9], men[20], women[10], men[12], women[11]]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        speed: 3000,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
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
                        {/* <div className="collection-item" key={'unu'}> */}
                        <div className="image-wrapper">
                            <img src={item.image} alt="image" />
                        </div>
                        <div className="content-over">
                            <span>{item.name}</span>
                        </div>
                        {/* </div> */}
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