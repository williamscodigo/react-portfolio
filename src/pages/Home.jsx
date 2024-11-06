import { useEffect } from 'react';
import HighlightProjects from '../components/HighlightProjects';
import Skills from '../components/Skills';
import ContactInfo from '../components/ContactInfo';

export default function Home() {

  useEffect(() => {
    document.title = 'williamscodigo Portfolio';
  }, []);

  return (
    <>
    <section className='mb-4'>
      <h1 className="text-3xl font-bold mb-4 text-center md:text-left">Welcome to My Portfolio</h1>
      <p className='mb-6'>This is the home page of my portfolio. Here you can find information about me, my projects, and how to contact me.</p>
      <h2 className="text-center md:text-left text-2xl font-medium mb-4 underline underline-offset-4 decoration-slate-900 dark:decoration-slate-500 decoration-4 opacity-50">About Me</h2>
      <p className="mb-4 trackiing-wide leading-relaxed">Hello World!, My name is <span className='font-bold'>Jose W. Rivas</span> I am a passionate and dedicated learner that loves programming and solving complex problems. I can adapt to new technologies and ideas and I enjoy helping others understand difficult concepts. I aspire to become an outstanding Software Developer that makes key contributions in the next big thing. I have a bachelor degree in computer science and I have gained important knowledge and experience in software creation and engineering, I learned about the different tools and techniques that are essential to design, create and maintain high quality and visually captivating applications.</p>
    </section>
    <section className='mb-4'>
    <h2 className="text-center md:text-left text-2xl font-medium mb-4 underline underline-offset-4 decoration-slate-900 dark:decoration-slate-500  decoration-4 opacity-50">Highlight Projects</h2>
    <HighlightProjects />
    </section>
    <section className='mb-4'>
    <h2 className="text-center md:text-left text-2xl font-medium mb-4 underline underline-offset-4 decoration-slate-900 dark:decoration-slate-500  decoration-4 opacity-50">Tech Skills</h2>
    <Skills />
    </section>
    </>
  );
}
