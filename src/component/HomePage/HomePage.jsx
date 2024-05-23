import React, { useEffect } from 'react'
import NavBAr from '../NavBAr'
// import './HomePage.css'

const HomePage = () => {
    useEffect(() => {
        // Create an IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target); // Stop observing once the element is in view
                }
            });
        }, { threshold: 0.1 }); // Customize the threshold as needed

        // Attach the observer to elements with the class 'animate-on-scroll'
        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
        elementsToAnimate.forEach(element => observer.observe(element));

        // Cleanup observer when the component is unmounted
        return () => {
            elementsToAnimate.forEach(element => observer.unobserve(element));
        };
    }, []);
  return (
    <div>
        <NavBAr/>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?cs=srgb&dl=pexels-pixabay-358636.jpg&fm=jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
        <h1 ><b>Unify.</b></h1>
        <p>Make your Canada life simple</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
      <h1 ><b>Unify.</b></h1>
        <p>Make your Canada life simple</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://arizent.brightspotcdn.com/dims4/default/8f68c7b/2147483647/strip/true/crop/6000x4000+0+0/resize/825x550!/quality/90/?url=https%3A%2F%2Fsource-media-brightspot.s3.us-east-1.amazonaws.com%2F8f%2F59%2F988f7b014119a38200f6cb26448b%2Fpexels-fauxels-3184465.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
      <h1 ><b>Unify.</b></h1>
        <p>Make your Canada life simple</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


    <container>
<br />
<br />
        <div className="row  container animate-on-scroll   ">
            
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3 container animate-on-scroll">
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 container animate-on-scroll">
                        <div class="card container animate-on-scroll" >
                        <img src="https://88designbox.com/upload/2015/12/09/modern-villa-in-canada.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/Viewproperty" class="btn btn-primary">View all</a>
                        </div>
                        </div>
                        </div>
                        <br />
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 container animate-on-scroll">
                        <div class="card container animate-on-scroll" >
                        <img src=" https://ca.res.keymedia.com/files/image/iStock-488520481-apartment-canada-housing.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/Viewproperty" class="btn btn-primary">View all</a>
                        </div>
                        </div>
                        </div>
                        <br />
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 container animate-on-scroll">
                        <div class="card container animate-on-scroll" >
                        <img src="https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/ad89730059cb270c0f7c637da1b1dece-f_b.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/Viewproperty" class="btn btn-primary">View all</a>
                        </div>
                        </div>
                        </div>
                        
                    
                </div>
            </div>
        </div>
    </container>
    <br />
    <br />
                <div className="container container animate-on-scroll">
            <div className="row container animate-on-scroll">
                <div className="col-md-6"> {/* Left column for the image */}
                <img src="https://www.villazzo.com/img/destination/destination-canada_oriana.jpg" className="img-thumbnail" alt="Villas in Canada" />
                </div>
                <div className="col-md-6 container animate-on-scroll"> {/* Right column for the text */}
                <h2>Villas in Canada</h2>
                <p>Experience the luxury of beautiful villas in Canada. From picturesque lakeside views to modern, elegant interiors, Canada offers a variety of stunning villas for a perfect getaway. Whether you're looking for a quiet retreat in nature or a vibrant city escape, Canada has the ideal villa to suit your preferences.</p>
                <p>Explore the unique destinations and enjoy the serene ambiance of Canada's natural beauty. Plan your stay in one of the exquisite villas and indulge in a luxurious experience in the heart of this beautiful country.</p>
                </div>
            </div>
        </div>

<br /><br />
                <div className="container container animate-on-scroll">
        <div className="row container animate-on-scroll">
            <div className="col-md-6 container animate-on-scroll"> {/* Left column for the text */}
            <h2>Services in Canada</h2>
            <p>Discover a wide range of services available in Canada. Whether you need assistance with home maintenance, baby sitting, or other home services, we've got you covered. Our experienced professionals provide high-quality service tailored to your needs.</p>
            <p>Enjoy peace of mind knowing that our team is here to support you with reliable, efficient services. Explore our offerings and experience the best of Canadian hospitality and care.</p>
            </div>
            <div className="col-md-6 container animate-on-scroll"> {/* Right column for the image */}
            <img src="https://rnnetwork.com/blog/wp-content/uploads/2023/11/home-health-nurse-sitting-with-patient-main.webp" className="img-thumbnail" alt="Services" />
            </div>
        </div>
        </div>

<br />
<br />
        <div className="container container animate-on-scroll">
  <div className="row container animate-on-scroll">
    <div className="col-md-6 container animate-on-scroll"> {/* Left column for the image */}
      <img src="https://www.usbank.com/dam/images/wealth_management/photo-successful-partnership-1200x675.jpg" className="img-thumbnail" alt="Jobs in Canada" />
    </div>
    <div className="col-md-6"> {/* Right column for the text */}
      <h2>Jobs in Canada</h2>
      <p>Canada offers a diverse range of job opportunities across various industries, from technology and healthcare to finance and construction. Whether you're a recent graduate or an experienced professional, there are plenty of career paths to explore in cities like Toronto, Vancouver, and Montreal.</p>
      <p>Take advantage of Canada's high quality of life and supportive work environment. With competitive salaries and comprehensive benefits, working in Canada provides a fulfilling and balanced lifestyle. Discover the opportunities waiting for you in the Canadian job market and take the next step in your career.</p>
    </div>
  </div>
</div>
<br /><br />
<div className="container container animate-on-scroll">
        <div className="row container animate-on-scroll">
            <div className="col-md-6 container animate-on-scroll"> {/* Left column for the text */}
            <h2>Live News</h2>
            <p>Live news is delivered through various mediums including television, radio, online platforms, and social media, offering real-time updates on breaking news and important events. Canadian news outlets are known for their commitment to journalistic integrity, providing in-depth analysis and coverage of stories that impact the nation and its citizens. Whether it's a major political announcement, a natural disaster, or a groundbreaking scientific discovery, live news in Canada ensures that people stay informed and connected to the world around them.</p>
            </div>
            <div className="col-md-6 container animate-on-scroll"> {/* Right column for the image */}
            <img src="https://i.pinimg.com/564x/75/b8/7e/75b87e004fa5391d100272570f5f4b97.jpg" className="img-thumbnail" alt="Services" />
            </div>
        </div>
        </div>


<br />
<br />
<div className="container bg-body-tertiary ">
  <div className="row">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <a href="/home"> <h4 style={{ textAlign: 'center' }}>Home</h4></a>
          <a href="/Viewproperty"> <h4 style={{ textAlign: 'center' }}>Properties</h4></a>
          <a href="/contactus"> <h4 style={{ textAlign: 'center' }}>Services</h4></a>
          <a href="/viewallj"> <h4 style={{ textAlign: 'center' }}>Jobs</h4></a>
          <a href="/News"> <h4 style={{ textAlign: 'center' }}>News</h4></a>
        </div>
        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <a href="/contactus"> <h4 style={{ textAlign: 'center' }}>Contact Us</h4></a>
        <a href="/about"> <h4 style={{ textAlign: 'center' }}>About</h4></a>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}

export default HomePage