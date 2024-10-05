import { useEffect } from 'react';
import './App.css';

// @ts-ignore
import * as yoastseo from '@hunghg255/yoastseo';

function App() {
  useEffect(() => {
    console.log({
      yoastseo,
    });

    const paper = new yoastseo.Paper('Text to analyze', {
      keyword: 'analyze',
    });

    const researcher = new yoastseo.languageProcessing.AbstractResearcher(paper);
    console.log(researcher.getResearch('wordCountInText'));
  }, []);

  return (
    <div className='App'>
      <input type='text' />
    </div>
  );
}

export default App;
