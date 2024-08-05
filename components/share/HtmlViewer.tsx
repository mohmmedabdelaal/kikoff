'use client';
import { useEffect } from 'react';
import Prism from 'prismjs';
import parse from 'html-react-parser';

import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-json';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

interface Props {
  data: string;
}
const HTMLviewer = ({ data }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="text-dark500_light700 markdown w-full min-w-full">
      {parse(data)}
    </div>
  );
};

export default HTMLviewer;
