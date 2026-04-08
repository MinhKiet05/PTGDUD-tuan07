import { useRecoilState } from "recoil"
import counterAtom from "../states/counterAtom"


export default function ComB() {
    var [value, setValue] = useRecoilState(counterAtom)
    function handleTang(){
        setValue(value+1)
    }  
    function handleGiam(){
        setValue(value-1)
    }  
  return (
    <div> 
        <p>ComB:</p>
        <button onClick={handleTang}>Tang 1</button>
        <button onClick={handleGiam}>Giam 1</button>
    </div>
  )
}
