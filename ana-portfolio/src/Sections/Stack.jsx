import stackImg01 from "../assets/images/stack/stack-img01.png";
import stackImg02 from "../assets/images/stack/stack-img02.png";
import stackImg03 from "../assets/images/stack/stack-img03.png";
import stackImg04 from "../assets/images/stack/stack-img04.png";
import stackImg05 from "../assets/images/stack/stack-img05.png";
import stackImg06 from "../assets/images/stack/stack-img06.png";
import stackImg07 from "../assets/images/stack/stack-img07.png";
import stackImg08 from "../assets/images/stack/stack-img08.png";
import stackImg09 from "../assets/images/stack/stack-img09.png";
import stackImg10 from "../assets/images/stack/stack-img10.png";
import stackImg11 from "../assets/images/stack/stack-img11.png";
import stackImg12 from "../assets/images/stack/stack-img12.png";
import stackIcon from "../assets/icons/stack.svg";
import "./Stack.css";

const stackItems = [
  { id: "s01", img: stackImg01, alt: "stack-img01" },
  { id: "s02", img: stackImg02, alt: "stack-img02" },
  { id: "s03", img: stackImg03, alt: "stack-img03" },
  { id: "s04", img: stackImg04, alt: "stack-img04" },
  { id: "s05", img: stackImg05, alt: "stack-img05" },
  { id: "s06", img: stackImg06, alt: "stack-img06" },
  { id: "s07", img: stackImg07, alt: "stack-img07" },
  { id: "s08", img: stackImg08, alt: "stack-img08" },
  { id: "s09", img: stackImg09, alt: "stack-img09" },
  { id: "s10", img: stackImg10, alt: "stack-img10" },
  { id: "s11", img: stackImg11, alt: "stack-img11" },
  { id: "s12", img: stackImg12, alt: "stack-img12" },
];

export default function Stack() {
  return (
    <section id="stack" className="stack-section">
      <div className="stack-header">
        <img src={stackIcon} alt="Stack icon" className="stack-header-icon" />
        <h2 className="stack-title">Stack Técnico</h2>
      </div>

      <div className="stack-carousel">
        <div className="stack-track">
          {stackItems.map(({ id, img, alt }) => (
            <img key={id} src={img} alt={alt} className="stack-icon" />
          ))}
          {stackItems.map(({ id, img, alt }) => (
            <img key={`${id}-dup`} src={img} alt={alt} className="stack-icon" />
          ))}
        </div>
      </div>
    </section>
  );
}
