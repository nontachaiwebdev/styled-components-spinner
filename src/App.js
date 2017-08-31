import React, { Component } from 'react'
import './App.css'
import styled, {css, keyframes} from 'styled-components'

class App extends Component {
  render() {
    return (
      <Spinner />
    );
  }
}

const Spinner = () => (
  <CircleContainer>
    <Circle />
    <Circle rotate='30deg' delayAnimation='-1.1s' />
    <Circle rotate='60deg' delayAnimation='-1s' />
    <Circle rotate='90deg' delayAnimation='-0.9s' />
    <Circle rotate='120deg' delayAnimation='-0.8s' />
    <Circle rotate='150deg' delayAnimation='-0.7s' />
    <Circle rotate='180deg' delayAnimation='-0.6s' />
    <Circle rotate='210deg' delayAnimation='-0.5s' />
    <Circle rotate='240deg' delayAnimation='-0.4s' />
    <Circle rotate='270deg' delayAnimation='-0.3s' />
    <Circle rotate='300deg' delayAnimation='-0.2s' />
    <Circle rotate='330deg' delayAnimation='-0.1s' />
  </CircleContainer>
)

const circleAnimation = keyframes`
0%, 39%, 100% { 
  opacity: 0; 
}
40% { 
  opacity: 1; 
}
`

const CircleContainer = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
`

const Circle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(${props => props.rotate||0});
  &:before{
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #333;
    border-radius: 100%;
    animation: ${circleAnimation} 1.2s infinite ease-in-out both;
    animation-delay: ${props => props.delayAnimation};
  }
`

export default App;
