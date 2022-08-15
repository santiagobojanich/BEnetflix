import { NavLink,  useParams} from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from '../styles/Create.module.css'
import { updateContent } from "../actions"
import Swal from "sweetalert2"

export const UpdateContent = () =>{

const id = useParams()
const dispatch = useDispatch()    
const token = useSelector(state => state.token)
const user = useSelector(state => state.user)
const rol = useSelector(state=> state.rol)

const accesstoken = {
    token: token
}

const [input, setInput] = useState({
    name: "",
    image: "",
    trailer: "",
    description: "",
  });

  const handleInput = (e) => {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(id.id, input, accesstoken)
   
    dispatch(updateContent(id,input, accesstoken)).then(()=>{
     Swal.fire('Content updated')
    }).then(() => {
  
    })
   }

if(rol !== 'Admin') return(
    <p style={{color:"red"}}> ONLY ADMIN CAN ACCESS HERE </p>
)

 return (
    <div>
        <div>
      <div className={styles.title}> 
      <p> EDIT CONTENT </p>
      </div>
      <div className={styles.back_container}>
      <NavLink to="/home"> <button className={styles.back}> BACK </button>  </NavLink>
       </div>

      <div className={styles.form_container}>
      <form className={styles.form_box} onSubmit={handleSubmit}>
        <div className={styles.form_labels}>
        <label> Name</label>
        <input type="text" name="name" value={input.name} onChange={handleInput} placeholder="Insert name..." />
        </div>
        <div className={styles.form_labels}>
        <label> Image </label>
        <input type="text" name="image" value={input.image} onChange={handleInput} placeholder="Insert image URL..." />
        </div>
        <div className={styles.form_labels}>
        <label> Trailer </label>
        <input type="text"name="trailer" value={input.trailer} onChange={handleInput} placeholder="Insert Youtube URL trailer..."
        />
        </div>
        <div className={styles.form_labels}>
        <label> Description </label>
        <input
          type="text" name="description" value={input.description} onChange={handleInput} placeholder="Insert description..."/>
         </div> 
        <div className={styles.buttonContainer}>
        <button type="submit" onClick={handleSubmit} disabled={(!input.name|| !input.image || !input.trailer || !input.description ? true : false)} > UPDATE </button>
       </div>     
      </form>
       </div>
    </div>
    </div>
 )
}