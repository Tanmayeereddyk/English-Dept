import { GraduationCap, Users, BookOpen, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function AboutDepartment() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gray-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1709159057219-80439fbeddce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjByZWFkaW5nJTIwYWNhZGVtaWN8ZW58MXx8fHwxNzcwODMxMjkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Library books"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl text-white mb-6">
              Welcome to the Department of English
            </h1>
            <p className="text-lg text-gray-200">
              Cultivating critical thinking, creative expression, and scholarly excellence through the study of literature, language, and writing.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              The Department of English is dedicated to fostering a vibrant intellectual community where students and faculty engage deeply with literature, language, and culture. Our programs emphasize critical analysis, creative expression, and effective communication.
            </p>
            <p className="text-gray-600 mb-4">
              Through our undergraduate and graduate offerings, we prepare students for careers in education, writing, publishing, law, business, and beyond. Our faculty are accomplished scholars and teachers committed to mentoring the next generation of thinkers and writers.
            </p>
            <p className="text-gray-600">
              We value diversity, inclusivity, and innovation in our approach to the study of English language and literature, from medieval texts to contemporary digital narratives.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1642130935796-1409d7e075dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcwNzMwMzcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="University campus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white mb-4">
                <Users className="size-6" />
              </div>
              <div className="text-3xl text-gray-900 mb-2">25+</div>
              <div className="text-sm text-gray-600">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white mb-4">
                <GraduationCap className="size-6" />
              </div>
              <div className="text-3xl text-gray-900 mb-2">40+</div>
              <div className="text-sm text-gray-600">PhD Scholars</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white mb-4">
                <BookOpen className="size-6" />
              </div>
              <div className="text-3xl text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-600">Undergraduate Students</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white mb-4">
                <Award className="size-6" />
              </div>
              <div className="text-3xl text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl text-gray-900 mb-12 text-center">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Undergraduate */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-xl text-gray-900 mb-4">Undergraduate Programs</h3>
            <p className="text-gray-600 mb-6">
              Our BA in English offers concentrations in Literature, Creative Writing, and Professional Writing, preparing students for diverse career paths.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Literature Studies</li>
              <li>• Creative Writing</li>
              <li>• Professional Writing</li>
              <li>• Literary Theory & Criticism</li>
            </ul>
          </div>

          {/* Master's */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-xl text-gray-900 mb-4">Master's Program</h3>
            <p className="text-gray-600 mb-6">
              The MA in English provides advanced study in literature and writing, with opportunities for teaching experience and research development.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Advanced Literary Analysis</li>
              <li>• Research Methods</li>
              <li>• Teaching Assistantships</li>
              <li>• Thesis or Creative Project</li>
            </ul>
          </div>

          {/* PhD */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-xl text-gray-900 mb-4">Doctoral Program</h3>
            <p className="text-gray-600 mb-6">
              Our PhD program produces leading scholars through rigorous coursework, comprehensive exams, and original dissertation research.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Specialized Research Areas</li>
              <li>• Publishing Opportunities</li>
              <li>• Conference Presentations</li>
              <li>• University Teaching</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-8">Research Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "19th & 20th Century British Literature",
              "American Literature",
              "Contemporary & Postmodern Fiction",
              "Poetry & Poetics",
              "Gender & Sexuality Studies",
              "Postcolonial Literature",
              "Digital Humanities",
              "Rhetoric & Composition",
              "Medieval & Renaissance Studies",
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 text-sm text-gray-700"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl text-gray-900 mb-12 text-center">Why Choose Our Department</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-900">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg text-gray-900 mb-2">Distinguished Faculty</h3>
              <p className="text-gray-600 text-sm">
                Learn from award-winning scholars and published authors who are leaders in their fields and dedicated mentors.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-900">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg text-gray-900 mb-2">Small Class Sizes</h3>
              <p className="text-gray-600 text-sm">
                Engage in meaningful discussions and receive personalized attention in our seminar-style classes.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-900">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg text-gray-900 mb-2">Research Opportunities</h3>
              <p className="text-gray-600 text-sm">
                Participate in cutting-edge research projects and publish in our departmental journals and conferences.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-900">✓</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg text-gray-900 mb-2">Career Success</h3>
              <p className="text-gray-600 text-sm">
                Our graduates pursue successful careers in academia, publishing, law, journalism, and creative industries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
