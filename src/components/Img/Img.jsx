import "./img.css";
import winterImg from "../../img/img.jpg";
import tokyo from "../../img/img2.jpg";
import sydnei from "../../img/img3.jpg";
import fuji from "../../img/img4.jpg";
const Img = () => {
  return (
    <div data-bs-spy="scroll">
      <img src={winterImg} alt="winter img" className="img-1" />
      <img src={tokyo} alt="tokyo" className="img-thumbnail" />
      <div className="text-center">
        <img
          src={sydnei}
          alt="sydie"
          className="rounded"
          height={300}
          width={300}
        />
      </div>
      <img
        src={fuji}
        alt="fuji"
        className="rounded mx-auto d-block"
        width={300}
        height={300}
      />
      <div className="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
      </div>
      <div class="row">
        <div class="col-2 text-truncate">
          Praeterea iter est quasdam res quas ex communi.
        </div>
      </div>
    </div>
  );
};

export default Img;
