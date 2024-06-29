import React from 'react';

const Education = () => {
  const educationItems = [
    {
      title: 'B. Tech in Information Technology',
      institution: 'National Engineering College',
      grade: 'CGPA: 7.41',
      duration: '2021 - 2025',
    },
    {
      title: 'HSC (Higher Secondary Certificate)',
      institution: 'Govt.Hr.Sec.School, Ramapuram, Krishnagiri',
      grade: 'Percentage: 80.66%',
      duration: '2020 - 2021',
    },
    {
      title: 'SSLC (Secondary School Leaving Certificate)',
      institution: 'Govt.Hr.Sec.School, Ramapuram, Krishnagiri',
      grade: 'Percentage: 73.4%',
      duration: '2018 - 2019',
    },
  ];

  return (
    <section className="py-12 bg-gray-50" id="education">
      <div className="container mx-auto px-4 mt-10 md:mt-2 lg:mt-1">
        <h2 className="text-3xl font-semibold text-center mb-10">Education</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 hidden md:block lg:block"></div>
          {educationItems.map((item, index) => (
            <div key={index} className={`mb-8 flex flex-col items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} w-full`}>
              <div className={`bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                <div className="flex items-center">
                  <span className="text-blue-500 text-2xl leading-none">&bull;</span>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-1 text-gray-600">{item.institution}</p>
                    <p className="mt-1 text-gray-600">{item.grade}</p>
                    <p className="mt-1 text-gray-600">{item.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
