import { useRecoilValue } from "recoil"
import counterAtom from "../states/counterAtom"


export default function ComA() {
    var value = useRecoilValue(counterAtom)
  return (
    <h1>ComA: {value}</h1>
  )
}
