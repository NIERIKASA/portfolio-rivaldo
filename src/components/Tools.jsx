export default function Tools() {
  // Daftar gabungan keahlian dari kedua gambar (duplikat telah dihapus & dirapikan)
  const skillsList = [
    "Data Engineer",
    "Data Analyst",
    "ERP Engineer",
    "Database Administrator",
    "System Analyst",
    "Business Analyst",
    "Data Visualization",
    "BI Tools",
    "Tableau",
    "Microsoft Power BI",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "DBeaver",
    "Sistem Manajemen Basis Data",
    "Python",
    "Pemrograman Python",
    "Prompt Engineering",
    "Odoo",
    "UML Design",
    "UI/UX Design",
    "Web Development",
    "Git",
    "GitHub",
    "Hardware Technical Support",
    "Manajemen Proyek",
    "Perangkat Lunak Manajemen Proyek",
    "Problem Solving",
    "Analytic Skill",
    "Public Speaking",
    "Leadership",
    "Microsoft Office",
    "Maintenance",
  ];

  return (
    <section id="tools" className="w-full py-20 px-8 lg:px-16 bg-white text-black border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-2xl font-medium tracking-tight mb-2">Skills & Tools</h2>
          <p className="text-gray-500 text-sm">The technology stack and expertise behind the scenes.</p>
        </div>

        {/* Flex wrap container untuk pill tags */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {skillsList.map((skill, index) => (
            <div key={index} className="bg-gray-100/80 text-gray-800 px-5 py-2.5 rounded-full text-sm font-medium border border-gray-200/50 hover:bg-gray-200 hover:text-black transition-colors cursor-default">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
