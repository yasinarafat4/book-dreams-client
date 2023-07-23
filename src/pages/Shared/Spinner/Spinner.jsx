import { GridLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <GridLoader size={300} color="#e84766" loading={true} />
    </div>
  );
};

export default Spinner;