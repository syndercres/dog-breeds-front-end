import linkedinIcon from "../images/linkedin-icon.png";
import "./footer.css";

export default function Footer(): JSX.Element {
  return (
    <div className="footer">
      <p className="api-txt">
        image api: <a href="https://dog.ceo/">dogceo</a>
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
          <span className="linkedin-name">alessia</span>
        </a>
        <a
          className="linkedin-btn"
          href="https://www.linkedin.com/in/gracekuperman/"
        >
          <img
            src={linkedinIcon}
            alt="linkedin-icon"
            className="linkedin-icon"
          />
          <span className="linkedin-name">grace</span>
        </a>
        <a
          className="linkedin-btn"
          href="https://www.linkedin.com/in/maghfoor/"
        >
          <img
            src={linkedinIcon}
            alt="linkedin-icon"
            className="linkedin-icon"
          />
          <span className="linkedin-name">maghfoor</span>
        </a>
        <a
          className="linkedin-btn"
          href="https://www.linkedin.com/in/syndercombe-creswell/"
        >
          <img
            src={linkedinIcon}
            alt="linkedin-icon"
            className="linkedin-icon"
          />
          <span className="linkedin-name">sinbad</span>
        </a>
      </div>
    </div>
  );
}
