import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function WhatAreWe() {
    return (
        <div className='mt-3 mb-3'>
            <MDBRow className='p-5 text-center'>
                <h3>Who are We?</h3>
                <p>At Create Arts, we bring together functionality and aesthetics to provide homeowners with customised and efficient home designs.</p>
            </MDBRow>
            <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
                <MDBCol>
                    <MDBCard className='h-100' alignment='center'>
                        <MDBCardBody>
                            <MDBCardTitle>
                                <MDBIcon fas icon="house-damage" size='4x' />
                            </MDBCardTitle>
                            <MDBCardTitle>
                                Post-installation service
                            </MDBCardTitle>
                            <MDBCardText>Complete your design journey and get unwavering support from our dedicated care team.</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className='h-100' alignment='center'>
                        <MDBCardBody>
                            <MDBCardTitle>
                                <MDBIcon fas icon="handshake" size='4x' />
                            </MDBCardTitle>
                            <MDBCardTitle>
                                100% Genuine
                            </MDBCardTitle>
                            <MDBCardText>Guaranteed 100% Genuine Branded Products at Right Price, You are right place.</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className='h-100' alignment='center'>
                        <MDBCardBody>
                            <MDBCardTitle>
                                <MDBIcon fas icon="drafting-compass" size='4x' />
                            </MDBCardTitle>
                            <MDBCardTitle>
                                1000+ design We Have
                            </MDBCardTitle>
                            <MDBCardText>Explore design ideas and co-create your dream home with our experienced designes.</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className='h-100' alignment='center'>
                        <MDBCardBody>
                            <MDBCardTitle>
                                <MDBIcon fas icon="handshake" size='4x' />
                            </MDBCardTitle>
                            <MDBCardTitle>
                                100% Genuine
                            </MDBCardTitle>
                            <MDBCardText>Guaranteed 100% Genuine Branded Products at Right Price.</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
    );
}