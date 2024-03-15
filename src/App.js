// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/home"; // Assuming the home page is in 'pages/home.js'
import Contact from "./pages/contact";
import About from "./pages/about";
import Courses from "./pages/courses";
import Footer from "./components/footer";
import Testimonials from "./page/testimonial"; // Corrected 'page' to 'pages'
import FAQs from "./pages/faqs";
import TermsAndConditions from "./page/termsandconditions";
import PrivacyPolicy from "./page/privacypolicy";
import RefundPolicy from "./page/refundpolicy";
import Navbar from "./components/Navbar";
import RegistrationForm from "./page/registrationForm";
import CourseDetails from "./page/courseDetails";
import FeedbackForm from "./page/feedbackForm";
import Login from "./page/login";
import WhyUs from "./page/whyUs";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/courseDetails" element={<CourseDetails />} />
        <Route path="/feedbackForm" element={<FeedbackForm />} />
        <Route path="/whyus" element={<WhyUs />} />
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
