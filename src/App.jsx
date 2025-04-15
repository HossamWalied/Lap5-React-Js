// import Header from "./components/Header"
// import ProductList from './pages/ProductsList'
// import ProductCounter from './pages/ProductCounter'
// import Cart from "./pages/Cart"
// import NotFound from "./pages/NotFound"
// import Register from "./pages/Register"
// import Settings from "./pages/Settings"
import { BrowserRouter, Route, Routes } from "react-router"
import ThemeContext from "./contexts/Theme"
import { lazy, Suspense, useState } from "react"
import LangContext from "./contexts/Language"
import Loading from "./components/Loading/Loading"
const Header = lazy(() => import('./components/Header'))
const ProductList = lazy(() => import('./pages/ProductsList'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const ProductCounter = lazy(() => import('./pages/ProductCounter'))
const Cart = lazy(() => import('./pages/Cart'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Register = lazy(() => import('./pages/Register'))
const Settings = lazy(() => import('./pages/Settings'))




function App() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('en');


  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LangContext.Provider value={{ lang, setLang }} >
          <Header />
          <div className="container my-5">
            <Suspense fallback={(<Loading />)}>
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product-details/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/Counter" element={<ProductCounter />} />
                <Route path="/register" element={<Register />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </LangContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export default App
