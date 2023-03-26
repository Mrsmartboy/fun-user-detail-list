import {useState} from 'react'
  import UserProfile from './components/UserProfile'
import {Container,Header,SearchInput,ListContainer} from './styledApp'


const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]




const App=()=>{
  const [inputValue,setInputValue]=useState("")
   const [userDetailsList,setUserDetailsList] = useState(initialUserDetailsList)
  const onChangeInput =(event)=>{
    setInputValue(event.target.value)

  
  }

  const filteredResults =userDetailsList.filter(eachUser=>(
    eachUser.name.toLowerCase().includes(inputValue.toLowerCase())
  )) 



    





const onDeleteUser=(uniqueNo)=>{
  const filteredData = userDetailsList.filter(eachUser=>(
    eachUser.uniqueNo!== uniqueNo
  ))

  setUserDetailsList(filteredData)

 
}
  


return(
  <Container>
    <Header>UsersList</Header>
      <SearchInput type="search" value={inputValue} onChange={onChangeInput}/>
      <ListContainer>
         {filteredResults.map(eachUser=>(
          <UserProfile eachProfile={eachUser} key={eachUser.uniqueNo} deleteUser={onDeleteUser}/>
         ))}
      </ListContainer>
      
    
  </Container>
)

}
export default App