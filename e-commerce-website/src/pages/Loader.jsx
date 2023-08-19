import Spinner from "react-bootstrap/Spinner";
const Loader = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "10em" }}>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="primary" />
        <div style={{ marginTop: "1em" }}>Loading...</div>
      </div>
    </>
  );
};
export default Loader;
