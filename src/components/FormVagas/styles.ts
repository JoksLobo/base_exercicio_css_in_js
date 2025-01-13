import styled from 'styled-components'
import { colors } from '../../styles'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${colors.secundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const BtnPesquisar = styled.button`
  background-color: ${colors.principal};
  border: 1px solid ${colors.principal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${colors.secundaria};
  margin-left: 8px;
  cursor: pointer;
`
export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${colors.principal};
`
