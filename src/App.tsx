import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import "./App.css";
import { ProductScreenshots } from "./components/ProductScreenShot";
import { RequestDemo } from "./components/RequestDemo";
import { Bounce, ToastContainer } from "react-toastify";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Wait for the page to fully load
    setTimeout(() => {
      // Get the hash from the URL (e.g., "#request-demo")
      const hash = window.location.hash;
      if (hash) {
        // Find the element with that ID and scroll to it
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 100); // Delay to ensure the DOM is fully loaded
  }, []);
  return (
    <>
      <ToastContainer
        transition={Bounce}
        theme="dark"
        position="top-right"
        autoClose={3000}
      />

      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      {/* <Testimonials /> */}
      <ProductScreenshots />
      {/* <Team /> */}
      <Pricing />
      <RequestDemo />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
