import Header from "@/assets/components/Header";
import Footer from "@/assets/components/Footer";
import '@/assets/styles/Layout.scss';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;