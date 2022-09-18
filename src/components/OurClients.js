import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCol,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow,
    MDBBadge,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function OurClients() {
    return (
        <>
            <div className='mt-5 mb-3'>
                <MDBRow className='p-5 text-center'>
                    <h3>Our Top Customers</h3>
                    <p>At Create Arts, we bring together functionality and aesthetics to provide
                        homeowners with customised and efficient home designs.</p>
                </MDBRow>
            </div>
            <MDBRow>
                <MDBCol xl={4} lg={6} className='mb-4'>
                    <MDBCard>
                        <MDBCardBody>
                            <div className='d-flex align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                    alt=''
                                    style={{ width: '45px', height: '45px' }}
                                    className='rounded-circle'
                                />
                                <div className='ms-3'>
                                    <p className='fw-bold mb-1'>John Doe</p>
                                    <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol xl={4} lg={6} className='mb-4'>
                    <MDBCard>
                        <MDBCardBody>
                            <div className='d-flex align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                                    alt=''
                                    style={{ width: '45px', height: '45px' }}
                                    className='rounded-circle'
                                />
                                <div className='ms-3'>
                                    <p className='fw-bold mb-1'>Alex Ray</p>
                                    <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol xl={4} lg={6} className='mb-4'>
                    <MDBCard>
                        <MDBCardBody>
                            <div className='d-flex align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                                    alt=''
                                    style={{ width: '45px', height: '45px' }}
                                    className='rounded-circle'
                                />
                                <div className='ms-3'>
                                    <p className='fw-bold mb-1'>Kate Hunington</p>
                                    <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol xl={4} lg={6} className='mb-4'>
                    <MDBCard>
                        <MDBCardBody>
                            <div className='d-flex align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/9.jpg'
                                    alt=''
                                    style={{ width: '45px', height: '45px' }}
                                    className='rounded-circle'
                                />
                                <div className='ms-3'>
                                    <p className='fw-bold mb-1'>Soraya Letto</p>
                                    <p className='text-muted mb-0'>soraya.letto@gmail.com</p>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol xl={4} lg={6} className='mb-4'>
                    <MDBCard>
                        <MDBCardBody>
                            <div className='d-flex align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/11.jpg'
                                    alt=''
                                    style={{ width: '45px', height: '45px' }}
                                    className='rounded-circle'
                                />
                                <div className='ms-3'>
                                    <p className='fw-bold mb-1'>Zeynep Dudley</p>
                                    <p className='text-muted mb-0'>zeynep.dudley@gmail.com</p>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol xl={4} lg={6} className='mb-4'>
                    <MDBCard>
                        <MDBCardBody>
                            <div className='d-flex align-items-center'>
                                <img
                                    src='https://mdbootstrap.com/img/new/avatars/15.jpg'
                                    alt=''
                                    style={{ width: '45px', height: '45px' }}
                                    className='rounded-circle'
                                />
                                <div className='ms-3'>
                                    <p className='fw-bold mb-1'>Ayat Black</p>
                                    <p className='text-muted mb-0'>ayat.black@gmail.com</p>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </>
    );
}