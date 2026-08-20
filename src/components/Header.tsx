import logo from '../assets/TOT New logo.png';

const Header: React.FC = () => {
  return (
    <header className="w-full pt-4 pb-0 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
      <div className="flex items-center -ml-4">
        <a href="/" className="flex items-center">
          <img src={logo} alt="TOT - The Only Teacher" className="h-28 md:h-40 w-auto object-contain origin-left" />
        </a>
      </div>
    </header>
  );
};

export default Header;
