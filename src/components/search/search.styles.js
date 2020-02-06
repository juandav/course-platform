import styled from 'styled-components'
import { Button as ButtonReactstrap } from 'reactstrap'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #1a5796;
  /*position: absolute;*/
  width: 100%;
  height: 214px;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 360px) {
    flex-direction: column;
  }
`

export const SearchContainer = styled.span`
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
