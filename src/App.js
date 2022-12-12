import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import theme from './theme/Theme';
import Footer from './components/Footer';
import AnimePage from './pages/AnimePage';
import AnimePagesById from './pages/AnimePagesById';
import NotFound from './pages/NotFound';
import MangaPage from './pages/MangaPage';
import MangaPageById from './pages/MangaPageById';
import LoadPages from './pages/LoadPages';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar ColorModeSwitcher={ColorModeSwitcher} />
      <LoadPages />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/anime' element={<AnimePage />} />
          <Route path='/manga' element={<MangaPage />} />
          <Route path='/manga/:manga_id' element={<MangaPageById />} />
          <Route path='/anime/:anime_id' element={<AnimePagesById />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
