import { MDBCol, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import ContactForm from './ContactForm'

function ContactUs() {
    return (
        <div className='mt-5 mb-3'>
            <MDBRow className='p-5 text-center'>
                <h3>Contact Us</h3>
                <p>At Create Arts, we bring together functionality and aesthetics to provide
                    homeowners with customised and efficient home designs.</p>
                <MDBRow>
                    <MDBCol md='4'>
                    </MDBCol>
                    <MDBCol md='4'>
                        <ContactForm />
                    </MDBCol>
                    <MDBCol md='4'>
                    </MDBCol>
                </MDBRow>
            </MDBRow>

        </div>
    )
}

export default ContactUs