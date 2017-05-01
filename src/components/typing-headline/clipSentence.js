//@flow
import renderFullSentence from './renderFullSentence';
import { compose } from 'recompose';

export default function (
    children: string,
    numberReq: number,
    LetterComponent: any
  ): React$Component<any,any,any>[] {

  const requiredLetters = (n: number) => (ary: any[]) => ary.slice(0,n);
  const sentenceNodes = (ary: string[]): React$Component<any,any,any>[] => renderFullSentence(ary, LetterComponent);

  const makeSentence = compose(
    requiredLetters(numberReq),
    sentenceNodes
  )
  
  return makeSentence(children);
}
