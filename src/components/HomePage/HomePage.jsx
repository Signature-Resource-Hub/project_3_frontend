import React from 'react';
import NavBar from '../NavBar/NavBar';

const HomePage = () => {
  return (
    <div>
      <div className="container-1">
        <div className="row-1">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row-1 position-relative">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div id="carouselExample" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="carousel-item active position-relative">
                      <img src="https://amazingarchitecture.com/storage/files/1/architecture-firms/negre-studio/sf-seca/sf_seca_carlos_sanchez_negre_studio_spain-2.jpg" className="d-block w-100 h-50" alt="First slide" />
                      <div className="navbar-container position-absolute top-0 start-50 translate-middle-x mt-3">
                        <NavBar />
                      </div>
                      <div className="carousel-caption d-none d-md-block position-absolute top-50 start-50 translate-middle">
                        <div className="text-center">
                          <br />
                          <br /><br /> <br />
                          <h3 style={{ whiteSpace: 'nowrap' }}><b>Easiest way to find your dream home</b></h3>
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Your ZIP Code or City  e.g. Toronto" />
                            <div className="input-group-append">
                              <button className="btn btn-success" type='submit'>Search</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="carousel-item position-relative">
                      <img src="https://www.mg.co.uk/sites/default/files/2023-03/iStock-1347150429%201258%20x%20838.jpg" className="d-block w-100" alt="Second slide" />
                      {/* Add any additional content or captions for this image */}
                    {/* </div>  */}
                    <div className="carousel-item active position-relative">
                      <img src="https://www.mg.co.uk/sites/default/files/2023-03/iStock-1347150429%201258%20x%20838.jpg" className="d-block w-100" alt="First slide" />
                      <div className="navbar-container position-absolute top-0 start-50 translate-middle-x mt-3">
                        <NavBar />
                      </div>
                      <div className="carousel-caption d-none d-md-block position-absolute top-50 start-50 translate-middle">
                        <div className="text-center">
                          <br />
                          <h3 style={{ whiteSpace: 'nowrap' }}><b>Easiest way to find Services</b></h3>
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="eg. Automobiles" />
                            <div className="input-group-append">
                              <button className="btn btn-success" type='submit'>Search</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                    <div className="carousel-item active position-relative">
                      <img src="https://www.chase.com/content/services/rendition/image.large.jpg/unified-assets/photography/articles/credit-card/basics/seo-how-to-prepare-for-job-interview_02242023.jpg" className="d-block w-100" alt="First slide" />
                      <div className="navbar-container position-absolute top-0 start-50 translate-middle-x mt-3">
                        <NavBar />
                      </div>
                      <div className="carousel-caption d-none d-md-block position-absolute top-50 start-50 translate-middle">
                        <div className="text-center">
                          <br />
                          <h3 style={{ whiteSpace: 'nowrap' }}><b>Easiest way to find Job</b></h3>
                          <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="eg. DataScience" />
                            <div className="input-group-append">
                              <button className="btn btn-success" type='submit'>Search</button>
                            </div>
                          </div>
                        </div>
                      </div>
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
     {/*  */}

     





    </div>
  );
};

export default HomePage;
