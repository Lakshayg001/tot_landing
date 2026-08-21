import heroImg from '../assets/updatedtot.jpeg';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full px-6 md:px-12 pt-0 pb-12 md:pt-0 md:pb-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 min-h-[calc(100vh-100px)] mt-0 md:-mt-24 z-10">
      {/* Decorative background shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-tot-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-tot-orange/5 rounded-full blur-3xl -z-10"></div>

      {/* Left Content */}
      <div className="flex-1 flex flex-col items-start space-y-6 z-10 mt-8 md:mt-12">

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-tot-navy">
          We're Building Something <span className="text-tot-orange">Awesome</span> for Students Like <span className="text-tot-green">You!</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
          The Only Teacher is an innovative learning platform designed to help students <span className="font-semibold text-tot-blue">Connect</span>, <span className="font-semibold text-tot-green">Learn</span>, and <span className="font-semibold text-tot-orange">Grow</span> with better resources, guidance, and support.
        </p>
      </div>

      {/* Right Content - Illustration Placeholder */}
      <div className="flex-1 relative w-full flex justify-center items-center mt-12 md:mt-0">
        {/* Soft abstract blue blob background */}
        <div className="absolute inset-0 bg-tot-blue/20 rounded-full blur-3xl transform scale-75 -z-10 animate-float-slow"></div>

        <div className="relative w-full max-w-md lg:max-w-xl flex justify-center items-center">
          <img src={heroImg} alt="Students learning" className="w-full h-auto object-contain relative z-10 animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
