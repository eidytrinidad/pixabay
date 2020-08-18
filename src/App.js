import React,{useState} from 'react';
import './App.css';
import ContextProvider from './components/ContextProvider';
import Gallery from './components/Gallery';
import ModalGallery from './components/ModalGallery'

function App() {

  const [selectedImg, setSelectedImg] = useState(null)

  return (

    <ContextProvider>
      <Gallery setSelectedImg={setSelectedImg}/>
      {console.log(selectedImg)}
     {selectedImg &&  <ModalGallery  selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </ContextProvider>
  );
}

export default App;
