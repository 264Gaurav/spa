import React from 'react'
import './../css/home.scss'

function Home() {
  return (
    <div>
      {/* <div className='banner'>
        <div className='overlay'>
          <h1>Looking for parking. <br /> <span>You have came to right place</span></h1>
        </div>
      </div> */}

          <div className="photo-slider">

            <div className=''>
              <div className='overlay'>
                <h1>Looking for parking. <br /> <span>You have came to right place</span></h1>
              </div>
            </div>

            <div className="slider-wrapper">
              <img src="college2.jpg" alt="Photo 2" />
              <img src="college3.jpg" alt="Photo 3" />
              <img src="college2.jpg" alt="Photo 2" />
              <img src="college3.jpg" alt="Photo 3" />
              <img src="college2.jpg" alt="Photo 2" />
            </div>
         </div>

      

      <div className='container mt-5'>
        <section className='my-5'>
          <h2>How Smart Park Works</h2>

          <div className='row mt-4'>
            <div className='col-md-4 text-center'>
              <div className='card p-4'>
                <img src='./map.avif' className='services-card-icon' alt=''></img>
                <div className='mt-4'>
                  <h3>Search</h3>
                  <p className='mt-3'>Search for a parking spot according to your needs.</p>
                </div>
              </div>
            </div>

            <div className='col-md-4 text-center'>
              <div className='card p-4'>
                <img src='./book.png' className='services-card-icon'alt=''></img>
                <div className='mt-4'>
                  <h3>Book</h3>
                  <p className='mt-3'>Reserved Parking spot and pay desired amount..</p>
                </div>
              </div>
            </div>

            <div className='col-md-4 text-center'>
              <div className='card p-4'>
                <img src='./parking.png' className='services-card-icon'alt=''></img>
                <div className='mt-4'>
                  <h3>Park</h3>
                  <p className='mt-3'>Follow the provided instructions and park your car.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='my-5'>
          <h2 className='mt-5'>Testimonial</h2>
          <div className='row'>
            <div className='col-md-6'>
              <div className='testimonial-card p-3 rounded text-center'>
                <img src='./profile-1.jpeg' alt='' />
                <p className='mt-4 mb-3'>"I recently used Smart Park App, a parking booking website, and I was thoroughly impressed with the service.
                 The Smart Park website was user-friendly and easy to navigate, allowing me to quickly find and book a parking spot for my trip. 
                 The process was seamless, and I received a confirmation email from Rent-A-Spot with all the necessary details. On the day of my arrival, 
                 the Smart parking lot was well-maintained and had ample space.And the best part is that it shows real time status of parking spaces 
                 so that owner and seeker both can monitor the current status of Parking lot. 
                 I highly recommend Smart Parking App to anyone in need of convenient and reliable parking options."</p>
                <span><strong>Akash</strong> Manager at Google</span>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='testimonial-card p-3 rounded text-center'>
                <img src='./profile-1.webp' alt='' />
                <p className='mt-4 mb-3'>"I cannot express how grateful I am for Smart Parking App, the parking booking website.
                Smart Parking App has made the process incredibly convenient and stress-free. With just a few clicks on the Smart Parking  website, 
                I can compare prices and book a parking spot in advance. Smart Parking App provides detailed information about each parking facility, 
                including reviews from other users, which helped me make informed decisions.It also shows real time status of parking spaces 
                 so that we can monitor the current status of Parking lot. On multiple occasions, I arrived at my destination to find 
                a reserved spot waiting for me, thanks to Smart Parking App. This website is a game-changer for travellers like me"</p>
                <span><strong>Arpit</strong> Co-founder at Amazon</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home






















// // PhotoSlider.js

// import React from 'react';
// import './../css/home.scss'

// const Home = () => {
//   return (
//     <div className="photo-slider">
//       <div className="slider-wrapper">
//         <img src="gs6.jpg" alt="Photo 1" />
//         <img src="alok.jpg" alt="Photo 2" />
//         <img src="mukesh.jpg" alt="Photo 3" />
//         <img src="kamini.jpg" alt="Photo 4" />
//       </div>
//     </div>
//   );
// };

// export default Home;



