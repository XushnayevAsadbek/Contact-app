import { Route,  Routes } from "react-router-dom"
import { Layout } from "./components/layout/layout.jsx";
import { ContactForm } from "./components/page/contact/contact-form.jsx";
import { Contact } from "./components/page/contact/contact.jsx"
import React from "react";
function App() {

  const [users,setUsers] = React.useState([]);
  return (
    <>
      <Layout users={users} >
        <Routes >
          <Route path='contact/:id' element={<Contact users={users} />} />
          <Route path='add' element={<ContactForm setUsers={setUsers} />} />
          <Route path='edit' element={<ContactForm />} />

        </Routes>
      </Layout>
    </>
  )
}

export default App
