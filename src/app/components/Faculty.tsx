import { Mail, Globe, BookOpen } from "lucide-react";
import { useState } from "react";

interface FacultyMember {
  name: string;
  title: string;
  position: string;
  email: string;
  image: string;
  research: string[];
  bio: string;
  website?: string;
}

interface PhDScholar {
  name: string;
  year: string;
  research: string;
  advisor: string;
  email: string;
}

export default function Faculty() {
  const [activeTab, setActiveTab] = useState<"faculty" | "phd">("faculty");

  const facultyMembers: FacultyMember[] = [
    {
      name: "Dr. Elizabeth Morrison",
      title: "Professor & Department Chair",
      position: "Department Chair",
      email: "e.morrison@university.edu",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      research: ["Victorian Literature", "Gender Studies", "19th Century Novels"],
      bio: "Dr. Morrison specializes in Victorian literature with a focus on women writers and social reform narratives.",
      website: "https://example.com/morrison",
    },
    {
      name: "Dr. James Chen",
      title: "Professor",
      position: "Graduate Director",
      email: "j.chen@university.edu",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      research: ["American Literature", "Modernism", "Contemporary Fiction"],
      bio: "Dr. Chen's research examines the intersections of race, identity, and narrative form in 20th century American literature.",
    },
    {
      name: "Dr. Sarah Williams",
      title: "Associate Professor",
      position: "Undergraduate Director",
      email: "s.williams@university.edu",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
      research: ["Medieval Literature", "Manuscript Studies", "Chaucer"],
      bio: "Dr. Williams is a leading scholar in medieval manuscript culture and Middle English poetry.",
    },
    {
      name: "Dr. Michael Rodriguez",
      title: "Associate Professor",
      position: "Faculty",
      email: "m.rodriguez@university.edu",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      research: ["Postcolonial Literature", "Caribbean Studies", "Global Literature"],
      bio: "Dr. Rodriguez focuses on postcolonial theory and contemporary Caribbean literature.",
    },
    {
      name: "Dr. Amanda Lee",
      title: "Associate Professor",
      position: "Faculty",
      email: "a.lee@university.edu",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      research: ["Creative Writing", "Poetry", "Contemporary Literature"],
      bio: "Dr. Lee is an award-winning poet and directs our Creative Writing program.",
    },
    {
      name: "Dr. Robert Thompson",
      title: "Assistant Professor",
      position: "Faculty",
      email: "r.thompson@university.edu",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      research: ["Digital Humanities", "Shakespeare", "Early Modern Drama"],
      bio: "Dr. Thompson applies digital methods to the study of Renaissance drama and performance.",
    },
    {
      name: "Dr. Patricia Johnson",
      title: "Assistant Professor",
      position: "Faculty",
      email: "p.johnson@university.edu",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      research: ["Rhetoric & Composition", "Writing Studies", "Pedagogy"],
      bio: "Dr. Johnson researches writing pedagogy and multimodal composition in digital environments.",
    },
    {
      name: "Dr. David Kim",
      title: "Assistant Professor",
      position: "Faculty",
      email: "d.kim@university.edu",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      research: ["Asian American Literature", "Film Studies", "Contemporary Media"],
      bio: "Dr. Kim examines representations of Asian American identity in literature and film.",
    },
  ];

  const phdScholars: PhDScholar[] = [
    {
      name: "Emma Richardson",
      year: "5th Year",
      research: "Ecocriticism and Climate Fiction in Contemporary British Novels",
      advisor: "Dr. Elizabeth Morrison",
      email: "e.richardson@university.edu",
    },
    {
      name: "Marcus Washington",
      year: "4th Year",
      research: "Jazz Aesthetics in African American Modernist Poetry",
      advisor: "Dr. James Chen",
      email: "m.washington@university.edu",
    },
    {
      name: "Sofia Martinez",
      year: "4th Year",
      research: "Digital Manuscripts and Medieval Devotional Literature",
      advisor: "Dr. Sarah Williams",
      email: "s.martinez@university.edu",
    },
    {
      name: "Raj Patel",
      year: "3rd Year",
      research: "Diaspora and Identity in South Asian British Fiction",
      advisor: "Dr. Michael Rodriguez",
      email: "r.patel@university.edu",
    },
    {
      name: "Olivia Chen",
      year: "3rd Year",
      research: "Experimental Forms in Contemporary American Poetry",
      advisor: "Dr. Amanda Lee",
      email: "o.chen@university.edu",
    },
    {
      name: "Thomas Baker",
      year: "2nd Year",
      research: "Performance and Politics in Early Modern Theater",
      advisor: "Dr. Robert Thompson",
      email: "t.baker@university.edu",
    },
    {
      name: "Jessica Brown",
      year: "2nd Year",
      research: "Community Literacy and Social Justice Writing Programs",
      advisor: "Dr. Patricia Johnson",
      email: "j.brown@university.edu",
    },
    {
      name: "Kevin Nguyen",
      year: "2nd Year",
      research: "Graphic Narratives and Asian American Memory",
      advisor: "Dr. David Kim",
      email: "k.nguyen@university.edu",
    },
    {
      name: "Hannah Cohen",
      year: "1st Year",
      research: "Gothic Literature and Gender Performance",
      advisor: "Dr. Elizabeth Morrison",
      email: "h.cohen@university.edu",
    },
    {
      name: "Daniel Lee",
      year: "1st Year",
      research: "Minimalism and Form in Contemporary American Fiction",
      advisor: "Dr. James Chen",
      email: "d.lee@university.edu",
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-gray-900 mb-4">Faculty & PhD Scholars</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Meet our distinguished faculty members and talented doctoral researchers who are advancing scholarship in English literature, language, and writing.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="border-b border-gray-200 bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("faculty")}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === "faculty"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Faculty Members
            </button>
            <button
              onClick={() => setActiveTab("phd")}
              className={`py-4 border-b-2 transition-colors ${
                activeTab === "phd"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              PhD Scholars
            </button>
          </div>
        </div>
      </div>

      {/* Faculty Members */}
      {activeTab === "faculty" && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {facultyMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{member.title}</p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Mail className="size-4" />
                        <span className="truncate">Email</span>
                      </a>
                      {member.website && (
                        <a
                          href={member.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <Globe className="size-4" />
                          <span>Website</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="size-4 text-gray-400" />
                    <span className="text-sm text-gray-700">Research Interests:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.research.map((area, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PhD Scholars */}
      {activeTab === "phd" && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <p className="text-gray-600">
              Our PhD students are engaged in cutting-edge research across diverse areas of English studies. They contribute to the intellectual life of the department through teaching, conference presentations, and publications.
            </p>
          </div>
          <div className="space-y-4">
            {phdScholars.map((scholar, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-lg text-gray-900">{scholar.name}</h3>
                      <span className="text-sm text-gray-500">{scholar.year}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{scholar.research}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div>
                        <span className="text-gray-500">Advisor:</span> {scholar.advisor}
                      </div>
                      <a
                        href={`mailto:${scholar.email}`}
                        className="flex items-center gap-1 hover:text-gray-900 transition-colors"
                      >
                        <Mail className="size-4" />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
