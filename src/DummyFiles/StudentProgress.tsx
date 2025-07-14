import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { BookOpen, Brain, Beaker, Users, Target, Award, Clock } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StudentProgress() {
  const data = {
    labels: [
      'Virtual Lab Engagement',
      'Practical Experiments',
      'Theoretical Understanding',
      'Peer Collaboration'
    ],
    datasets: [
      {
        data: [65, 72, 85, 58],
        backgroundColor: [
          'rgba(79, 70, 229, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
        ],
        borderColor: [
          'rgba(79, 70, 229, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const improvementSuggestions = [
    {
      area: 'Virtual Lab Engagement',
      score: '65%',
      icon: <Beaker className="h-6 w-6 text-indigo-600" />,
      suggestion: 'Increase time spent in virtual simulations. Try completing at least 2 additional experiments per week.',
      target: '80%',
      timeframe: '4 weeks'
    },
    {
      area: 'Practical Experiments',
      score: '72%',
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      suggestion: 'Focus on documenting experiment results and analyzing outcomes more thoroughly.',
      target: '85%',
      timeframe: '6 weeks'
    },
    {
      area: 'Theoretical Understanding',
      score: '85%',
      icon: <BookOpen className="h-6 w-6 text-green-600" />,
      suggestion: 'Continue strong performance. Consider exploring advanced concepts in the virtual lab.',
      target: '90%',
      timeframe: '8 weeks'
    },
    {
      area: 'Peer Collaboration',
      score: '58%',
      icon: <Users className="h-6 w-6 text-amber-600" />,
      suggestion: 'Participate more in group experiments and discussion forums with fellow students.',
      target: '75%',
      timeframe: '4 weeks'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* <div className="grid lg:grid-cols-2 gap-12"> */}
        {/* <div className="bg-white p-8 rounded-2xl shadow-lg"> */}
          {/* <h2 className="text-2xl font-bold text-center mb-8">Performance Analysis</h2>
          <div className="max-w-md mx-auto">
            <Pie data={data} />
          </div> */}
        {/* </div> */}

        <div className="bg-white p-8 rounded-2xl shadow-lg w-full flex items-center">
          <div >
            <h2 className="text-2xl font-bold text-center mb-8">Performance Analysis</h2>
            <div className="max-w-md mx-auto">
              <Pie data={data} />
            </div>
          </div>
          <div>


            {/* <h2 className="text-2xl font-bold mb-8">Improvement Plan</h2> */}
            <div className="space-y-6">
              {improvementSuggestions.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.area}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Award className="h-4 w-4" />
                        <span>Current: {item.score}</span>
                        <Target className="h-4 w-4 ml-2" />
                        <span>Target: {item.target}</span>
                        <Clock className="h-4 w-4 ml-2" />
                        <span>Timeline: {item.timeframe}</span>
                      </div>
                    </div>
                  </div>
                  <div className="pl-10">
                    <p className="text-gray-700">{item.suggestion}</p>
                    <div className="mt-2 h-1 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"
                        style={{ width: item.score }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}