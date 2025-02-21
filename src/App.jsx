// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import { Footer, Navbar } from "./components";
// import { About, Contact, Home, Projects } from "./pages";

// const App = () => {
//   return (
//     <main className='bg-slate-300/20'>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route
//             path='/*'
//             element={
//               <>
//                 <Routes>
//                   <Route path='/about' element={<About />} />
//                   <Route path='/projects' element={<Projects />} />
//                   <Route path='/contact' element={<Contact />} />
//                 </Routes>
//                 <Footer />
//               </>
//             }
//           />
//         </Routes>
//       </Router>
//     </main>
//   );
// };

// export default App;


// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import { Footer, Navbar } from "./components";
// import { About, Contact, Home, Projects } from "./pages";

// const App = () => {
//   return (
//     <main className='bg-slate-300/20'>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/projects' element={<Projects />} />
//           <Route path='/contact' element={<Contact />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </main>
//   );
// };

// export default App;


import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <Router>
      <main className='bg-slate-300/20 flex flex-col min-h-screen'>
        <Navbar />
        <div className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
