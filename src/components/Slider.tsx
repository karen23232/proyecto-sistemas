export default function Slider(){
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://picsum.photos/1200/400?1" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://picsum.photos/1200/400?2" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  )
}
