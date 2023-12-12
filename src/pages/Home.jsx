import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from 'styled-components';




const StyledHome = styled.div`
    h1{
        color: red;
    }
`;

function Home(props) {
    return (
        <StyledHome>
            <h1>Salut les amis</h1>
        </StyledHome>
    )
}


export default Home