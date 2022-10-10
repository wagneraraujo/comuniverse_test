import { theme } from './../../styles/theme'
import styled from 'styled-components'

export const ContentTopHeader = styled.div`
  background: ${theme.colors.light_gray};
  height: 50px;
  display: flex;
  align-items: center;
  .flexHeader {
    display: flex;
    justify-content: space-between;
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

export const LogoAndSearch = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`
export const NotificationAndUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NotificationIcon = styled.div`
  display: flex;
  margin-right: 16px;
  position: relative;
  .numberNotification {
    position: absolute;
    right: 0px;
    background-color: ${theme.colors.red};
    border-radius: 100%;
    padding: 2px;
    height: 14px;
    width: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #fff;
    font-weight: 600;
  }
  @media (max-width: 780px) {
    margin-right: 6px;
  }
`
