import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { researchers } from '../data/researchers';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  BookOpen, 
  Award, 
  Calendar,
  Users,
  TrendingUp,
  FileText,
  PenTool,
  Beaker,
  GraduationCap,
  Trophy
} from 'lucide-react';

export function ResearcherDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  const researcher = researchers.find(r => r.id === id);

  if (!researcher) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Researcher not found</h2>
          <p className="text-gray-600 mb-4">The researcher you're looking for doesn't exist.</p>
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to researchers
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'publications', label: 'Publications', icon: BookOpen },
    { id: 'research', label: 'Research', icon: Beaker },
    { id: 'blog', label: 'Blog Posts', icon: PenTool },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-4 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Researchers
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
            <img
              src={researcher.avatar}
              alt={researcher.name}
              className="w-32 h-32 rounded-full object-cover ring-4 ring-blue-50 mb-6 lg:mb-0"
            />
            
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{researcher.name}</h1>
              <p className="text-xl text-blue-600 font-medium mb-2">{researcher.title}</p>
              <p className="text-lg text-gray-600 mb-4">
                {researcher.department}, {researcher.university}
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <a href={`mailto:${researcher.email}`} className="hover:text-blue-600">
                    {researcher.email}
                  </a>
                </div>
                {researcher.phone && (
                  <div className="flex items-center">
                    <Phone size={16} className="mr-2" />
                    <span>{researcher.phone}</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">{researcher.stats.totalPublications}</div>
                  <div className="text-sm text-blue-700">Publications</div>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-teal-600">{researcher.stats.totalCitations}</div>
                  <div className="text-sm text-teal-700">Citations</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">{researcher.stats.hIndex}</div>
                  <div className="text-sm text-orange-700">H-Index</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">{researcher.stats.totalResearchProjects}</div>
                  <div className="text-sm text-purple-700">Projects</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {researcher.specializations.map((spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm border-b border-gray-100 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="flex space-x-8 px-4 sm:px-6 lg:px-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="mr-3 text-blue-600" size={24} />
                  Biography
                </h2>
                <p className="text-gray-700 leading-relaxed">{researcher.bio}</p>
              </div>

              {/* Education */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <GraduationCap className="mr-3 text-blue-600" size={24} />
                  Education
                </h2>
                <div className="space-y-4">
                  {researcher.education.map((edu, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <GraduationCap className="text-blue-600" size={16} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                        <p className="text-blue-600 font-medium">{edu.institution}</p>
                        <p className="text-gray-600 text-sm">{edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Calendar className="mr-3 text-blue-600" size={24} />
                  Professional Experience
                </h2>
                <div className="space-y-4">
                  {researcher.experience.map((exp, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="bg-teal-100 p-2 rounded-full">
                        <Calendar className="text-teal-600" size={16} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                        <p className="text-teal-600 font-medium">{exp.institution}</p>
                        <p className="text-gray-600 text-sm">
                          {exp.startYear} - {exp.endYear || 'Present'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Awards */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Trophy className="mr-3 text-orange-600" size={20} />
                  Awards & Recognition
                </h2>
                <div className="space-y-3">
                  {researcher.awards.map((award, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                      <Award className="text-orange-600 mt-0.5" size={16} />
                      <span className="text-gray-800 text-sm">{award}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              {Object.keys(researcher.socialLinks).length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <ExternalLink className="mr-3 text-blue-600" size={20} />
                    Academic Profiles
                  </h2>
                  <div className="space-y-3">
                    {researcher.socialLinks.orcid && (
                      <a
                        href={`https://orcid.org/${researcher.socialLinks.orcid}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                      >
                        <ExternalLink className="text-green-600" size={16} />
                        <span className="text-green-700 font-medium">ORCID</span>
                      </a>
                    )}
                    {researcher.socialLinks.googleScholar && (
                      <a
                        href={`https://scholar.google.com/citations?user=${researcher.socialLinks.googleScholar}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <ExternalLink className="text-blue-600" size={16} />
                        <span className="text-blue-700 font-medium">Google Scholar</span>
                      </a>
                    )}
                    {researcher.socialLinks.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${researcher.socialLinks.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <ExternalLink className="text-blue-600" size={16} />
                        <span className="text-blue-700 font-medium">LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'publications' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <BookOpen className="mr-3 text-blue-600" size={28} />
              Publications ({researcher.publications.length})
            </h2>
            {researcher.publications.map((pub) => (
              <div key={pub.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{pub.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="font-medium text-blue-600">{pub.journal}</span>
                  <span>{pub.year}</span>
                  <span className="flex items-center">
                    <TrendingUp size={14} className="mr-1" />
                    {pub.citations} citations
                  </span>
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-700"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      DOI
                    </a>
                  )}
                </div>
                <p className="text-gray-700 leading-relaxed">{pub.abstract}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'research' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <Beaker className="mr-3 text-blue-600" size={28} />
              Research Projects ({researcher.research.length})
            </h2>
            {researcher.research.map((research) => (
              <div key={research.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{research.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    research.status === 'ongoing' ? 'bg-green-100 text-green-700' :
                    research.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {research.status.charAt(0).toUpperCase() + research.status.slice(1)}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{research.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Start Date:</span>
                    <span className="ml-2 text-gray-600">{new Date(research.startDate).toLocaleDateString()}</span>
                  </div>
                  {research.endDate && (
                    <div>
                      <span className="font-medium text-gray-900">End Date:</span>
                      <span className="ml-2 text-gray-600">{new Date(research.endDate).toLocaleDateString()}</span>
                    </div>
                  )}
                  {research.collaborators.length > 0 && (
                    <div className="md:col-span-2">
                      <span className="font-medium text-gray-900">Collaborators:</span>
                      <span className="ml-2 text-gray-600">{research.collaborators.join(', ')}</span>
                    </div>
                  )}
                  {research.fundingSource && (
                    <div className="md:col-span-2">
                      <span className="font-medium text-gray-900">Funding:</span>
                      <span className="ml-2 text-gray-600">{research.fundingSource}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'blog' && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <PenTool className="mr-3 text-blue-600" size={28} />
              Blog Posts ({researcher.blogPosts.length})
            </h2>
            {researcher.blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                  <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}