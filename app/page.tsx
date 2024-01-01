import Image from "next/image"
import Experience from "../components/Experience"
import educationalExperiences from "../data/educationalExperiences";

export default function Home() {
  return (
    <main>
      <h1>Welcome to my portfolio site!</h1>
      <section>
        <h2>About me...</h2>
        <div>
          <p>
            My name is <strong>James Graca-Jones</strong> and I am a <strong>software developer</strong> living in <strong>London</strong>.
          </p>
          {/* TODO: decide which Image elements should be given the priority tag */}
          <Image src="/headshot.jpeg" alt="" width={50/96*98} height={50} priority/>
        </div>
      </section>
      <section>
        <h2>Education...</h2>
        <ol>
          {educationalExperiences.map(experience => <Experience experience={experience} />)}
        </ol>
      </section>
    </main>
  )
}
