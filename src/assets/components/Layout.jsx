import Header from "@/assets/components/Header";
import Footer from "@/assets/components/Footer";
import "@/assets/styles/Layout.scss";

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="main-wrapper">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
