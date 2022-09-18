import { MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import Jumbotron from './shared/Jumbotron'
import Trending from './shared/Trending'
import WhatAreWe from './shared/WhatAreWe'

function Home() {
    return (
        <>
            <Jumbotron />
            <MDBContainer>
                <WhatAreWe />
                <Trending/>
            </MDBContainer>

        </>
    )
}

export default Home