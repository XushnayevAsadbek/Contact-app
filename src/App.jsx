import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./components/layout/layout.jsx";
import { ContactForm } from "./components/page/contact/contact-form.jsx";
import {Contact} from "./components/page/contact/contact.jsx"

const routes = createBrowserRouter([
  {
    path: '/',
   element:<Layout />,
   children:[
    {
      path: 'contact/:id',
      element: <Contact />
    },
    {
      path:'add',
      element:<ContactForm />,
    },
    {
      path:'edit',
      element:<ContactForm />,
    }
   ],
  },
]);


function App() {
  return (
  <>
  <RouterProvider router={routes} />
  </>
  )
}

export default App
