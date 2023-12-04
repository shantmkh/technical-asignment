import styled from "@emotion/styled";

export const UserContainer = styled.div`
  max-width: 700px;
  width: 100%;
  padding: 50px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #ccc;
  margin: 0 15px;
`

export const UserWrapper = styled.div`
  width: 150px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(-50%);
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 4;
  box-shadow: 0px 5px 50px 0px #6c44fc, 0px 0px 0px 7px rgba(107, 74, 255, 0.5)
`

export const UserImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

export const UserName = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #6944ff;
  margin-bottom: 15px;
`

export const UserEmail = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #324e63;
  margin-bottom: 15px;
`

export const UserAddress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`