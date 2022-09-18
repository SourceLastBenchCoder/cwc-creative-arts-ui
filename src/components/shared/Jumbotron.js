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
        style={{ backgroundImage: "url('https://super.homelane.com/campaigns/MSD+variant/MSD_Homepage_desktop.jpg')", height: '600px' }}
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