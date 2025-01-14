import "./index.css";
const Text = () => {
  return (
    <div className="container">
      <p className="text">Typewriter CSS.</p>
      <p>
        <abbr title="attribute" className="h1">
          attr
        </abbr>
      </p>
      <p className=" display-5">
        You can use the mark tag to
        <mark className=" text-danger bg-success">highlight</mark> text. You can
        use the mark tag to
        <mark className=" text-danger bg-success">highlight</mark> text. use the
        mark tag to
        <mark className=" text-danger bg-success">highlight</mark> text.
      </p>
    </div>
  );
};

export default Text;
