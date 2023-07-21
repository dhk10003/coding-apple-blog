import "./App.scss";
import { useState } from "react";
import Modal from './Modal';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학', '리액트 독학']);

  let likeArr = [];
  title.map((a, i) => {
    likeArr[i] = 0;
  });
  let [like, setLike] = useState(likeArr);

  let modalArr = [];
  title.map((a, i) => {
    modalArr[i] = false;
  });
  let [modal, setModal] = useState(modalArr);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>My Blog</h4>
      </div>

      {
        title.map((a, i) => {
          return (
            <>
            <div className="list" key={i}>
              <h4>{ a } <span onClick={()=>{
                let eachLike = [...like];
                eachLike[i] += 1;
                setLike(eachLike);
                }}>👍 {like[i]}</span></h4>
              <p>2월 17일 발행</p>
              <span onClick={()=>{
                let eachModal = [...modal];
                eachModal[i] = !eachModal[i];
                setModal(eachModal);
              }}>Read More</span>
            </div>
            {modal[i] ? <Modal title={a}/> : null}
            </>
          )
        })
      }

   </div>
  )
  
}

export default App;
