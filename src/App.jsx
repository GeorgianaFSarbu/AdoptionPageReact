import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Menu, NotFound} from './components';

import {
  AddDog,
  DogList,
  Auth,
  Home,
  DogDetails,
  UpdateDog,
  About,
  Contact,
  Profil,
  AuthContextProvider,
  UpdateProfile
} from './features';



export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Menu />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/dogs" element={<DogList />} />
          <Route path="/dogs/add" element={<AddDog />} />
          <Route path="/dogs/:dogId" element={<DogDetails />} />
          <Route path="/dogs/:dogId/edit" element={<UpdateDog />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profilepage" element={<Profil />} />
          <Route path="/profilepage/edit" element={<UpdateProfile />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
