import styled from "@emotion/styled";
import { mq } from "utils/constants/styleConstants";

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

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`