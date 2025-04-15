// const Loading = () => {
//     return (
//       <div className="d-flex justify-content-center align-items-center vh-100">
//         <div className="text-center">
//           <div className="spinner-border text-primary mb-3" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//           <div>Loading...</div>
//         </div>
//       </div>
//     );
//   };

//   export default Loading;

// components/Loading.jsx
import './Loading.css';

const Loading = () => {
  return (
    <div className="fullscreen-loader d-flex justify-content-center align-items-center">
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default Loading;
