import "@/assets/styles/Banner.scss";

function Banner({ image, alt }) {
  return (
    <div className="bannerPropos">
      <img src={image} alt={alt} className="banner-image" />
    </div>
  );
}

export default Banner;
