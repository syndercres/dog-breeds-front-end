import linkedinIcon from "../images/linkedinIcon.png";

export default function Footer(): JSX.Element {
  return (
    <>
      <p className="api-txt">
        API: <a href="https://dog.ceo/">DogCEO</a>
      </p>
      <div className="linkedin-container">
        <a
          className="linkedin-btn"
          href="https://www.linkedin.com/in/alessiaborys/"
        >
          <img
            src={linkedinIcon}
            alt="linkedin-icon"
            className="linkedin-icon"
          />
          <span className="linkedin-name">Alessia</span>
        </a>
        <a className="linkedin-btn" href="https://www.linkedin.com/in/XX/">
          <img
            src={linkedinIcon}
            alt="linkedin-icon"
            className="linkedin-icon"
          />
          <span className="linkedin-name">Grace</span>
        </a>
        <a className="linkedin-btn" href="https://www.linkedin.com/in/XX/">
          <img
            src={linkedinIcon}
            alt="linkedin-icon"
            className="linkedin-icon"
          />
          <span className="linkedin-name">Maghfoor</span>
        </a>
        <a className="linkedin-btn" href="https://www.linkedin.com/in/XX/">
          <img
            src={linkedinIcon}
            alt="linkedin-icon"
            className="linkedin-icon"
          />
          <span className="linkedin-name">Sinbad</span>
        </a>
      </div>
    </>
  );
}
