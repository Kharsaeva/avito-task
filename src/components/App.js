import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Images from "./Images";
import {useDispatch} from "react-redux";
import {loadImages} from "../redux/actions";
import Modal from "./Modal";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadImages());
    }, []);

    const [modalActive, setModalActive] = useState(true);

  return (
      <div className="App">
          <Header />
          <Images setActive={setModalActive} />
          <Footer />
          <Modal active={modalActive} setActive={setModalActive} />
      </div>
  );
}

export default App;