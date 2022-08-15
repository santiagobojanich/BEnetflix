import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { SearchContent } from "../actions"
import styles from '../styles/Search.module.css'

export const SearchBar = () => {
  
const user= useSelector(state => state.user)
const dispatch = useDispatch()
const token = useSelector(state => state.token)

const accesstocken ={
    token: token
}

const [input, setInput] = useState("")

const handleInput = (e) => {
  setInput(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input,accesstocken)
    dispatch(SearchContent(input,accesstocken))
    
}

return (
 <div className={styles.search}> 
  {!user? null : 
  <div>
  <input type="text" onChange={handleInput} value={input.value} placeholder="Search..." />  
  <button type="submit" className={styles.confirm} onClick={handleSubmit} > Search </button>
  <button className={styles.reset}onClick={() => window.location.reload()}> Reset Content</button>
  </div>
  } 
 </div>
)
 

} 