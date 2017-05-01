//@flow

import React from 'react';
import { compose } from 'recompose';

export default function (children: string, LetterComponent: any) {
  const sentenceAry = (str: string): string[] => str.split('');

  const formatSpaceToHtml = (s: string) => {
    console.log(s === " " ? '&nbsp;' : s);
    return s === " " ? '&nbsp;' : s
  };

  const addHtmlSpaces = (ary: string[]): string[] => ary.filter(formatSpaceToHtml);

  const makeLetter = (Comp: any): any => (
    (letter: string, key: number): any => (
      React.cloneElement(<Comp/>, {key: key}, letter)));

  const newLetter = makeLetter(LetterComponent);

  const selectLetter = (a: string, i: number): React$Component<any,{key : number},string> => (
    newLetter(a, i + 1)
  );

  const renderLetters = (ary: string[]): React$Component<any,{key : number},string>[] => (
    ary.map(selectLetter));

  const renderFullSentence = compose(
    renderLetters,
    addHtmlSpaces,
    sentenceAry
  )

  return renderFullSentence(children);
}
