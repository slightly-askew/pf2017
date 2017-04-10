//@flow

import React from 'react';
import styled from 'styled-components';

const bubblePoints = [
  {"M": [0, 30]},
  {"C": [[0,23.375],[5.370,18],[12,18]]},
  {"L": [36,18]},
  {"L": [108,18]},
  {"L": [126,18]},
  {"C": [[141.100,18],[135.268,0],[144,0]]},
  {"C": [[152.731,0],[147.100,18],[162,18]]},
  {"L": [168,18]},
  {"C": [[174.624,18],[180,23.376],[180,30]]},
  {"L": [180,35]},
  {"L": [180,36]},
  {"L": [180,42]},
  {"C": [[180,48.624],[174.617,54],[168,54]]},
  {"L": [108,54]},
  {"L": [36,54]},
  {"L": [12,54]},
  {"C": [[5.37257721,54],[0,48.624],[0,42]]},
  {"L": [0,36]},
  {"L": [0,35]},
  {"L": [0,30]},
  {"Z": []}
]

const pointsGen = (oldPointsAry, { xOffset, yOffset }, xSplit = 36, ySplit = 35) => {

  const getKeyValuePairs = oldPointsAry.reduce((a: Array<number>, p: Object) => a.concat(Object.entries(p)), []);

  const adjustX = (x) => x > xSplit ? x + xOffset : x;
  const adjustY = (y) => y > ySplit ? y + yOffset : y;

  const newValues = (pairs) => pairs.map((p, i) => {
    switch (p[0]) {
      case "C":
        return `C${p[1].map(c => `${adjustX(c[0])},${adjustY(c[1])}`).join(' ')}`;
      case ("L"):
        return `${p[0]}${adjustX(p[1][0])} ${adjustY(p[1][1])}`;
      case ("M"):
        return `${p[0]}${adjustX(p[1][0])} ${adjustY(p[1][1])}`;
      default:
        return `${p[0]}`;
    }
  });

  return newValues(getKeyValuePairs).join(' ');
};

const BubbleSvg = styled.svg.attrs({
  className: "bubble",
  viewBox: props => {
    const { width, height } = props.bubbleData;
    return `0 0 ${width} ${height}`;
  },
})`
  fill: white;
  height: calc(${props => props.bubbleData.height} * 0.0583em);
`

const BubblePath = styled.path.attrs({
  className: "bubble__path",
  d: props => pointsGen(bubblePoints, props.bubbleData),
  transform: props => `rotate(${props.position === "below" ? 0 : 180})`
})`
  fill: white;
`

const MagicCircle = styled.circle.attrs({
  className: "bubble__circle",
  cx: props => props.position === 'below' ? props.bubbleData.width - 36 : 36,
  cy: props => props.position === 'below' ? 0 : props.bubbleData.height,
  r: props => Math.max(props.bubbleData.width * 2,props.bubbleData.height * 2),
  clipPath: "url(#bubbleMask)"
})`
  fill: blue;
  transform: scale(0);
  will-change: transform;
  transition: transform 0.2s ease-out 0.1s;
`

const GText = styled.g`
  font-size: 18px;
  font-family: 'Fira Mono';
  fill: black;
  letter-spacing: -0.8px;
`

const GItem = styled.g`
  cursor: pointer;
  &:hover {
    & rect {
      transform: scaleX(1);
    }
  }
`

const Underline = styled.rect`
  height: 2px;
  fill: black;
  transform-origin: center left;
  transform: scaleX(0);
  will-change: transform;
  transition: transform 0.2s ease-out;
`

const ListItems = (props) => {
  const startingPos = props.position === 'below' ? 58 : 36;
  const textHeight = 36;
  const middleMargin = 9;

  const yPos = (i) => startingPos + (i * textHeight) + (i * middleMargin);

  const makeTextElements = (props) => {
    if(props.children) {
      return (
        <GText>
          {props.children.map((child, i) => {
            return (
              <GItem>
                <text key={i+1} x="36" y={yPos(i)}>{child}</text>
                <Underline x="36" y={yPos(i)+4.5} width={child.length * 10}></Underline>
              </GItem>
            )})}
        </GText>
      )
    }
    return null;
  }

  return makeTextElements(props.bubbleData);
}

const Bubble = (props: Object) => {
  console.log(props.bubbleData);
  const bubbleData = props.bubbleData;
  return(
    <BubbleSvg {...props}>
      <mask id="bubbleMask">
        <BubblePath bubbleData={bubbleData} position={props.position}/>
      </mask>
      <MagicCircle bubbleData={bubbleData} position={props.position}/>
      <ListItems bubbleData={bubbleData} position={props.position} />
    </BubbleSvg>
  )
}

export default Bubble;
