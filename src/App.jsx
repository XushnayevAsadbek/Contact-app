import { Route,  Routes } from "react-router-dom"
import { Layout } from "./components/layout/layout.jsx";
import { ContactForm } from "./components/page/contact/contact-form.jsx";
import { Contact } from "./components/page/contact/contact.jsx"
function App() {
  return (
    <>
      <Layout >
        <Routes >
          <Route path='contact/:id' element={<Contact />} />
          <Route path='add' element={<ContactForm />} />
          <Route path='edit' element={<ContactForm />} />

        </Routes>
      </Layout>
    </>
  )
}

export default App
