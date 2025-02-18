import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import HomeLayout from './layouts/HomeLayout'
import HomeView from './views/HomeView'
import PeopleView from './views/PeopleView'
import OnePersonView from './views/OnePerson/OnePersonView'
import OnePersonAdd from './views/OnePerson/OnePersonAdd'
import OnePersonAddPractise from './views/OnePerson/OnePersonAddPractise'
import OnePersonEdit from './views/OnePerson/OnePersonEdit'
import ContactView from './views/ContactView'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route index element={<HomeView />} />
            <Route path='people' element={<PeopleView />} />
            <Route path='people/:id' element={<OnePersonView />} />
            <Route path='people/add' element={<OnePersonAdd />} />
            <Route path='people/edit/:id' element={<OnePersonEdit />} />
            <Route path='people/add-practise' element={<OnePersonAddPractise />} />
            <Route path='contact' element={<ContactView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
