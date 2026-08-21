
import { BookOpen, GraduationCap, Clock } from 'lucide-react';

const Closing: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-12 py-24 my-12 max-w-6xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-orange-50 to-amber-100/50 p-8 md:p-16 flex flex-col items-center text-center shadow-lg border border-orange-100">

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-tot-orange/20 animate-spin" style={{ animationDuration: '10s' }}><Clock size={64} /></div>
        <div className="absolute bottom-10 right-10 text-tot-blue/20 transform -rotate-12"><BookOpen size={80} /></div>

        <div className="flex gap-4 mb-8 text-tot-navy opacity-80">
          <BookOpen size={32} />
          <GraduationCap size={32} />
          <Clock size={32} />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-tot-navy mb-6 max-w-2xl">
          Something Great Is On Its Way!
        </h2>

        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-12">
          We're working hard to create a better learning experience for students. Stay tuned TOT is coming soon.
        </p>

        <div className="flex items-center gap-2 md:gap-3 text-2xl md:text-4xl font-extrabold tracking-tight bg-white/60 px-8 py-4 rounded-2xl shadow-sm backdrop-blur-sm border border-white/50">
          <span className="text-tot-navy">Connect.</span>
          <span className="text-tot-green">Learn.</span>
          <span className="text-tot-orange">Grow.</span>
        </div>
      </div>
    </section>
  );
};

export default Closing;
