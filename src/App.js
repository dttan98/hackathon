// Import necessary dependencies
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import Size from './png/size.png'
import Crust from './png/curst.png'
import Topping from './png/topping.png'
import { useState } from 'react';

const StyledButtonSize = styled.div`
  display: flex;
  width: 85px;
  height: 45px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  ${p => p.choose && 'background: red'}
`

// Define your components for different routes
const Home = () => <h1>Welcome to the Home page!</h1>;
const Feedback = () => {
  return (
    <div>
      <div>Send a feedback</div>
      <input />
      <button>Send</button>
    </div>
  )
};
const Order = () => <h1>This is the Order page.</h1>;
const Game = () => {
  const [showSizePng, setShowSizePng] = useState(0)
  const [showCrustPng, setShowCurstPng] = useState(0)
  const [showTopping, setShowToppingPng] = useState(0)
  const [page, setPage] = useState(1)
  const Dropdown = (onChangeDrop) => {
    return (
      <select onChange={(e) => onChangeDrop(e.target.value)}>
        <option  value="option1">tomato</option>
        <option value="option2">tomato</option>
        <option value="option3">tomato</option>
      </select>
    );
  };
  const DropdownCheese = (onChangeDrop) => {
    return (
      <select onChange={(e) => onChangeDrop(e.target.value)}>
        <option  value="option1">tomato</option>
        <option value="option2">tomato</option>
        <option value="option3">tomato</option>
      </select>
    );
  };
  return (
    <div>
      <div>Playing a game</div>
      <div style={{width: 500, height: 800}}>
        <div style={{height: 150}}>
          {page === 1 ? (
            <div>
              <h3>1. Select size</h3>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <StyledButtonSize choose={showSizePng === 1} onClick={() => {setShowSizePng(1)}}>Small</StyledButtonSize>
                <StyledButtonSize choose={showSizePng === 2} onClick={() => {setShowSizePng(2)}}>Medium</StyledButtonSize>
                <StyledButtonSize choose={showSizePng === 3} onClick={() => {setShowSizePng(3)}}>Large</StyledButtonSize>
              </div>
            </div>
          ): <></>}
          {page === 2 ? (
            <div>
              <h3>2. Select curst</h3>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <StyledButtonSize choose={showCrustPng === 1} onClick={() => {setShowCurstPng(1)}}>Classic</StyledButtonSize>
                <StyledButtonSize choose={showCrustPng === 2} onClick={() => {setShowCurstPng(2)}}>Thin</StyledButtonSize>
                <StyledButtonSize choose={showCrustPng === 3} onClick={() => {setShowCurstPng(3)}}>Gluten-free</StyledButtonSize>
              </div>
            </div>
          ): <></>}
          {page === 3 ? (
            <div>
              <h3>3. Select Topping</h3>
              <div>
                <div style={{display: 'flex', marginBottom: 20}}>
                  <div style={{marginRight: 20}}>Sauce</div>
                  <Dropdown />
                </div>
                <div style={{display: 'flex'}}>
                  <div style={{marginRight: 13}}>Cheese</div>
                  <Dropdown />
                </div>
              </div>
            </div>
          ): <></>}
          
        </div>
        <div style={{height: 400}}>
        {page === 1 ? (
            <div>
              {showSizePng ? <img src={Size} alt="pizza"/> : <></>}
            </div>
          ): <></>}
          {page === 2 ? (
            <div>
             {showCrustPng ? <img src={Crust} alt="pizza"/> : <img src={Size} alt="pizza"/>}
            </div>
          ): <></>}
          {page === 3 ? (
            <div>
             <img src={Topping} alt="pizza"/>
            </div>
          ): <></>}
        </div>
        <button onClick={() => {setPage((current) => {
          let currentPage = current
          if (currentPage === 1) {
            setShowSizePng(0)
          }
          if (currentPage === 2) {
            setShowCurstPng(0)
          }
          if (currentPage === 4) {
            setShowToppingPng(0)
          }
          currentPage = currentPage + 1
          return currentPage
        })}}>Next</button>
      </div>
    </div>
  )
}

// Create your main component with routing configuration
const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/order">Make an order</Link>
          </li>
          <li>
            <Link to="/feedback">Leave a feedback</Link>
          </li>
          <li>
            <Link to="/game">Win a game</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/game" element={<Game />} />
        <Route path="/*" element={<Navigate to="/" />} /> {/* Redirects to Home for unknown routes */}
      </Routes>
    </Router>
  );
};

export default App;