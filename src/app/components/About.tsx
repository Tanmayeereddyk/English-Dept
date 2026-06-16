import { BookOpen, Layers, FileText, Search, Users, Globe, PenTool } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-gray-900 mb-2">About Us</h1>
          <p className="text-lg text-gray-600 mb-6 italic">Goals and Objectives</p>

          <p className="text-gray-700 max-w-3xl">
            The Stream of English at IIITDM Kancheepuram fosters critical thinking,
            effective communication, literary engagement, and interdisciplinary
            research within a design-centric educational environment.
          </p>
        </div>
      </section>

      {/* About the Stream - two column on desktop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl text-gray-900 mb-4">Academic Foundation</h2>
            <p className="text-gray-600 mb-3">
              The Stream of English is an integral part of the Department of
              Sciences and Humanities at IIITDM Kancheepuram. The institute is
              recognised as an Institute of National Importance and follows a
              philosophy of "Learning by Doing" that emphasises hands-on,
              project-led approaches to teaching and scholarship.
            </p>

            <h3 className="text-lg text-gray-900 mt-6 mb-3">Teaching and Learning</h3>
            <p className="text-gray-600 mb-3">
              We offer English communication courses, technical and academic
              writing modules, and a range of electives that explore language,
              literature, and society. Our curriculum is designed to support
              disciplinary students as well as those pursuing advanced study in
              the humanities. The Writing Centre provides dedicated support for
              assignment drafting, thesis preparation, and publication mentoring.
            </p>

            <h3 className="text-lg text-gray-900 mt-6 mb-3">Research and Scholarship</h3>
            <p className="text-gray-600">
              Faculty in the Stream of English pursue research across literary
              studies, applied linguistics, cultural studies, and interdisciplinary
              areas such as medical humanities and digital humanities. Our
              members publish in journals, present at conferences, and lead
              externally funded projects. The PhD programme supports doctoral
              enquiry with regular supervision, seminars, and an active research culture.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative h-[260px] rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Students discussing"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg text-gray-900 mb-2">The Writing Centre</h4>
              <p className="text-gray-600">
                The Writing Centre supports students, research scholars, and
                faculty with one-on-one consultations, workshops, and resources
                aimed at improving academic and professional communication.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg text-gray-900 mb-2">Programs & Degrees</h4>
              <p className="text-gray-600">
                We offer a range of programmes from undergraduate courses to a
                doctoral programme. Emphasis is placed on rigorous coursework,
                mentorship, and opportunities to present and publish research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas - card grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-8">Key Focus Areas</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {[
              { title: "Literature & Philosophy", icon: BookOpen, colorBg: "bg-amber-100", colorText: "text-amber-700" },
              { title: "Academic & Technical Writing", icon: FileText, colorBg: "bg-sky-100", colorText: "text-sky-700" },
              { title: "Applied Linguistics", icon: Search, colorBg: "bg-emerald-100", colorText: "text-emerald-700" },
              { title: "Multilingualism & Translanguaging", icon: Globe, colorBg: "bg-indigo-100", colorText: "text-indigo-700" },
              { title: "Medical Humanities", icon: Layers, colorBg: "bg-rose-100", colorText: "text-rose-700" },
              { title: "Narrative Theory", icon: PenTool, colorBg: "bg-violet-100", colorText: "text-violet-700" },
              { title: "Cultural Studies", icon: Globe, colorBg: "bg-yellow-100", colorText: "text-yellow-700" },
              { title: "Language Pedagogy", icon: Users, colorBg: "bg-cyan-100", colorText: "text-cyan-700" },
              { title: "Interdisciplinary Research", icon: Layers, colorBg: "bg-lime-100", colorText: "text-lime-700" },
            ].map((c, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-md ${c.colorBg} ${c.colorText}`}>
                    <c.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900">{c.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">Learnings, projects, and research in this area.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl text-gray-900 mb-4">Vision</h3>
            <p className="text-gray-600">
              To cultivate critical, creative, and multilingual scholars who
              contribute to knowledge, pedagogy, and public life through
              rigorous research, ethical engagement, and effective communication.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl text-gray-900 mb-4">Mission</h3>
            <p className="text-gray-600">
              To provide high-quality language education, promote interdisciplinary
              research, support academic writing, and prepare students for
              professional and civic engagement in global contexts.
            </p>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-8">Goals</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Critical Reading & Literary Sensibility",
                desc: "Foster analytical reading and appreciation of literary texts.",
              },
              { title: "Communication Skills Development", desc: "Enhance oral and written communication across contexts." },
              { title: "Multilingual Learning Environment", desc: "Support translanguaging and multilingual practices." },
              { title: "Research Excellence", desc: "Encourage high-quality, publishable research outputs." },
              { title: "Writing Centre Support", desc: "Provide targeted writing support for students and researchers." },
              { title: "Language, Culture & Innovation", desc: "Promote interdisciplinary projects at the intersection of language and design." },
            ].map((g, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col h-full">
                <h4 className="text-lg text-gray-900 mb-2">{g.title}</h4>
                <p className="text-sm text-gray-600 mt-auto">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives - numbered timeline style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl text-gray-900 mb-8">Objectives</h2>
        <div className="space-y-6">
          {[
            { title: "Literary and Cultural Engagement", desc: "Promote sustained engagement with literary and cultural texts through seminars, reading groups, and public events." },
            { title: "High-Quality Language Education", desc: "Deliver rigorous courses in communication, writing, and language study to prepare students for academic and professional success." },
            { title: "Doctoral Research Excellence", desc: "Support doctoral candidates with supervision, research training, and opportunities for publication and presentation." },
            { title: "Writing Centre Development", desc: "Expand the Writing Centre's services to include workshops, peer tutoring, and dissertation support." },
            { title: "Academic and Professional Communication Mentoring", desc: "Provide mentoring for thesis writing, grant applications, and conference presentations." },
            { title: "Research Collaboration and Outreach", desc: "Foster interdisciplinary collaborations and public-facing research initiatives." },
          ].map((o, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center">{i + 1}</div>
              </div>
              <div>
                <h4 className="text-lg text-gray-900">{o.title}</h4>
                <p className="text-sm text-gray-600">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Writing Centre Highlight */}
      <section className="bg-amber-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-amber-200 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl text-gray-900 mb-3">Writing Centre</h3>
            <p className="text-gray-700 mb-2">
              The Writing Centre offers tailored support for students, research
              scholars, and faculty. Services include one-to-one consultations,
              workshops on academic and technical writing, and assistance with
              presentation and publication-ready manuscripts.
            </p>
            <p className="text-gray-600">Appointments and resources are available to all members of the institute.</p>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
            <p className="text-lg md:text-xl">
              The Stream of English is committed to fostering an inclusive,
              multilingual, and critically aware learning environment that
              prepares students for academic, professional, and global contexts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
