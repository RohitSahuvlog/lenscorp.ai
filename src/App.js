import './App.css';
import "./47c747d98712b950.css"
import "./6a76b63ca976b0a2.css"
import Navbar from './component/navbar';
import AboutPage from './component/NewAbout';
import BlogSection from './component/NewBlog';
import ClientSection from './component/NewClient';
import NewContact from './component/NewContact';
import NewFigures from './component/NewFigures';
import Footer from './component/NewFooter';
import Newhero from './component/newhero';
import FAQSection from './component/NewQuestions';
import Services from './component/NewServices';
import SolutionsComponent from './component/NewSolutions';
import NewVision from './component/NewVision';
import TrueAI from './component/TrueAI';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Newhero />
      <AboutPage />
      <Services />
      <TrueAI />
      <SolutionsComponent />
      <NewVision />
      <BlogSection />
      <ClientSection />
      <NewFigures />
      <FAQSection />
      <NewContact />
      <Footer />
    </div>
  );
}

export default App;
