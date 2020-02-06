import styled from 'styled-components'

export const Course = styled.div`
  display: flex;
  justify-content: space-between;
  border-style: solid;
  border-width: 1px;
  padding: 0.8rem;
  border-color: #cacaca;
  background: white;
`

export const Photo = styled.figure`
  display: block;
`

export const Content = styled.div`
  min-width: 0;
  padding: 0.6rem;
  * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 3px;
    padding-right: 3px;
    margin:0;
  }
`

export const Price = styled.div`
  min-width: 0;
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  * {
    margin:0;
  }

  h3 {
    font-size: 30px;
  }
  
`

export const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`

export const Tag = styled.span`
  padding: 0.2rem 0.3rem 0.2rem 0.3rem;
  color: #267b15;
  border-color: #267b15;
  border-style: solid;
  border-width: 2px;
  font-weight: bold;
  font-size: 12px;
`

export const Type = styled.p`
  margin-top: 10px;
  color: #606060;
  font-size: 12px;
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.6rem 0.4rem 0.6rem;
  border-radius: 0.2rem;
  border-style: solid;
  border-color: #cacaca;
  border-width: 0.12rem;
`

export const Footer = styled.h4`
  padding-top: 50px;
  font-size: 18px;
`