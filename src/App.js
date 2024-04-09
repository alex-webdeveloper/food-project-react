import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Recipe from './pages/Recipe';
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";

function App() {
    
    return (
        <>
            {/* <ContextProvider>
                <Shop/>
            </ContextProvider> */}
                <BrowserRouter basename='/food-project-react'>
                    <Header />
                    <main className="container content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contacts" element={<Contact />} />
                            <Route path="/category/:name" element={<Category />} />
                            <Route path="/meal/:id" element={<Recipe />} />
                            <Route path="/*" element={<NotFound />} />
                        </Routes>
                    </main>
                </BrowserRouter>
            <Footer/>
        </>

    );
}

export default App;