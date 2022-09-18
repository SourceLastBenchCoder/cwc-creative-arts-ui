import React, { useState } from 'react';
import {
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Jumbotron() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://images.pexels.com/photos/627533/pexels-photo-627533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", height: '600px',marginTop:85 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Best Prices on Home Interiors.Guaranteed.</h1>
              <h4 className='mb-3'>Instant quotes with no hidden costs.</h4>
              <MDBBtn tag="a" outline size="lg">
               Get Free Estimate
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}