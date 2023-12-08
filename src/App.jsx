import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routes from "./routes/routes"
import { UserAuth } from "./context/UserAuth"
const router = createBrowserRouter(routes)
import { useState } from "react"
import "./style/css/main.css"
import store from './redux/store/store'
import { Provider } from "react-redux"

function App() {
  
  const [isLogin, setIsLogin] = useState({})

  return (
    <>
    <Provider store={store}>
    <UserAuth.Provider value={{isLogin, setIsLogin}}>
    <RouterProvider router={router}/>
  </UserAuth.Provider>
  </Provider>
  {/* document.getElementById('root') */}
  </>
  )
}

export default App
