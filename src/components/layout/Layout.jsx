import NavBar from "@/shared/NavBar";
import SmoothScroll from "./SmoothScroll";
import Footer from "@/shared/Footer";

const Layout = ({ children }) => {
  return (
    <SmoothScroll>
      <NavBar />
      {children}
      <Footer />
    </SmoothScroll>
  )
}

export default Layout;