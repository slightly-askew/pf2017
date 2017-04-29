import React from 'react';
import TypeText from '../../TypeText';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column-reverse nowrap;
  justify-content: flex-end;
  align-items: center;
  min-height: 85vh;
  width: 100vw;
  margin-top: 1.5em;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const IntroDisplayBox = styled.div`
  background-color: darkgrey;
  min-width: 10em;
  width: 16em;
  max-width: 90vw;
  min-height: 10em;
  height: 70vw;
  max-height: 16em;
  `

const TextWrapper = styled(TypeText)`
  font-size: 1.25rem;
  text-align: center;
  line-height: 1.4em;
`

const TextWithCtaWrapper = styled.div`
  margin-top: 1rem;
  @media (min-width: 600px) {
    margin-left: 1.5em;
    max-width: 45vw;
  }
`

const Intro = (props) => <Wrapper><TextWrapper>A product designer for
performance-oriented teams.</TextWrapper><IntroDisplayBox></IntroDisplayBox></Wrapper>

export default Intro;
