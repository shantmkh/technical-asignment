import styled from "@emotion/styled";

export const CardContainer = styled.div`
  border-radius: 25px;
  box-shadow: 0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a;
  min-width: 300px;
  width: 100%;
  height: 500px;
  overflow: hidden
`

export const CardImage = styled.img`
  width: 100%;
  height: 60%;
  aspect-ratio: auto;
`

export const CardDetails = styled.div`
  width: 100%;
  height: 40%;
  padding: 15px;
  box-sizing: border-box
`

export const CardTitle = styled.h2`
  display: block;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
`

export const CardCategory = styled.div`
  display: block;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
`

export const CardDescription = styled.div`
  display: block;
  font-size: 10px;
  font-weight: 400;
  margin: 10px 0;
`

export const CardPrice = styled.div`
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0;
`

export const ProductAction = styled.button<{ action?: string }>`
  font-weight: 400;
  text-align: center;
  border: none;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  color: ${props => props.action === "delete" ? "#fff" : "#2b2a35"};
  background-color: ${props => props.action === "delete" ? "#dc3545" : "transparent"};
`