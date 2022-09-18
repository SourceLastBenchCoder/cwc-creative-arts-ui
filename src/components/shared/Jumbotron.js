import React, { useState, useEffect } from 'react';
import {
    MDBBtn
} from 'mdb-react-ui-kit';
import { API_URL } from '../../AppConstants';

export default function Jumbotron() {
    const [showBasic, setShowBasic] = useState(false);

    const [bannerData, setBanner] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(API_URL + 'banner')
            .then(res => res.json())
            .then(result => {
                setBanner(result)
                setIsLoading(false)
            })
    }, [])

    return (
        (!isLoading) ? (
            <header>
                <div
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: `url(${bannerData[0].banner})`, height: '800px', marginTop: 85 }}
                >
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='mb-3'>{bannerData[0].title}</h1>
                                <h4 className='mb-3'>{bannerData[0].smallDescription}</h4>
                                <MDBBtn tag="a" outline size="lg">
                                    {bannerData[0].buttonText}
                                </MDBBtn>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        ):(
            <header>
                <p>Please wait Data Loading</p>
            </header>
        )
    );
}