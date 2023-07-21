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

  let [modal, setModal] = useState(false);
  let [modalTitleIndex, setModalTitleIndex] = useState(0);

  let [input, setInput] = useState('');




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
              <h4>{ a } <span className="likeBtn" onClick={()=>{
                let eachLike = [...like];
                eachLike[i] += 1;
                setLike(eachLike);
                }}>👍 {like[i]}</span></h4>
              <p>2월 17일 발행</p>
              <span className="readMore" onClick={()=>{
                setModal(!modal);
                setModalTitleIndex(i);
              }}>Read More</span>
              <br /><br />
              <div><button onClick={() => {
                let newTitle = [...title];
                newTitle.splice(i, 1);
                setTitle(newTitle);
                let newLike = [...like];
                newLike.splice(i, 1);
                setLike(newLike);
              }}>Delete</button></div>    
            </div>
            </>
          )
        })
      }
      <input type="text" onChange={(e) => {
        setInput(e.target.value);
      }} />
      <button onClick={() => {
        if(input === '') {
          return;
        }
        let newTitle = [...title];
        newTitle.unshift(input);
        setTitle(newTitle);
        let newLike = [...like];
        newLike.unshift(0);
        setLike(newLike);
        document.querySelector('input').value = '';
        setInput('');
      }}>Upload</button>

      {modal ? <Modal title={title[modalTitleIndex]}/> : null}

   </div>
  )
  
}

export default App;
