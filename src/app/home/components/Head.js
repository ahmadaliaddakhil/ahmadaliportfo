
import Coffee from "./elements/Coffee"


export default function HeaderHome() {
  return (
    <div className="flex flex-col">
      <div className='flex flex-row justify-between'>
      <h1 className="md:text-3xl text-2xl font-medium flex gap-1">Hi, I&apos;m Ali <p className="animate-shake">👋</p></h1>
        <Coffee/>
      </div>
      <ul className='flex md:space-x-8 space-x-0 px-5 py-2 md:flex-row flex-col '>
        <li className='list-disc text-md'>Based in Lamongan 🇮🇩</li>
      </ul>
      <p className='my-2 md:leading-9 leading-7 text-sm'>Enthusiastic and experienced junior web developer with a strong focus on web development. Proficient in design and has a deep understanding of all aspects of web technologies. Collaborative team player dedicated to creating efficient, scalable, visually appealing and problem-solving web applications.</p>
    </div>
  )
}