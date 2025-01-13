import styled from 'styled-components'
import { Breakpoints, colors } from '../../styles'

export const VagaContainer = styled.div`
  border: 1px solid ${colors.principal};
  background-color: ${colors.secundaria};
  color: ${colors.principal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${colors.principal};
    color: ${colors.secundaria};

    a {
      border-color: ${colors.principal};
      background-color: ${colors.secundaria};
      color: ${colors.principal};
    }
  }
`
export const VagaTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
export const VagaLink = styled.a`
  border-color: ${colors.secundaria};
  background-color: ${colors.principal};
  color: ${colors.secundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: ${Breakpoints.tablet}) {
    display: block;
  }
`
