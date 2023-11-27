import styles from "./footer.module.scss";
import utilStyles from "../styles/utils.module.scss";

import Typerwriter from "./typewriter";

import { AnimatedSocialIcon } from "react-animated-social-icons";

export default function Footer() {
  return (
    <div className={`${styles.container} ${utilStyles.padTopMd}`}>
      <text className={`${styles.title} ${utilStyles.subTitle} ${utilStyles.highlightWhite}`}>Contribute?</text>
      <div className={`${utilStyles.subTitle} ${utilStyles.accentLight}`}>__</div>
      <footer
        className={`${styles.socialsFooter} ${utilStyles.padTopMd} ${utilStyles.quarterPage}`}
      >
        <AnimatedSocialIcon
          brandName="github"
          url="https://github.com/jetware-mc"
          animation="grow"
          defaultColor="#f8f8f8"
          hoverColor="#c39ea0"
          width="3em"
          animationDuration={0.2}
          style={{ padding: "3em" }}
        />
        <br />
        <br />
        <br />
          <div className={`${styles.typewriter} ${utilStyles.accentLight}`}>Discord - aBallOfNewsies</div>
          <br />
          <br />
          <br />
        <div className={styles.typewriter}>
          <Typerwriter
            elements={[
              "Open Source",
                "Please Help",
                "Seriously, this is a pain",
                "Powerful",
                "Full of potential",
                "Cool",
                "Thanks to minehut <3"
            ]}
            cursorColor={"white"}
          />
        </div>
        <br />
        <div className={styles.signature}>Made with &#9829; by Jade</div>
      </footer>
    </div>
  );
}
