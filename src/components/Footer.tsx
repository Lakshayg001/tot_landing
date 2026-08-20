

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-sm text-gray-500 gap-4">
      <p>© 2026 The Only Teacher (TOT). All Rights Reserved.</p>
      
      <div className="flex items-center gap-1.5 font-bold tracking-wide">
        <span className="text-tot-navy">Connect.</span>
        <span className="text-tot-green">Learn.</span>
        <span className="text-tot-orange">Grow.</span>
      </div>
    </footer>
  );
};

export default Footer;
