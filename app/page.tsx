import Image from "next/image"
import Experience from "../components/Experience"
import { notableExperiences, educationalExperiences } from "../data/experiences";

export default function Home() {
  return (
    <main>
      <h1>Welcome to my portfolio site!</h1>
      <section>
        <h2>About me...</h2>
        <p>
          My name is <strong>James Graca-Jones</strong> and I am a <strong>software developer</strong> living in <strong>London</strong>.
        </p>
        {/* TODO: decide which Image elements should be given the priority tag */}
        <Image src="/headshot.jpeg" alt="" width={50/96*98} height={50} priority/>
      </section>
      <section>
        <h2>Notable Experience...</h2>
        {/* TODO: add URLs taking visitors to an organisation's homepage */}
        <ol>
          {notableExperiences.map((experience, index) => <li key={index}><Experience experience={experience} /></li>)}
        </ol>
      </section>
      <section>
        <h2>Education...</h2>
        <ol>
          {educationalExperiences.map((experience, index) => <li key={index}><Experience experience={experience} /></li>)}
        </ol>
      </section>
    </main>
  )
}
