import Slider from "react-slick";
import PropTypes from "prop-types";
import {useRef} from "react";
// material
import {styled, useTheme} from "@mui/material/styles";
import {Box} from "@mui/material";
// utils
//
import {CarouselControlsPaging2,} from "./controls";
// ----------------------------------------------------------------------


const RootStyle = styled("div")(({theme}) => ({
  position: "relative",
  "& .slick-track": {
    display: "inline-flex",
  },
}));


// ----------------------------------------------------------------------

CarouselProductDetail.propTypes = {
  item: PropTypes.object,
};

function CarouselProductDetail({item}) {
  return (
    <Box
      component='img'
      loading='lazy'
      alt='Imagen de producto'
      sx={{width: '100%', height: {xs: '100%', md: '600'}, objectFit: 'contain'}}
      src={item.url}
    />
  )
}

export default function CarouselBasic3({items}) {
  const theme = useTheme();
  const carouselRef = useRef();

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === "rtl"),
    ...CarouselControlsPaging2({
      sx: {mt: 3},
    }),
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <RootStyle>
        <Slider ref={carouselRef} {...settings}>
          {items.map((item, i) => (
            <CarouselProductDetail key={item._id} index={i} item={item}/>
          ))}
        </Slider>
    </RootStyle>
  );
}
