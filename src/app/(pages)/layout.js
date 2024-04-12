import Footer from "../ui/footer/footer";
import Navbar from "../ui/header/navbar";


export default function Layout({ children }) {
    return (
      <>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </>
    )
  }