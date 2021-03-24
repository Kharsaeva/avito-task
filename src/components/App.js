import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Images from './Images';
import { useDispatch } from 'react-redux';
import { loadImages } from '../redux/actions';
import Modal from './Modal';
import { Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, []);

  const [modalActive, setModalActive] = useState(false);

  return (
    <Route path="/:id?">
      <div className="App">
        <Header />
        <Images setActive={setModalActive} />
        <Footer />
        <Modal active={modalActive} setActive={setModalActive} />
      </div>
    </Route>
  );
}

export default App;
