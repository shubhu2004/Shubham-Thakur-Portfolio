// import { NavLink } from "react-router-dom";

// import { logo } from "../assets/images";

// const Navbar = () => {
//   return (
//     <header className='header'>
//       <NavLink to='/'>
//         <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
//       </NavLink>
//       <nav className='flex text-lg gap-7 font-medium'>
//         <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
//           About
//         </NavLink>
//         <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
//           Projects
//         </NavLink>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


// import { NavLink } from "react-router-dom";
// import { logo } from "../assets/images";

// const Navbar = () => {
//   return (
//     <header className="header">
//       <NavLink to="/">
//         <img 
//           src={logo} 
//           alt="logo" 
//           style={{ width: "60px", height: "auto", objectFit: "contain" }} 
//         />
//       </NavLink>
//       <nav className="nav">
//         <NavLink
//           to="/about"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           About
//         </NavLink>
//         <NavLink
//           to="/projects"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Projects
//         </NavLink>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img 
          src={logo} 
          alt="logo" 
          style={{ width: "60px", height: "auto", objectFit: "contain" }} 
        />
      </NavLink>
      <nav 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px',  // Directly applying gap here
        }}
      >
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
