export default function Projects() {
  const works = [
    {
      id: "01",
      title: "SnapCal",
      description:
        "A deep learning-powered application detecting food items from images with nutritional information analysis.",
      technologies: ["Python", "YOLOv8", "FastAPI", "Expo Go"],
    },
    {
      id: "02",
      title: "OpenUI",
      description:
        "An innovative solution that automates the conversion of visual designs into JSON format.",
      technologies: ["Python", "CNN", "OpenCV", "Flask"],
    },
    {
      id: "03",
      title: "Obliviate",
      description:
        "A productivity enhancement Chrome extension developed under 24 hours during the TINK-HER-HACK 3.0 hackathon.",
      technologies: ["HTML", "CSS", "JavaScript", "Chrome Extensions API"],
    },
    {
      id: "04",
      title: "CalendrierClergè",
      description:
        "An event management system for the Diocese of Laval, France implementing form-based CRUD modules for priests and administrators.",
      technologies: ["React", "Django", "SQLite", "Tailwind CSS"],
    },
  ];

  return (
    <section id="projects">
      <div className="min-h-screen bg-[#f6fdf5] p-8">
        <div className="max-w-7xl mx-auto">
          <h2>Projects</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {works.map((work) => (
              <div
                key={work.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-(--color-blue)/20"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-dm-serif text-zinc-900">
                    {work.title}
                  </h3>
                  <span className="text-4xl font-light text-(--color-green)/40">
                    {work.id}
                  </span>
                </div>

                <p className="text-(--color-dark)/70 mb-6 leading-relaxed">
                  {work.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {work.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[hsl(25,100%,40%,13%)] rounded-full text-sm font-medium text-(--color-orange) transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
