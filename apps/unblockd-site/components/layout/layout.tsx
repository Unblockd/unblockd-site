import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import { generateJSXMeshGradient } from 'meshgrad';

import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface LayoutProps {}
function Layout(props) {
  // Number of color stops
  const ELEMENTS = 7;
  const [isServer, setIsServer] = useState(true);
  const [history, setHistory] = useState([generateJSXMeshGradient(ELEMENTS)]);
  const [index, setIndex] = useState(0);

  const handleNewGradient = () => {
    setIndex(history.length);
    setHistory([...history, generateJSXMeshGradient(ELEMENTS)]);
  };

  useEffect(() => {
    setIsServer(false);
  }, []);
  return (
    <div className="" style={isServer ? {} : history[index]}>
      <div className="bg-my-light-component/70 dark:bg-slate-900/70 flex flex-col justify-between min-h-screen">
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
