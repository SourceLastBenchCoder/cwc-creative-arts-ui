import { MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import Jumbotron from './shared/Jumbotron'
import WhatAreWe from './shared/WhatAreWe'

function Home() {
    return (
        <>
            <Jumbotron />
            <MDBContainer>
                <WhatAreWe />
            </MDBContainer>

        </>
    )
}

export default Home