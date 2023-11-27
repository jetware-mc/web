import dynamic from "next/dynamic";
import Image from "next/image";

import styles from "../styles/Home.module.scss";
import utilStyles from "../styles/utils.module.scss";

import { motion } from "framer-motion";

import getIntrodutionData from "../lib/introduction";
import getProjectData from "../lib/projects";

import { GeneralPageLayout } from "../components/layouts";
import Navbar from "../components/Navbar";
import Typerwriter from "../components/typewriter";

const DisplacementSphere = dynamic(() =>
  import("../components/DisplacementSphere")
);
const DecoderText = dynamic(() => import("../components/DecoderText"));
const Gigs = dynamic(() => import("../components/groups/gigs"));
const Projects = dynamic(() => import("../components/groups/projects"));
const Skills = dynamic(() => import("../components/groups/skills"));

export async function getStaticProps() {
  const introData = await getIntrodutionData();
  const projectsData = await getProjectData();

  return {
    props: {
      introData,
      projectsData,
    },
  };
}

export default function Home({ introData, projectsData }) {
  return (
    <div>
      <Navbar
        current={"/"}
        pages={[
          {
            title: "JETWARE",
            id: "intro",
          },
          {
            title: "TOOLS",
            id: "projects",
          },
          {
            title: "CONTACT",
            id: "contact",
          },
        ]}
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <DisplacementSphere
          className={styles.introBackground}
          theme={{
            rgbBackground: "248 229 229",
            themeId: "light",
            colorWhite: "#ffffff",
          }}
        />
      </motion.div>
      <div className={`${utilStyles.fullPage} ${styles.titleSection}`}>
        <div className={utilStyles.centered}>
          <DecoderText
            className={`${utilStyles.mainHeader} ${styles.title}`}
            text="JETWARE"
            delay={300}
          />
          <div className={styles.subtitle}>
            OUR TOOLKIT <hr className={utilStyles.lineAfterContent} />
          </div>
          <br />
          <div className={`${styles.typewriter}`}>
            <text
              className={`${utilStyles.accentDark} ${utilStyles.padRightLt}`}
            >
              +
            </text>
            <Typerwriter
              elements={["Expandability", "Flexibility", "Power", "Potential", "YOU"]}
              cursorColor={"accentDark"}
              speed={20}
            />
          </div>
        </div>
      </div>

      <GeneralPageLayout home={true} title={"About"} socials={true}>
        <div
          id={"intro"}
          className={`${styles.container} ${styles.introSection} ${utilStyles.fullPage}`}
        >
          <div className={utilStyles.sectionHeader}>What Is This?</div>
          <div className={styles.headerGrid}>
            <div className={`${styles.col} ${styles.introLeft}`}>
              <h3 className={utilStyles.subTitle}>A Revolution</h3>
              <motion.div
                lang={"en"}
                className={styles.introDescription}
                initial={{
                  boxShadow: "1px 1px 5px 0.5px rgba(0, 0, 0, 0.5)",
                }}
                whileHover={{
                  boxShadow: "-1px -1px 5px 0.5px rgba(0, 0, 0, 0.5)",
                }}
                whileTap={{
                  boxShadow: "-1px -1px 5px 0.5px rgba(0, 0, 0, 0.5)",
                }}
              >
                Remember Spigot, the API, the performance, how everything relies on external development to function.
                  This is the revolution, a set of free & paid tools that integrate with the community and with themselves.
                  Supporting multiple languages, your budget, and the flexible nature you deserve
              </motion.div>
            </div>
          </div>
        </div>
        <div />
        <div
          id={"projects"}
          className={`${styles.container} ${styles.projectsSection} ${utilStyles.fullPage}`}
        >
          <div className={utilStyles.sectionHeader}>Tools</div>
          <Projects projects={projectsData} />
        </div>
        <div id={"contact"}></div>
      </GeneralPageLayout>
    </div>
  );
}
