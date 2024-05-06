// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import NavBar from '../NavBar/NavBar';
// import './News.css';

// const News = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const getData = () => {
//     axios
//       .get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=47173719e9c94db2b4d07b58fe51fd09")
//       .then((response) => {
//         console.log(response.data); // Log the response data to see its structure
//         setData(response.data.articles); // Assuming 'articles' is the key containing the array of news articles
//         setLoading(false); // Set loading to false after data is fetched
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setLoading(false); // Set loading to false in case of error
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div>
//       <NavBar />
//       <br />
//       <br />
//       <div className="container-fluid">
//   <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4">
//           {data.map((value, index) => (
//             <div key={index} className="col">
//               <div className="card h-100">
//                 <img src={value.urlToImage} className="card-img-top" alt="..." />
//                 <div className="card-content">
//                   <h5 className="card-title">{value.title}</h5>
//                   <p className="card-text">{value.description}</p>
//                   <a href={value.url} className="btn btn-primary">Read</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import './News.css'

const truncateText = (text, maxLength) => {
  const words = text.split(' ');
  if (words.length > maxLength) {
    return words.slice(0, maxLength).join(' ') + '...';
  }
  return text;
};


const News = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    axios
      .get("https://newsapi.org/v2/everything?q=apple&from=2024-04-17&to=2024-04-17&sortBy=popularity&apiKey=47173719e9c94db2b4d07b58fe51fd09")
      .then((response) => {
        console.log(response.data);
        setData(response.data.articles);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <div className="container">
        <div className="cards h-100">
          {loading ? (
            <div>Loading...</div>
          ) : (
            data.map((value, index) => (
              <div className="card h-100" key={index}>
                <img src={value.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{truncateText(value.description, 10)}</p>
                  <a href={value.url} className="btn btn-primary">Read</a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
