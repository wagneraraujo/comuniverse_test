import { theme } from './../../styles/theme'
import styled from 'styled-components'

export const ContainerSlider = styled.div`
  background-color: ${theme.colors.primary};
  height: 160px;
  display: flex;
  align-items: center;
  padding: 16px;

  @media (max-width: 780px) {
    height: auto;
  }
`
export const SliderItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;

  @media (max-width: 780px) {
    flex-direction: column;
  }

  .subtitle {
    font-size: 20px;
    line-height: 25px;
    text-transform: uppercase;
    color: ${theme.colors.secondary};
  }
  .title {
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;
    text-transform: uppercase;
    color: #ffffff;
    max-width: 600px;
  }
  .youtSubscripte {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      color: ${theme.colors.secondary};
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }

    @media (max-width: 780px) {
      margin-top: 26px;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 780px) {
    width: 100%;
    max-width: 100%;
    padding: 0 16px;
  }
`
