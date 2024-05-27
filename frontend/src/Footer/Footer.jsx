// import React from 'react';
// import { social } from './data';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="social-icons">
//         <ul>
//           {social.map((socialIcon) => {
//             const { id, url, icon } = socialIcon;
//             return (
//               <li key={id}>
//                 <a href={url}>{icon}</a>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//       <div className="footer-text">
//         <p>&copy; 2024 Your Website Name</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import "./Footer.css";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="column">
                <h3>Contact Details</h3>
                <p className="mt-3">Email: example@example.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>




            <div className="column">
                <h3>Social Links</h3>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/">Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/">Youtube</a>
                    </li>
                </ul>
            </div>
            <div className="footer-text">
            </div>
        </footer>
    );
};

export default Footer;
