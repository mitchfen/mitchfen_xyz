import { SiGithub, SiLinkedin, SiMailDotRu, SiOrcid } from "react-icons/si";

const Socials = () => {
  return (
    <>
      <SiGithub size={35} />{" "}
      <a
        href="https://github.com/mitchfen"
        target="_blank"
        rel="noreferrer noopener"
      >
        mitchfen
      </a>
      <br />
      <br />
      <SiLinkedin size={35} />{" "}
      <a
        href="https://www.linkedin.com/in/mitchfen/"
        rel="noopener noreferrer"
        target="_blank"
      >
        mitchfen
      </a>
      <br />
      <br />
      <SiMailDotRu size={35} />{" "}
      <a href="mailto:mitchfen@mitchfen.xyz">mitchfen@mitchfen.xyz</a>
      <br />
      <br />
      <SiOrcid size={35} />{" "}
      <a
        href="https://orcid.org/0000-0002-9684-0447"
        rel="noopener noreferrer"
        target="_blank"
      >
        0000-0002-9684-0447
      </a>
    </>
  );
};

export default Socials;
