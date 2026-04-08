import { useRecoilState } from "recoil"
import { useState } from "react"
import userAtom from "../states/userAtom"

export default function Auth() {
 var [userName, setUser] = useRecoilState(userAtom)
 const [inputUserName, setInputUserName] = useState("")
 var [password,setPassword] = useState("")
function hanldLogin(){
    if(password===""){
        alert("Nhap mat khau")
        return ;
    }
    setUser({
      userName: inputUserName,
      loginState: true
    });
    
}
function hanldLogout(){
    setUser({
        userName:"",
        loginState:false
    })
    setInputUserName("")
    setPassword("")
}
  return (
<>
    <h1>Auth</h1>
    <label htmlFor="">Username:</label>
    <input type="text" value={inputUserName} onChange={e => {setInputUserName(e.target.value)}}/>
    <label htmlFor="">Password:</label>
    <input type="password" value={password} onChange={e => {setPassword(e.target.value)}}/>
    <button onClick={hanldLogin}>Login</button> <br />
    <button onClick={hanldLogout}>Log out</button>
</>    
  )
}
