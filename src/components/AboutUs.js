import { MDBRow, MDBCardBody, MDBCardTitle, MDBCardText, MDBCard, MDBCol, MDBCardImage } from 'mdb-react-ui-kit'
import React from 'react'
import ContactForm from './ContactForm'

function AboutUs() {
    return (
        <div className='mt-5 mb-3'>
            <MDBRow className='p-5 text-center'>
                <h3>About Us</h3>
                <p>At Create Arts, we bring together functionality and aesthetics to provide
                    homeowners with customised and efficient home designs.</p>
            </MDBRow>
        </div>
    )
}

export default AboutUs