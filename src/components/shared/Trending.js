import React, { useEffect, useState } from 'react';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { ALL_ARTICLE, API_URL } from '../../AppConstants';

export default function Trending() {

    const [article, setArticle] = useState([])

    const URL = API_URL + ALL_ARTICLE

    useEffect(() => {
        console.log(URL)
        fetch(URL)
            .then(res => res.json())
            .then((result) => {
                setArticle(result)
                console.log(article)
            })
            .catch((err) => {
                alert(err.message)
            })
    }, [])

    const topArticle = article.map((item) => {
        if (item.feature.topone) {
            return (
                <MDBCol key={item._id}>
                    <MDBCard>
                        <MDBCardImage
                            src='https://super.homelane.com/products/07dec18/entertainment_unit/1.jpg'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                This is a longer card with supporting text below as a natural lead-in to additional content.
                                This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            )
        }
    })

    return (
        <div className='mt-3 mb-3'>
            <MDBRow className='p-5 text-center'>
                <h3>Trending Product</h3>
            </MDBRow>
            <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
                {topArticle}
            </MDBRow>
        </div>
    );
}