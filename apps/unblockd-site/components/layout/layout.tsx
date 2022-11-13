import Footer from "components/footer/footer"
import Header from "components/header/header"

/* eslint-disable-next-line */
export interface LayoutProps {}
function Layout(props) {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
