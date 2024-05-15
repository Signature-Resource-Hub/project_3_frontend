import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavBAr from '../NavBAr';
const ViewHousehold = () => {
    const[data,setData] =useState([]);

    useEffect(()=>{
        const getData =async()=>{
            try{
                const response=await axios.get("http://localhost:8000/api/household-services/6603aff08f08b33a7cbfd243");
                console.log(response)
                setData(response.data.householdServices);
            } catch(error){
                console.error("error fetching household services",error);
            }
        };
        getData();
    },[]);
    console.log("Data:",data);
    console.log("Data type:",typeof data)
  return (
    <div>
        <NavBAr/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.dealsshutter.com/blog/wp-content/uploads/2020/03/Home-Services-Image-30-march-2020.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
        <h1 ><b>ONE STOP SERVICE HUB</b></h1>

      </div>
    </div>
  </div>
</div>
                            
                            {
                                data.map(
                                    (value,index)=>{
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3" key={index}>
                                        <div className="card">
                                            <img src="https://cdn.dribbble.com/users/138119/screenshots/7386587/media/7c65deb28aa61f0de71388defde057be.png" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{value.title}</h5>
                                                <p className="card-text">{value.phone}</p>
                                                <p className="card-text">{value.location}</p>
                                                <p className="card-text">{value.Category}</p>
                                                <p className="card-text">{value.SubCategory}</p>
                                                <a href="#" className="btn btn-primary">View</a>
                                            </div>
                                        </div>
                                    </div>
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        
      
    </div>
  )
}

export default ViewHousehold
