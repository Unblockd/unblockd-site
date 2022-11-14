import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import { generateJSXMeshGradient } from 'meshgrad';


import { useEffect, useState } from 'react'

/* eslint-disable-next-line */
export interface LayoutProps {}
function Layout(props) {
  // Number of color stops
  const ELEMENTS = 5;
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
      className="flex flex-col justify-between h-screen"
      style={isServer ? {} : history[index]}
    >
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
