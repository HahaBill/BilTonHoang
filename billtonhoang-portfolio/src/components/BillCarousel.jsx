import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import billpic1 from '../assets/bill_circle_camera.jpg'
import billpic2 from '../assets/lunar_zebro_bill.jpeg'
import billpic3 from '../assets/team_photo.png'
 
function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const bill_pic1_style = {width: '500px', height: '500px'};
  const bill_pic2_style = {width: '500px', height: '500px'};
  const bill_pic3_style = {width: '500px', height: '500px'};

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        autoplay={true}
        delay={800}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          // children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          // children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={800}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ width: 500, height: 500, background: '#ff80ed' }}>
            <img style={bill_pic1_style} src={billpic1}></img>
        </div>
        <div style={{ width: 500, height: 500, background: '#065535' }}>
            <img style={bill_pic2_style}  src={billpic2}></img>
        </div>
        <div style={{ width: 500, height: 500, background: '#000000' }}>
            <img style={bill_pic3_style}  src={billpic3}></img>
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;