import React from "react";
import { Link } from "react-router-dom";
import { Researcher } from "../types/researcher";
import { MapPin, Mail, BookOpen, Award } from "lucide-react";

interface ResearcherCardProps {
  researcher: Researcher;
}

export function ResearcherCard({ researcher }: ResearcherCardProps) {
  return (
    <Link to={`/researcher/${researcher.id}`} className="block group">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 overflow-hidden">
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <img
              src={researcher.avatar}
              alt={researcher.name}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0 ring-2 ring-blue-50 group-hover:ring-blue-200 transition-all duration-300"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                {researcher.name}
              </h3>
              <p className="text-blue-600 font-medium text-sm">
                {researcher.title}
              </p>
              <div className="flex items-center text-gray-600 text-sm mt-1">
                <MapPin size={14} className="mr-1" />
                <span>
                  {researcher.department}, {researcher.university}
                </span>
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-sm mt-4 line-clamp-3 leading-relaxed">
            {researcher.bio}
          </p>

          <div className="mt-4">
            <div className="flex flex-wrap gap-1 mb-3">
              {researcher.specializations.slice(0, 3).map((spec) => (
                <span
                  key={spec}
                  className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                >
                  {spec}
                </span>
              ))}
              {researcher.specializations.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                  +{researcher.specializations.length - 3} more
                </span>
              )}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <BookOpen size={14} className="mr-1" />
                  <span>{researcher.stats.totalPublications} publications</span>
                </div>
                <div className="flex items-center">
                  <Award size={14} className="mr-1" />
                  <span>{researcher.stats.totalCitations} citations</span>
                </div>
              </div>
              <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                <Mail size={14} className="mr-1" />
                <span className="text-xs">Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
