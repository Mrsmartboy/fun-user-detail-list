import {UserProfileContainer,ProfilePic,Name,Role,DescriptionContainer,DeleteButton,Image} from './styled'

const UserProfile=(props)=>{
    const {eachProfile,deleteUser}=props
     const {imageUrl,name,role,uniqueNo}   =eachProfile 

     const onDeleteUser=()=>{
        deleteUser(uniqueNo)
     }

    return(
        <UserProfileContainer>
            
            <ProfilePic src={imageUrl}  alt="profile"/>
            <DescriptionContainer>
                <Name>{name}</Name>
                <Role>{role}</Role>
                </DescriptionContainer>
           
                <DeleteButton type="button">
        <Image src="https://assets.ccbp.in/frontend/react-js/cross-img.png" alt="cross" onClick={onDeleteUser}/>
      </DeleteButton>
             
        </UserProfileContainer>
    )

}

export default UserProfile