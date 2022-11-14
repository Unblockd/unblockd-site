import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import { generateJSXMeshGradient } from 'meshgrad';


import { useEffect, useState } from 'react'

/* eslint-disable-next-line */
export interface LayoutProps {}
function Layout(props) {
  // Number of color stops
  const ELEMENTS = 7;
    const [isServer, setIsServer] = useState(true)
  const [history, setHistory] = useState([generateJSXMeshGradient(ELEMENTS)])
  const [index, setIndex] = useState(0)

    const handleNewGradient = () => {
    setIndex(history.length)
    setHistory([...history, generateJSXMeshGradient(ELEMENTS)])
  }

  useEffect(() => {
    setIsServer(false)
  }, [])
  return (
    <div
      className=""
      style={isServer ? {} : history[index]}
    >

      <div className="bg-white/80 dark:bg-slate-900/80 flex flex-col justify-between h-screen">
      <Header />
      {props.children}
      <Footer />
    </div>
    </div>
  );
}

export default Layout;
