import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-10 border-t border-gray-900 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        
        <div>
          <h2 className="text-6xl font-bold uppercase tracking-tighter mb-4">
            Aero<span className="font-light text-gray-500">View</span>
          </h2>
          <p className="text-gray-500 max-w-sm">
            Pushing the boundaries of human exploration. 
            From the deep oceans to the furthest stars.
          </p>
        </div>

        <div className="flex gap-20">
          <div className="flex flex-col gap-4">
            <h4 className="uppercase tracking-widest text-xs font-bold text-gray-400">Socials</h4>
            <a href="#" className="hover:text-red-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-red-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-red-500 transition-colors">LinkedIn</a>
          </div>
          <div className="flex flex-col gap-4">
             <h4 className="uppercase tracking-widest text-xs font-bold text-gray-400">Legal</h4>
            <a href="#" className="hover:text-red-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-red-500 transition-colors">Terms</a>
          </div>
        </div>

      </div>

      <div className="mt-20 pt-10 border-t border-gray-900 flex justify-between text-xs text-gray-600 uppercase tracking-wider">
        <span>© 2025 AeroView Inc.</span>
        <span>Pune, India</span>
      </div>
    </footer>
  );
};

export default Footer;