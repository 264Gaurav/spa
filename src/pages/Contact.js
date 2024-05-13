import React from 'react';

import './../css/style.css'


    // const companyMembers = [
    //     {
    //         id: 1,
    //         name: 'Gaurav Singh',
    //         position: 'CEO',
    //         email: 'gauravsingh264209@gmail.com',
    //         photo: 'gs6.jpg'
    //     },
    //     {
    //         id: 2,
    //         name: 'Alok Maddhesiya',
    //         position: 'CTO',
    //         email: 'alokmaddhesiya1110@gmail.com',
    //         photo: 'alok.jpg'
    //     },
    //     {
    //         id: 3,
    //         name: 'Mukesh yadav',
    //         position: 'Marketing Director',
    //         email: 'mukesh123@gmail.com',
    //         photo: 'mukesh.jpg'
    //     },
    //     {
    //         id: 4,
    //         name: 'Kamini Rai',
    //         position: 'Lead Developer',
    //         email: 'kamini123@gmail.com',
    //         photo: 'kamini.jpg'
    //     },
    //     {
    //         id: 5,
    //         name: 'Dr.Sudhanshu Verma',
    //         position: 'Mentor',
    //         email: 'svece@mmmut.ac.in',
    //         photo: 'supervisor.jpg'
    //     }
    // ];



    const ContactPage = () => {
       
        const companyMembers = [
        {
            id: 1,
            name: 'Gaurav Singh',
            position: 'CEO',
            email: 'gauravsingh264209@gmail.com',
            photo: 'gs6.jpg'
        },
        {
            id: 2,
            name: 'Alok Maddhesiya',
            position: 'CTO',
            email: 'alokmaddhesiya1110@gmail.com',
            phone: '1234569872'
        },
        {
            id: 3,
            name: 'Mukesh yadav',
            position: 'Marketing Director',
            email: 'mukesh123@gmail.com',
            phone: '1234569872'
        },
        {
            id: 4,
            name: 'Kamini Rai',
            position: 'Lead Developer',
            email: 'kamini123@gmail.com',
            phone: '1234569872'
        },
        {
            id: 5,
            name: 'Dr.Sudhanshu Verma',
            position: 'Mentor',
            email: 'svece@mmmut.ac.in',
            phone: '1234569872'
        }
    ];


    
   

   
    const ceoData1 = {
        name: 'Gaurav Singh',
        position: 'CEO',
        email: 'gauravsingh264209@gmail.com',
        phone: '1234569872'
    };

    const ceoData2 = {
        name: 'Alok Maddhesiya',
        position: 'CTO',
        email: 'alokmaddhesiya1110@gmail.com',
        phone: '1234569872'
    };

    const ceoData3 = {
        name: 'Mukesh yadav',
        position: 'Marketing Director',
        email: 'mukesh123@gmail.com',
        phone: '1234569872'
    };

    const ceoData4 = {
        name: 'Kamini Rai',
        position: 'HR',
        email: 'kamini123@gmail.com',
        phone: '1234569872'
    };

    const ceoData5 = {
        name: 'Dr.Sudhanshu Verma',
        position: 'Mentor',
        email: 'svece@mmmut.ac.in',
        phone: '1234569872'
    };

   

    return (
        <div className="contact-page">

             <div className='cont-container1'>
                <div className="ceo-card">
                    <img src='gs6.jpg' alt={ceoData1.name} />
                    <div className="ceo-info">
                        <h2>{ceoData1.name}</h2>
                        <p>{ceoData1.position}</p>
                        <p>Email: {ceoData1.email}</p>
                        <p>Phone: {ceoData1.phone}</p>
                    </div>
                </div>

                <div className="ceo-card">
                    <img src='supervisor.jpg' alt={ceoData5.name} />
                    <div className="ceo-info">
                        <h2>{ceoData5.name}</h2>
                        <p>{ceoData5.position}</p>
                        <p>Email: {ceoData5.email}</p>
                        <p>Phone: {ceoData5.phone}</p>
                    </div>
                </div>
                
            </div>



            <div className='cont-container2'>
                <div className="ceo-card">
                    <img src='alok.jpg' alt={ceoData2.name} />
                    <div className="ceo-info">
                        <h2>{ceoData2.name}</h2>
                        <p>{ceoData2.position}</p>
                        <p>Email: {ceoData2.email}</p>
                        <p>Phone: {ceoData2.phone}</p>
                    </div>
                </div>

                <div className="ceo-card">
                    <img src='mukesh.jpg' alt={ceoData3.name} />
                    <div className="ceo-info">
                        <h2>{ceoData3.name}</h2>
                        <p>{ceoData3.position}</p>
                        <p>Email: {ceoData3.email}</p>
                        <p>Phone: {ceoData3.phone}</p>
                    </div>
                </div>
            


          
                <div className="ceo-card">
                    <img src='kamini.jpg' alt={ceoData4.name} />
                    <div className="ceo-info">
                        <h2>{ceoData4.name}</h2>
                        <p>{ceoData4.position}</p>
                        <p>Email: {ceoData4.email}</p>
                        <p>Phone: {ceoData4.phone}</p>
                    </div>
                </div>
            </div>


           
        </div>
    );
    
    }
    
    export default ContactPage;
