import React from "react";
import logo from '../assets/logo.png'
export default function Footer() {
  return (
   <footer className="footer footer-horizontal footer-center bg-gradient-to-r from-[#302b63] to-[#24243e] text-primary-content p-10">
  <aside>
    <img className="w-20 h-20 rounded-4xl" src={"https://i.ibb.co.com/8g1DRGXJ/brand.png"} alt="" />
    <h4 className="font-bold">
      NS Tech Jobs Hunter.
      <br />
      Providing reliable tech since 1992
    </h4>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
        <img className="w-[24px] h-[24px] fill-current" src={'https://i.ibb.co.com/Mxsn8xJY/twitter.png'} alt="" />
      </a>
      <a>
        <img className="w-[24px] h-[24px] fill-current" src={'https://i.ibb.co.com/KpvjbZ3s/facebook.png'} alt="" />
      </a>
      <a>
        <img className="w-[24px] h-[24px] fill-current" src={'https://i.ibb.co.com/q3rScsLd/instagram.png'} alt="" />
      </a>
      <a >
        <img className="w-[24px] h-[24px] fill-current" src={'https://i.ibb.co.com/BVchKXJw/youtube.png'} alt="" />
      </a>
    </div>
  </nav>
</footer>
  );
}
