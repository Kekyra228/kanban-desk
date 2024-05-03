
import './App.css'
import { GlobalStyle } from './components/Global.styled'
import AppRoutes from './Routes'




function App() {
//  const [theme, changeTheme] = ThemeChange
//  const themeMode = theme === Светлая ? lightTheme : darkTheme;
  return (
    <>

      <GlobalStyle />

      <AppRoutes/>
   </>
  )
}

export default App
