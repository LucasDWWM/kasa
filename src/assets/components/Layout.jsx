import Header from "@/assets/components/Header";
import Footer from "@/assets/components/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;