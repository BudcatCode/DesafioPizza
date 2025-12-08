import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container my-4">
        <h1 className="h3 mb-4">Register</h1>
        <RegisterPage />
      </main>
      <Footer />
    </>
  );
}
