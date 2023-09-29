import { Fragment, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/shares/Loading";


const HomePage = lazy( () => import ("./pages/HomePage" ));
const Header = lazy( () => import ("./components/layout/Header" ));
const ElectronicsPage = lazy( () => import ("./pages/ElectronicsPage" ));
const JeweleryPage = lazy( () => import ("./pages/JeweleryPage" ));
const MensPage = lazy( () => import ("./pages/MensPage" ));
const WomensPage = lazy( () => import ("./pages/WomensPage" ));
const CartPage = lazy( () => import ("./pages/CartPage" ));
const NotFoundPage = lazy( () => import ("./pages/NotFoundPage" ));


function App() {
  return (
   <Suspense fallback={<Loading/>}>
      <Fragment>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="electronics" element={<ElectronicsPage />} />
              <Route path="electronics/:portfolip" element={<ElectronicsPage />} />
              <Route path="jewelery" element={<JeweleryPage />} />
              <Route path="menspage" element={<MensPage />} />
              <Route path="womenspage" element={<WomensPage />} />
              <Route path="cartpage" element={<CartPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Fragment>
   </Suspense>
  );
}

export default App;

// pojojo jbjjb h h ijbub jiubuvu   uv  bbub bi u bb/       
