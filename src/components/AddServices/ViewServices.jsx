import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

const ViewServices = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/allservices");
                console.log(response)
                setData(response.data.services);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };
        getData();
    }, []);

    console.log("Data:", data);
    console.log("Data type:", typeof data);

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            
                            {
                                data.map(
                                    (value,index)=>{
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3" key={index}>
                                        <div className="card">
                                            <img src="" className="card-img-top" alt="..." />
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
    );
};

export default ViewServices;
