import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: 'What is this course about, and who is it for?',
    answer: 'This course provides learners with a comprehensive understanding of full stack web development, covering both front-end and back-end technologies. The curriculum focuses on building real-world applications, enabling learners to develop and deploy end-to-end web solutions. It\'s ideal for beginners, freshers, or professionals aiming to kickstart or transition their careers in software development.'
  },
  {
    question: 'Is this course suitable for beginners?',
    answer: 'Yes, the course is designed for beginners and gradually introduces advanced concepts.'
  },
  {
    question: 'What is the fee of Program?',
    answer: 'The program costs Rs. 1,69,999/- Rs. 1,27,499/- which can be paid through an affordable EMI option of as low as Rs. 5,967/- month - that\'s even less than your monthly grocery bills!'
  },
  {
    question: 'What is the duration of the Full Stack Web Development course?',
    answer: 'The full stack developer course is a structured, job-oriented program designed for comprehensive training. The duration varies based on the learning pace and includes self-paced classes, hands-on projects, and placement assistance. The course spans six months from the start date.'
  },
  {
    question: 'What if I want to discontinue the course?',
    answer: 'We offer an easy opt-out option if you want to discontinue within the first 14 days of the program.'
  },
  {
    question: 'What if I miss some sessions?',
    answer: 'No issues! We provide a learner friendly portal from where you can easily access recordings of all live lectures.'
  },
  {
    question: 'Will I receive a certificate upon completion of the course?',
    answer: 'Yes, you will receive a certificate upon successful completion of the course. To qualify, you must complete at least 60% of the lectures and assignments and finish at least one medium-level difficulty project on the experience portal.'
  },
  {
    question: 'Who is eligible to enroll in the Full Stack Web Developer Bootcamp?',
    answer: 'The Bootcamp is open to working professionals, final-year college students, and fresher graduates from any industry or domain.'
  },
  {
    question: 'How will I benefit from mentorship by industry experts during the Full Stack Developer course?',
    answer: 'Industry mentors are experts from reputed companies who have proven competencies in specific fields and are excellent guides to help you determine your next steps in the industry. They will conduct mock interviews with you on a one-on-one basis and provide detailed feedback.'
  },
  {
    question: 'How do I get my doubts resolved?',
    answer: 'Our team of over 1,000 teaching assistants is available 7 days a week from 10 AM to 12 AM to provide one-on-one support. You can connect with them via chat, audio call, or screen sharing to resolve your queries.'
  },
  {
    question: 'Where will the classes take place?',
    answer: 'The classes will be conducted online. The program is designed to provide you with access to all pre-recorded content and materials, allowing you to learn from anywhere at any time. In addition to this, you will have project-based community learning, regular assignments and unlimited doubt support.'
  },
  {
    question: 'Can I learn the backend in 3 months?',
    answer: 'Learning the basics of backend development in 3 months is possible, but becoming proficient and job-ready usually takes more time around 6 to 8 months to master key concepts, and tools by working on real-world projects.'
  },
  {
    question: 'Is backend developer a good career?',
    answer: 'Yes, backend development is a highly rewarding career. There is a strong demand for backend developers in various industries. With the rapid growth of web and mobile applications, skilled backend developers are highly sought after and often get competitive salaries.'
  }
];

export function FAQSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl mb-12 text-center">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
