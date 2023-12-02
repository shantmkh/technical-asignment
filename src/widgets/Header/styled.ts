import styled from "@emotion/styled"
import { mq } from "utils/constants/styleConstants"

export const Main = styled.header`
  padding-bottom: 70px;
  width: 100%
`

export const Wrapper = styled.div`
  background: #fff;
  padding: 0 30px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  box-sizing: border-box;
  box-shadow: 0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;
`

export const DesktopContainer = styled.div`
  background: transparent;
  padding: 20px 10px;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  ${mq.xs.max} {
    display: none
  }
`

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  

  ${mq.xs.min} {
    display: none
  }
`

export const MenuItem = styled.span<{ active: boolean }>`
  font-size: 20px;
  cursor: pointer;
  color: ${props => props.active ? '#8d49f7' : '#2b2a35'};
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  transition: .5;

  &:hover {
    color: #8d49f7;
  }

  ${mq.xs.max} {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
`

export const Burger = styled.button<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;

  div {
    width: 32px;
    height: 4px;
    background-color: #8d49f7;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    
    :first-of-type {
      transform: ${(props) => props.active ? 'rotate(45deg)' : 'rotate(0)'};
    }
  
    :nth-of-type(2) {
      opacity: ${(props) => props.active ? '0' : '1'};
      transform: ${(props) => props.active ? 'translateX(20px)' : 'translateX(0)'};
    }
  
    :nth-of-type(3) {
      transform: ${(props) => props.active ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

`

export const MobileList = styled.div<{ active: boolean }>`
  height: ${props => props.active ? 'auto' : '0'};
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  top: 70px;
  left: 0;
  background: #fff;
  border-top: ${props => props.active ? '1px solid #8d49f7;' : '0'};
  box-shadow: ${props => props.active ? '0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;' : '0'};
`
