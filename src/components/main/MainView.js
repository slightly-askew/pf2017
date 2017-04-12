import styled, { css } from 'styled-components';

export default styled.div`
  position: relative;
  background: #000;
  transform: translateX(0px);
  transition: transform 0.4s;
  will-change: transform;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${props => {
    if (props.menuIsActive) {
      return css`
        transform: translateX(70vw);
        z-index: 10;
      `
    }
  }}
`
