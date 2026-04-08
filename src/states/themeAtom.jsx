import {atom} from 'recoil'
 
const themeAtom = atom({
    key: 'themeAtom',
    default: localStorage.getItem("theme")||"light"
})

export default  themeAtom;
