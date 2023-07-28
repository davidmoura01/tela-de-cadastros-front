import styled from 'styled-components'
import Background from '../../assets/background1.svg'



export const Container = styled.div`
background: url(${Background});
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 40px;

    
`

export const Image = styled.img`
margin-top:30px;
`




export const InputLabel = styled.p`
color: #EEEEEE;
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.40799999237060547px;
text-align: left;
margin-left: 25px;


`

export const Input = styled.input`
box-shadow: 0px 4px 4px 0px #00000040;
background: #FFFFFF40;
margin-bottom: 34px;
width: 342px;
height: 58px;
border-radius: 14px;
border:none;
padding-left: 25px;
font-size: 24px;
font-weight: bold;
line-height: 28px;
text-align: left;
outline: none;
color: #ffffff;

`





