import React from 'react'
import NavBar from '../NavBar/NavBar';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="container-1">
        <div className="row-1">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row-1">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://assets-global.website-files.com/620e4101b2ce12a1a6bff0e8/64f0ba7690d6e7fe1e73a3ac_Canada%20(1).jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://assets.savills.com/properties/US0001L20798/01_l_lis.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://assets.savills.com/properties/US0001L20798/01_l_lis.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage


