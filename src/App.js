import { useState } from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  const [flag, setFlag] = useState(false);
  const handleClick = () => {
    setFlag(!flag);
    console.log(flag);
  };
  return (
    <AppStyle>
      <div className="boxes">
        <div
          className={` ${flag ? "top-left top-left-animation " : " top-left"}`}
        >
          <p>15</p>
        </div>
        <div
          className={` ${
            flag ? "top-right top-right-animation " : " top-right"
          }`}
        >
          <p>25</p>
        </div>
        <div
          className={` ${
            flag ? "bottom-left bottom-left-animation " : " bottom-left"
          }`}
        >
          <p>18</p>
        </div>
        <div
          className={` ${
            flag ? "bottom-right bottom-right-animation " : " bottom-right"
          }`}
        >
          <p>30</p>
        </div>
      </div>
      <div className="button">
        <button onClick={handleClick}>{flag ? "Reset" : " Shuffle"}</button>
      </div>
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  color: white;
  margin-top: 2rem;
  .boxes {
    position: relative;
    width: 60%;
    height: 80vh;
    border: 2px solid #000000;
    transform: translateX(33%);
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    .top-left {
      width: 300px;
      height: 300px;
      background-color: #000000;
      position: absolute;
      top: 0;
      left: 0;
    }
    .top-left-animation {
      animation: top-left 5s 4;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .top-right {
      width: 300px;
      height: 300px;
      background-color: #4f86f7;
      position: absolute;
      top: 0;
      right: 0;
    }
    .top-right-animation {
      animation: top-right 5s 4;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .bottom-left {
      width: 300px;
      height: 300px;
      background-color: #374f6b;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .bottom-left-animation {
      animation: bottom-left 5s 4;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
    .bottom-right {
      width: 300px;
      height: 300px;
      background-color: #002147;
      position: absolute;
      bottom: 0;
      right: 0;
    }
    .bottom-right-animation {
      animation: bottom-right 5s 4;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  }
  .button {
    display: flex;
    justify-content: center;
    button {
      background-color: #465e98;
      border: none;
      padding: 0.5rem 2.25rem;
      color: white;
      border-radius: 1rem;
      font-size: 1.25rem;
      margin-top: 3rem;
    }
  }
  @keyframes top-left {
    0% {
      left: 0;
      top: 0;
    }

    100% {
      left: 73%;
      top: 60%;
    }
  }
  @keyframes top-right {
    0% {
      right: 0;
      top: 0;
    }

    100% {
      right: 73%;
      top: 60%;
    }
  }
  @keyframes bottom-left {
    0% {
      left: 0;
      bottom: 0;
    }

    100% {
      left: 73%;
      bottom: 60%;
    }
  }
  @keyframes bottom-right {
    0% {
      right: 0;
      bottom: 0;
    }

    100% {
      right: 73%;
      bottom: 60%;
    }
  }
`;
