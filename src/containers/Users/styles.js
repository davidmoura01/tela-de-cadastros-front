import styled from 'styled-components'
import Background from '../../assets/background.svg'



export const Container = styled.div`
background: url(${Background});
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 40px;

height: 100%;
min-height: 100vh;

    
`

export const Image = styled.img`
margin-top:30px;
`

export const User = styled.li`
display:flex;
justify-content: space-around;
align-items:center;
box-shadow: 0px 4px 4px 0px #00000040;
background: #FFFFFF40;
width: 342px;
height: 58px;
border-radius: 14px;
border:none;
outline: none;
margin-top: 20px;


p{
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
}

button{
    background: none;
    border: none;
    cursor: pointer;


    &:hover{
        opacity: 0.7;
    }

    &:active{
        opacity: 0.5;
    }
    
}


`