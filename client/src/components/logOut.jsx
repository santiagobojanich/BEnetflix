import { useSelector } from "react-redux"
import { Logout } from "../actions"
import { useDispatch } from "react-redux"
import Swal from "sweetalert2"

export const LogOut = () => {
const dispatch = useDispatch()
const username = useSelector(state=> state.user)

const handleLogOut = (e) => {
    e.preventDefault()
    Swal.fire({title: 'Sure you want to exit?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
    }).then((result) => {
      if(result.isConfirmed) {
          dispatch(Logout)
          window.location.reload()
          window.location.assign("http://localhost:3000/")
       }} )
    
}
 
    return (

    <div>
        <span> User:{username} </span>
        <button onClick={handleLogOut}> LogOut </button>
    </div>
)

}