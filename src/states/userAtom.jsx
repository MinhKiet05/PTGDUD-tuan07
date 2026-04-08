import { atom } from "recoil";

const userAtom =atom({
    key:"userAtom",
    default:{
        userName:"",
        loginState:false
    }
})
export default userAtom;