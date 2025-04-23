import { Flag, Layers, Video, LifeBuoy, UsersRound } from 'lucide-react';

export default function LifeSuccessSection() {
  const features = [
    {
      id: 1,
      title: "Expert Teacher",
      description: "Develop skills for career of various majors including computer",
      icon: <Flag className="w-12 h-12 text-blue-600" />,
    },
    {
      id: 2,
      title: "Self Development",
      description: "Develop skills for career of various majors including computer.",
      icon: <Layers className="w-12 h-12 text-blue-600" />,
      highlighted: true,
    },
    {
      id: 3,
      title: "Skill Swapping",
      description: "Exchange your expertise with others and create a community of mutual growth and learning",
      icon: <UsersRound className="w-12 h-12 text-blue-600" />,
      highlighted: true,
    },
    {
      id: 4,
      title: "Remote Learning",
      description: "Develop skills for career of various majors including language",
      icon: <Video className="w-12 h-12 text-blue-600" />,
    },
    {
      id: 5,
      title: "Life Time Support",
      description: "Develop skills for career of various majors including language",
      icon: <LifeBuoy className="w-12 h-12 text-blue-600" />,
    },

  ];

  return (
    <section className=" px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase text-blue-500 font-medium mb-2">MAXIMIZE YOUR POTENTIALS</p>
          <h2 className="text-4xl font-bold text-gray-700 mb-4">Learn the secrets to Life Success</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The ultimate planning solution for busy women who want to reach their personal goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${feature.highlighted ? 'text-blue-600' : 'text-gray-700'}`}>
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}