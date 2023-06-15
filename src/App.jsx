import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LandingPage from "./Pages/LandingPage/LandingPage"
import Mainlayout from "./Layouts/MainLayout/Mainlayout"
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy"
import TermNConditions from "./Pages/TermsNConditions/TermNConditions";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/privacyPolicy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/termsNconditions",
          element: <TermNConditions />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <div className="max-w-[1920px] scroll-smooth px-10 mx-auto relative transition-all duration-300">
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
