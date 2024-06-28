import SectionHeading from './../../commons/components/elements/SectionHeading';
import SectionSubHeading from './../../commons/components/elements/SectionSubHeading';
export default function Header() {
  return (
    <>
    <div className='space-y-6'>
      <div className='space-y-2'>
        <SectionHeading title='About' />
        <SectionSubHeading>
          <p className='text-md dark:text-neutral-400'>A short story of me, not important but seem better than nothing.</p>
        </SectionSubHeading>
      </div>
      <div className='border-b border-dashed border-neutral-600 dark:border-neutral-500'></div>
      <p className='font-light text-md leading-7'>
      Hi, my name is Ahmad Ali, also known as Ali, is a school student who is passionate about web development technology.
       I have shown dedication and a keen ability to master various web frameworks. Ali&apos;s journey began with a solid foundation in HTML, CSS, and JavaScript, which allowed him to create basic web pages and learn popular frameworks such as TailwindCSS, React, and Angular.</p>
      <p className='font-light text-md leading-7'>
      What sets Ali apart is his ability to quickly adapt to new challenges, making him a promising web developer. Despite his limited experience, he actively seeks out resources and tutorials to stay up-to-date with the web development landscape. Ali&apos;s dedication and flexibility mark her as a valuable addition to any web development team, and her journey has only just begun. He is well on his way to becoming a skilled professional and proficient in using a wide variety of web frameworks.</p>
      <p className='font-light text-md leading-7'>
        I stay current with industry trends and best practices to provide innovative solutions that surpass company expectations. My strong 
        problem-solving skills and attention to detail drive innovation in every project I handle.</p>
    </div>
    </>
  )
}