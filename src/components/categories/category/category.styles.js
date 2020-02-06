import styled from 'styled-components'
import { Card as CardReactstrap } from 'reactstrap'

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

export const Box = styled(CardReactstrap)`
  padding: 10px;
  width: 300px;
  background: white;
`

export const Options = styled.div`
  margin-top: 20px;
`

export const Item = styled.div`
  margin-bottom: 5px;
  padding-left: 30px;
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
