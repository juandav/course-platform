import styled from 'styled-components'
import { Button as ButtonReactstrap, Label } from 'reactstrap'

export const ComboContainer = styled.div`
  display: flex;
`

export const ComboTitle = styled.h4`
  padding-top: 45px;
  color: white;
`

export const ComboBox = styled.div`
  padding: 10px;
  text-align: center;
`

export const ComboLabel = styled(Label)`
  color: white;
  height: 10px;
`

export const Container = styled.div`
  display: flex;
  background-color: #1a5796;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 214px;
`

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 360px) {
    flex-direction: column;
  }
`

export const Search = styled.span`
  display: inline-block;
  position: relative;
  text-align: start;
  background: white;
  border: none;
  border-radius: 3px;
`

export const SearchIcon = styled.span`
  position: absolute;
  margin-left: 4px;
  top: 50%;
  z-index: 2;
  line-height: 0;
  transform: translateY(-50%);
`

export const SearchInput = styled.input`
  padding: 10px;
  margin-left: 20px;
  border: none; 
  max-width: 800px;
  min-width: 200px;

  @media screen and (min-width: 360px) {
    width: 200px;
  }

  @media screen and (min-width: 680px) {
    width: 400px
  } 

  @media screen and (min-width: 1080px) {
    width: 500px;
  }
`

export const Button = styled(ButtonReactstrap)`
  margin-left: 30px;

  @media screen and (max-width: 360px) {
    margin-top: 20px;
  }
`
