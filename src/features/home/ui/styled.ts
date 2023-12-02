import styled from "@emotion/styled";
import { mq } from "utils/constants/styleConstants";

export const ProductsContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;

  ${mq.lg.max} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${mq.md.max} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mq.sm.max} {
    grid-template-columns: repeat(1, 1fr);
  }
`