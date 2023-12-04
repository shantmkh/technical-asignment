import styled from "@emotion/styled";

export const Tr = styled.div`
  display: flex;
  justify-content: flex-start;
  border: 1px solid #ccc;
  width: 100%;
  margin-top: -1px;
  transition: .3s;
  background: #fff;

  :hover {
    box-shadow:0 20px 25px -5px #0000001a,0 8px 10px -6px #0000001a;
    transform: scale(1.01);
  }
`

export const Th = styled.div<{ width: string }>`
  display: flex;
  align-item: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  width: ${props => props.width};
  cursor: pointer;
  padding: 15px 20px;
  user-select: none;

  & > :first-of-type {
    margin-right: 10px;
  }
`

export const Td = styled.div<{ width: string }>`
  display: flex;
  align-item: center;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  width: ${props => props.width};
  cursor: pointer;
  padding: 15px 20px;
  user-select: none;

  & > :first-of-type {
    margin-right: 10px;
  }
`

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`