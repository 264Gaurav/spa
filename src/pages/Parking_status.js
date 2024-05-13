
import './../css/style.css'
import React, {useState , useEffect} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';




const Status=()=>{
    const url1="https://blr1.blynk.cloud/external/api/get?token=zJnfS8pbmTElGGup17nj-qNoRL9dDRsf&v10";
    const url2="https://blr1.blynk.cloud/external/api/get?token=zJnfS8pbmTElGGup17nj-qNoRL9dDRsf&v11";
    const url3="https://blr1.blynk.cloud/external/api/get?token=zJnfS8pbmTElGGup17nj-qNoRL9dDRsf&v12";
    const url4="https://blr1.blynk.cloud/external/api/get?token=zJnfS8pbmTElGGup17nj-qNoRL9dDRsf&v13";


   
    const total=4;
    
    
    //const[count, setCount]=useState(true);
    const[d1,setD1]=useState(null);
    const[d2,setD2]=useState(null);
    const[d3,setD3]=useState(null);
    const[d4,setD4]=useState(null);


  
 


    useEffect(() => {
      // Define a function to fetch the data
      const fetchData = async () => {
        try {
          // Fetch data from an API
          const response = await fetch(url1);
          // Parse the response as JSON
          const jsonData = await response.json();
          // Update the state with the fetched data
          setD1(jsonData);
          
        } catch (error) {
          //console.error('Error fetching data:', error);
          toast.error("Error fetching data: " ,error);
        }
      };
  
      // Call the fetchData function immediately
      fetchData();
      // Set up a timer to fetch data at regular intervals
      const intervalId = setInterval(fetchData, 500); // Fetch data every 5 seconds

       // Clean up function to clear the interval when the component unmounts or rerenders
        return () => clearInterval(intervalId);
      }, []); // Empty dependency array ensures this effect runs only once





      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url2);
            const jsonData = await response.json();
            setD2(jsonData);
          } catch (error) {
            toast.error("Error fetching data: " ,error);
          }
        };
    
        fetchData();
        const intervalId = setInterval(fetchData, 500);
          return () => clearInterval(intervalId);
        }, []); 





        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch(url3);
              const jsonData = await response.json();
              setD3(jsonData);
            } catch (error) {
              toast.error("Error fetching data: " ,error);
            }
          };
      
          fetchData();
          const intervalId = setInterval(fetchData, 500);
            return () => clearInterval(intervalId);
          }, []); 





          useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await fetch(url4);
                const jsonData = await response.json();
                setD4(jsonData);
              } catch (error) {
                toast.error("Error fetching data: " ,error);
              }
            };
        
            fetchData();
            const intervalId = setInterval(fetchData, 500);
              return () => clearInterval(intervalId);
            }, []); 



    // useEffect(()=>{
    //     fetch(url1)
    //       .then( response=>response.json())
    //       .then(json=>{
    //         setD1(json) ;
    //        })
    //       .catch(error=>console.log(error))
    // },[count]);

  //   useEffect(()=>{
  //     fetch(url2)
  //       .then( response=>response.json())
  //       .then(json=>{
  //         setD2(json) ;
  //         // if(d1===1) setCount(count+1);
  //         // else setCount(count);
  //        })
  //       .catch(error=>console.log(error))
  // },[count]);

//   useEffect(()=>{
//     fetch(url3)
//       .then( response=>response.json())
//       .then(json=>{
//         setD3(json) ;
//         // if(d1===1) setCount(count+1);
//         // else setCount(count);
//        })
//       .catch(error=>console.log(error))
// },[count]);

// useEffect(()=>{
//   fetch(url4)
//     .then( response=>response.json())
//     .then(json=>{
//       setD4(json) ;
//       // if(d1===1) setCount(count+1);
//       // else setCount(count);
//      })
//     .catch(error=>console.log(error))
// },[count]);

    //let v=fetch(url1);

    //console.log(d1);
    //console.log(count);



    return(
        <div>
            <h1>MMMUT Vehicle Parking , Gorakhpur (273010) ,UP </h1>

            <div className="container">
                <h3>Booked parking slot : {d1+d2+d3+d4} </h3>
                <h3>Available parking slot : {total-(d1+d2+d3+d4)} </h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                          <div className="box">
                            {!d1 && <h4>slot1</h4>}
                            {d1 && <img src="car.png" alt="Car" className="car-img" />}
                          </div>
                        </div>
                        <div className="col-md-3">
                        <div className="box">
                          {!d2 && <h4>slot2</h4>}
                          {d2&&<img src="car.png" alt="Car" className="car-img" />}
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="box">
                          {!d3 && <h4>slot3</h4>}
                          {d3 && <img src="car.png" alt="Car" className="car-img" />}
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="box">
                          {!d4 && <h4>slot4</h4>}
                          {d4 && <img src="car.png" alt="Car" className="car-img" />}
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
            
            <div className="refresh-button-container" to='/space'>
                 <Link className="refresh-button" to='/space'>Book your Parking Slot</Link>
            </div>

        </div>
    )
}

export default Status;