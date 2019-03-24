import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import StyledName from './StyledName'
import './name.css'

const Name = (props) => {
    return (
        <React.Fragment>
            <Jumbotron fluid>
                <Container>
                    <StyledName
                        className="animateX"
                        style={{ fontSize: props.fontSize }}
                    >
                        {props.name}
                    </StyledName>
                </Container>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Name
