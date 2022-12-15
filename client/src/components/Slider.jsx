import styled from 'styled-components';
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { useState } from 'react';
import { sliderItems } from "../data"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: orange;
    position: relative;
    overflow: hidden;
`

const SliderWrapper = styled.div`
    display: flex;
    height: 100%;
    transition: all 1.5s ease;
    transform: translateX(${props => props.sliderIndex * -100}vw);
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
// const InfoContainer = styled.div`
//     flex: 1;
// `
const SliderImage = styled.img`
    height: 80%;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #da007c;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === "left" && "10px" };
    right: ${props=> props.direction === "right" && "10px" };
    margin: auto;
    cursor: pointer;
    opacity: 0.8;
    z-index: 2;
`

const Slider = () => {
    
    const [sliderIndex, setSliderIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction==="left") {
            setSliderIndex(sliderIndex > 0 ? sliderIndex -1 : 3)
        }else {
            setSliderIndex(sliderIndex < 3 ? sliderIndex +1 : 0 );
        }
    }
    return ( 
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <MdArrowBack />
            </Arrow>
            <SliderWrapper sliderIndex={sliderIndex}>
                {sliderItems.map((item) => (
              <Slide key={item.id}>
                    <ImgContainer>
                        <SliderImage src={item.img} alt={item.alt} />
                    </ImgContainer>
              </Slide>  )) }
            </SliderWrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <MdArrowForward />
            </Arrow>
        </Container>
     );
}
 
export default Slider;