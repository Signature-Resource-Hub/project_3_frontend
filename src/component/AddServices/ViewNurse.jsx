import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavBAr from '../NavBAr';
const ViewNurse = () => {
    const[data,setData] =useState([]);

    useEffect(()=>{
        const getData =async()=>{
            try{
                const response=await axios.get("http://localhost:8000/api/household-services/661e1f0b0520d5a16162a267");
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
      <img src="http://www.veldramedical.co.uk/wp-content/uploads/2015/08/VHL-image.jpg" class="d-block w-100" alt="..."/>
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
                                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/de07f643406787.57edb04a893ee.jpg" className="card-img-top" alt="..." />
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

export default ViewNurse
