import { useState, useEffect } from 'react'
import './App.css'
import { useRecoilValue , useRecoilState } from 'recoil'
import counterAtom from './states/counterAtom'
import ComA from './components/ComA'
import ComB from './components/ComB'
import themeAtom from './states/themeAtom'
import Auth from './components/Auth'
import userAtom from './states/userAtom'

function App() {
  var [theme, setTheme] = useRecoilState(themeAtom);
  var user = useRecoilValue(userAtom)
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme",theme)
  }, [theme]);
  
  function hanldeChangeLightTheme(){
    setTheme("light")
  }
  function hanldeChangeDarkTheme(){
    setTheme("dark")
  }
  return (
    <>
    <div>
      {user.loginState === false ? (
        <>Bạn chưa đăng nhập</>
      ) : (
        <>Bạn đang đăng nhập với {user.userName}</>
      )}
    </div>
    <br /><br />
    <div>
      <input type="radio" name="theme" checked={theme === "light"} onChange={hanldeChangeLightTheme}/> Light
      <br />
      <input type="radio" name='theme' checked={theme === "dark"} onChange={hanldeChangeDarkTheme}/> Dark
    </div>
    <ComA/>
    <ComB/>
    <br /><br />
    <Auth/>
    </>
  )
}

export default App
