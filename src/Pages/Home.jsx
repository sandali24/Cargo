import React from 'react'
import Navbar from '../Components/Navbar'
import img1 from '../assets/img1.jpg'
import './Home.css';


function Home() {
    return (
        <div>
            <Navbar />
            <div class=" div1 z-1 absolute"
                style={{
                    marginLeft: '30rem',
                    marginTop: '0rem',
                    backgroundImage: `url(${img1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
            </div>

            <div class=" div2 bg-white z-2 absolute"
                style={{
                    marginLeft: '3rem',
                    marginTop: '2.5rem'
                }}>
                
                    
                    <div style={{
                    marginLeft: '3rem',
                    marginTop: '9rem'
                }}>
                        <div className="text-xl font-medium text-black">Best Shipping </div>
                        <div className="text-xl font-medium text-yellow-500">Partner</div><br/>
                        <p className="text-black-500">Amet, tempus egestas facilisis volutpat vierra molestie lobortis posuere maecenas, molestie lobortis posuere maecenas. Eget sapien, gravida nequi.</p><br/>
                        <button className="px-4 py-2 mt-2 font-semibold text-white bg-yellow-500">DISCOVER MORE</button>
                    </div>
               

            </div>

        </div>

    )
}

export default Home