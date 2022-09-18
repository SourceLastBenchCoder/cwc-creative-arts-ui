import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Header() {
    const [showNavText, setShowNavText] = useState(false);

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light' fixed='top'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>
                        <img src="assets/logo.png" alt="" width={316} />
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarText'
                        aria-controls='navbarText'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavText(!showNavText)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavText}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem style={{ marginLeft: '40%', marginRight: '30%' }}>
                                <MDBBtn className='me-2' size='lg' color='danger'>
                                    <MDBIcon fab icon='slack-hash' style={{ marginRight: 10 }} />
                                    GET FREE ESTIMATE
                                </MDBBtn>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                        <span className='navbar-text'>
                            <MDBNavbarBrand>
                                <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
                                    <MDBIcon fab icon='facebook-f' />
                                </MDBBtn>
                                <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
                                    <MDBIcon fab icon='instagram' />
                                </MDBBtn>
                                <MDBBtn className='m-1' style={{ backgroundColor: '#c61118' }} href='#'>
                                    <MDBIcon fab icon='pinterest' />
                                </MDBBtn>
                                <MDBBtn className='m-1' style={{ backgroundColor: '#ed302f' }} href='#'>
                                    <MDBIcon fab icon='youtube' />
                                </MDBBtn>
                                <MDBBtn className='m-1' style={{ backgroundColor: '#25d366' }} href='#'>
                                    <MDBIcon fab icon='whatsapp' />
                                </MDBBtn>
                            </MDBNavbarBrand>
                        </span>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}