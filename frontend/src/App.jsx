
import { lazy, Suspense } from 'react';
import './App.css'
import {Toaster} from 'react-hot-toast'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics";
import Loading from './components/LazyLoads/Loading';
import HrDashboard from './pages/hrAdmin/HrDashboard';


// public Routes components
const Login = lazy(()=> import('./components/Login'))
// HrLayout component
const HRLayout = lazy(()=>import('./layouts/HRLayout'))

function App() {

  return (
    <>
      {/* Toaster Configuration */}
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#4caf50",
              color: "#fff",
              fontWeight: "bold",
              padding: "12px 20px",
              borderRadius: "8px",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#4caf50",
            },
          },
          error: {
            style: {
              background: "#f44336",
              color: "#fff",
              fontWeight: "bold",
              padding: "12px 20px",
              borderRadius: "8px",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#f44336",
            },
          },
        }}
        position="top-right"
        reverseOrder={false}
      />

      {/* Routing with lazy loading */}
      <BrowserRouter>
        <Suspense fallback={<Loading/>}> 
          <Routes>

            {/* public route(s) */}
              <Route path='/' element={<Login/>} />

            {/* Hr management layout */}
            <Route path='/insight-center' element={<HRLayout/>} >
              <Route index element={<HrDashboard/>} />
            </Route>

          </Routes>
        </Suspense>
      </BrowserRouter>
      <Analytics/>
    </>
  );
}

export default App
