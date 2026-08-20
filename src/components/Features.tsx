
import { BookOpen, Presentation, Target, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <BookOpen size={24} />,
      title: "Smart Learning",
      description: "High-quality study materials, notes and practice tests.",
      color: "bg-tot-blue",
      textColor: "text-tot-blue",
      lightBg: "bg-tot-blue/10"
    },
    {
      icon: <Presentation size={24} />,
      title: "Live Classes",
      description: "Interactive learning sessions with expert teachers and mentorship.",
      color: "bg-tot-green",
      textColor: "text-tot-green",
      lightBg: "bg-tot-green/10"
    },
    {
      icon: <Target size={24} />,
      title: "Exam Focused",
      description: "Structured courses designed to help you achieve your academic goals.",
      color: "bg-tot-orange",
      textColor: "text-tot-orange",
      lightBg: "bg-tot-orange/10"
    },
    {
      icon: <Users size={24} />,
      title: "Student Community",
      description: "Connect with peers, discuss, share knowledge and grow together.",
      color: "bg-tot-purple",
      textColor: "text-tot-purple",
      lightBg: "bg-tot-purple/10"
    }
  ];

  return (
    <section className="w-full px-6 md:px-12 py-20 max-w-7xl mx-auto flex flex-col items-center">
      <div className="text-center mb-16 space-y-4">
        <span className="inline-block bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-medium">
          What to Expect?
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-tot-navy">
          A Better Way to <span className="text-tot-green">Learn</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="glass-card rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group cursor-default"
          >
            <div className={`w-16 h-16 rounded-full ${feature.lightBg} ${feature.textColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-tot-navy mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
