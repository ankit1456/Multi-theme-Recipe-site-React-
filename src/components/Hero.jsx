import CustomImage from "./CustomImage";

const images = [
  "img/gallery/img_1.jpg",
  "img/gallery/img_2.jpg",
  "img/gallery/img_3.jpg",
  "img/gallery/img_4.jpg",
  "img/gallery/img_5.jpg",
  "img/gallery/img_6.jpg",
  "img/gallery/img_7.jpg",
  "img/gallery/img_8.jpg",
  "img/gallery/img_9.jpg",
];

const Hero = () => {
  return (
    <div className="hero wrapper">
      <div className="col typography">
        <h1 className="hero__title">What Are We About</h1>
        <p className="hero__info">
          FoodiesHub is a place where you can please your soul and tummy with
          delicious food recepies of all cuisine. And our service is absolutely
          free. So start exploring now.
        </p>
        <button className="btn">explore now</button>
      </div>
      <div className="col gallery">
        {images.map((src, i) => (
          <CustomImage key={i} src={src} padTop="90%" />
        ))}
      </div>
    </div>
  );
};

export default Hero;
