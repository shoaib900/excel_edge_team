import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Container>
            <Title>hello title tag</Title>
            <Ulist>
                <li><Link to={"/"}>Service</Link></li>
                <li><Link to={"/about"}>About</Link></li>
            </Ulist>

        </Container>
    )
}

export default Navbar

const Title = styled.h1`
color: white
`
const Ulist = styled.ul`
list-style-type:none;
display:flex;
width:100px;
justify-content:space-between;
`
const Container = styled.div`
height:80px;
background-color:grey;
display:flex;
justify-content:space-around;
align-items: center;
`
