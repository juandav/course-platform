import styled from 'styled-components'

export const List = styled.div`
  min-width: 0;
  padding: 10px;
  background: white;
  border: 2px;
  border-style: solid;
  border-color: #e6e3e3;
  margin-left: 10px;
  margin-bottom: 100px;

  @media screen and (min-width: 360px) {
    width: 200px;
  }

  @media screen and (min-width: 680px) {
    width: 600px
  } 

  @media screen and (min-width: 1080px) {
    width: 980px;
  }
` 
