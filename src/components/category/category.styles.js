import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.span`
  margin-left: 4px;
`

export const Text = styled.span`
  color: #7d7979;
  margin-left: 8px;
  font-weight: bold;
`

export const Box = styled.div`
  border-style: solid;
  border-width: 0.1rem;
  border-color: #80808014;
  border-width: 1px;
  padding: 10px;
  width: 400px;
  background: white;
  -webkit-box-shadow: -0.5px 1px 5px 0px rgba(0,0,0,0.57);
  -moz-box-shadow: -0.5px 1px 5px 0px rgba(0,0,0,0.57);
  box-shadow: -0.5px 1px 5px 0px rgba(0,0,0,0.57);
`

export const Options = styled.div`
  margin-top: 20px;
`

export const Item = styled.div`
  margin-bottom: 5px;
`

export const Label = styled.label`
  font-size: small;
`

export const Input = styled.input`
  cursor: pointer;
  &:checked { 
    background: #2196F3;
  }
`
