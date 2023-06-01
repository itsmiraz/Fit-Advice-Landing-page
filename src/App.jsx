import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LandingPage from "./Pages/LandingPage/LandingPage"
import Mainlayout from "./Layouts/MainLayout/Mainlayout"
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy"

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        {
          path: '/',
          element: <LandingPage />

        },
        {
          path: '/privacyPolicy',
          element: <PrivacyPolicy />

        }
      ]
    }


  ])

  return (
    <div className="max-w-[1920px] scroll-smooth  mx-auto relative transition-all duration-300">
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
