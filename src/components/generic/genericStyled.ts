import styled from "@emotion/styled";
import { mq } from "utils/constants/styleConstants";
import { ObjectGeneric } from "utils/types/generic";

const colorPare: ObjectGeneric<{
  background: string
  hover: string
  color: string
}> = {
  red: {
    background: "#dc3545",
    hover: "#c82333",
    color: "#ffffff"
  },
  green: {
    background: "#28a745",
    hover: "#218838",
    color: "#ffffff"
  },
  white: {
    background: "#f8f9fa",
    hover: "#e2e6ea",
    color: "#212529"
  },
  black: {
    background: "#343a40",
    hover: "#23272b",
    color: "#ffffff"
  },
  blueLink: {
    background: "transparent",
    hover: "#00000014",
    color: "#007bff"
  },
  purple: {
    background: "#8d49f7",
    hover: "#843bf6",
    color: "#fff"
  }
}

export const Logo = styled.span`
  font-weight: bolder;
  color: #2b2a35;
  font-size: 25px;
  cursor: pointer;

  ${mq.xs.max} {
    display: none
  }
`

export const PageWrapper = styled.div`
  padding: 10px;
  max-width: 1440px;
  margin: 0 auto; 
`

export const FlexContainer = styled.div<{ justifyType?: string; alignItems?: string; flexDirection?: string }>`
  display: flex;
  justify-content: ${props => props.justifyType || 'space-between'};
  align-items: ${props => props.alignItems || 'center'};
  flex-direction: ${props => props.flexDirection || "row"};
`

export const Button = styled.button<{ variant?: string }>`
  font-weight: 400;
  text-align: center;
  border: none;
  padding: 5px 10px;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  margin: 8px;
  color: ${props => colorPare[props.variant || "white"].color};
  background-color: ${props => colorPare[props.variant || "white"].background};
  transition: .3s;

  :hover {
    background-color: ${props => colorPare[props.variant || "white"].hover};
  }
`

export const Input = styled.input`
  width: 100%;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
`