import logo from '../assets/TOT New logo.png';

const Header: React.FC = () => {
  return (
    <header className="w-full pt-4 pb-0 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
      <div className="flex items-center -ml-4">
        <a href="/" className="flex items-center">
          <img src={logo} alt="TOT - The Only Teacher" className="h-32 md:h-48 w-auto object-contain scale-110 origin-left" />
        </a>
      </div>
    </header>
  );
};

export default Header;
