import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 0px;
  border: 2px solid #fff;
  color: #fff;
  margin-bottom: 20px;
  padding: 0.5em 4em;
  font-size:16px;
  transition: 1s all ease-out;
  letter-spacing: 2px;
  
  box-shadow: 1px 1px 9px 2px rgba(0,0,0,0.3),
              inset -2px -2px 9px 2px rgba(0,0,0,0.3);
              
   &:hover{
             box-shadow: 1px 1px 9px 2px rgba(255,255,255,0.3),
              inset -2px -2px 9px 2px rgba(255,255,255,0.3);
              color:#222;
              background-color:#fff;
   }           
                     
`
export default Button;