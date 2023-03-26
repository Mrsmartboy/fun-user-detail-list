import styled from 'styled-components'

export const UserProfileContainer = styled.li`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   margin: 10px;

`

export const DescriptionContainer=styled.div`
  display: flex;
  flex-direction: column;

`

export const ProfilePic=styled.img`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  margin-right: 10px;
`

export const Name=styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin-top: 0px;
    
`
export const Role = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin: 0px;
`

export const DeleteButton=styled.button`
   background-color: transparent;
   border: none;
   outline: none;
   border-radius: 30px;
   cursor: pointer;

`

export const Image=styled.img`
    width: 20px;
    height: 20px;
   margin: 5px;
`