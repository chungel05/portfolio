import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Experiences from "./Experiences";
import ContactMe from "./ContactMe";

export default function Home() {
    return (
        <div>
            <section
                id="about"
                className="scroll-mt-[104px]"
            >
                <AboutMe />
            </section>
            <section
                id="skills"
                className="scroll-mt-[104px]"
            >
                <Skills />
            </section>
            <section
                id="experiences"
                className="scroll-mt-[104px]"
            >
                <Experiences />
            </section>
            <section
                id="contact"
                className="scroll-mt-[104px]"
            >
                <ContactMe />
            </section>
        </div>
    );
}
