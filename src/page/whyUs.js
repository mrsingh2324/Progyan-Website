import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const WhyUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const controls = useAnimation();

  const coreTexts = [
    'Web Development',
    'Machine Learning',
    'Data Science',
    'Cyber Security',
  ];

  const aiTools = {
    'Web Development': ['React', 'Angular', 'Vue', 'Node.js', 'Express.js'],
    'Machine Learning': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Spyder'],
    'Data Science': ['Tableau', 'Power BI', 'Excel', 'SQL', 'Python'],
    'Cyber Security': ['Ethical Hacking', 'Penetration Testing', 'Incident Response', 'Security Auditing', 'Risk Management'],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % coreTexts.length;
      setCurrentIndex(nextIndex);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, coreTexts.length]);

  useEffect(() => {
    setCurrentText(coreTexts[currentIndex]);
    controls.start({ opacity: 0 });
    controls.start({ opacity: 1 });
  }, [currentIndex, coreTexts, controls]);

  return (
    <section className="bg-none text-gray-100 py-8">
      <div className="container mx-auto px-2 py-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Why Choose Progyan Educations
        </h2>
        <p className="text-gray-600 mb-8">
          We are committed to providing the best education and training to our
          students. We have a team of experienced and dedicated instructors who
          are always ready to help you.
        </p>
        <p className="text-xl font-bold text-gray-100 mb-8">
          Only{' '}
          <motion.span animate={controls} className="font-bold">
            {currentText}
          </motion.span>{' '}
          won't get you a job. You need to learn{' '}
          {aiTools[currentText].map((tool, index) => (
            <motion.span
              key={index}
              animate={controls}
              className="font-bold"
            >
              {tool}
              {index !== aiTools[currentText].length - 1 ? ', ' : ''}
            </motion.span>
          ))}
          .
        </p>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-gray-100 text-gray-600 rounded-t rounded-b-none overflow-hidden shadow p-8">
              <div className="text-3xl font-bold text-gray-800 mb-4">
                Experienced Instructors
              </div>
              <ul className="text-left text-sm">
                <li className="border-b py-2">
                  Our instructors have years of experience in the industry and
                  are passionate about teaching.
                </li>
                <li className="border-b py-2">
                  They are dedicated to helping you achieve your goals and
                  will provide you with the support you need to succeed.
                </li>
                <li className="border-b py-2">
                  Our instructors are experts in their fields and are always
                  up-to-date with the latest technologies and trends.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-gray-100 text-gray-600 rounded-t rounded-b-none overflow-hidden shadow p-8">
              <div className="text-3xl font-bold text-gray-800 mb-4">
                Hands-On Learning
              </div>
              <ul className="text-left text-sm">
                <li className="border-b py-2">
                  Our courses are designed to provide you with hands-on
                  experience.
               </li>
                <li className="border-b py-2">
                  You will work on real-world projects and learn by doing.
                </li>
                <li className="border-b py-2">
                  This will help you build a strong portfolio and increase your
                  chances of getting hired.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-gray-100 text-gray-600 rounded-t rounded-b-none overflow-hidden shadow p-8">
              <div className="text-3xl font-bold text-gray-800 mb-4">
                Career Support
              </div>
              <ul className="text-left text-sm">
                <li className="border-b py-2">
                  We provide career support to help you find a job after
                  graduation.
                </li>
                <li className="border-b py-2">
                  We have a network of industry partners and can help you
                  connect with potential employers.
                </li>
                <li className="border-b py-2">
                  We also provide resume and interview preparation to help you
                  stand out from the competition.
                </li>
                <li className="border-b py-2">
                  Our program is of three months and includes two major projects that are not yet introduced to the industry.
                </li>
                <li className="border-b py-2">
                  We provide 100% placement assistance, including mock
                  interviews and test series.
                </li>
                <li className="border-b py-2">
                  We offer two certificates, one for the core domain and one for
                  the AI tools.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
