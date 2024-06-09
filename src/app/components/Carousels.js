import Carousel from 'react-bootstrap/Carousel';

const slides = [
	{
		photo:
			"/2.png",
	},
  {
		photo:
			"/3.png",
	},
  {
		photo:
			"/4.png",
	},
  {
		photo:
			"/5.png",
	},
  {
		photo:
			"/6.png",
	},
  {
		photo:
			"/7.png",
	},
]

function CarouselItems() {
  return (
    <div className='carousalSection justify-content-center align-items-center text-center'>
      <Carousel className='d-flex justify-content-center align-items-center'>
        {slides.map(({ photo }, i) => (
        <Carousel.Item interval={2000}>
          <img text="First slide" width={800} height={500} src={photo} />
        </Carousel.Item>))}
      </Carousel>
    </div>
  );
}

export default CarouselItems;