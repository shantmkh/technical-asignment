import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: #0000005c;
  top: 0;
  left: 0;
  z-index: 11;
`

export const ModalContent = styled.div`
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 10px;
  border-radius: 10px;
  height: max-content;
`

export const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px 0;
`