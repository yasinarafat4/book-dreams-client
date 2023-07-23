import { GridLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div
      className="
      h-[90vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <GridLoader size={20} color="#e84766" loading={true} />
    </div>
  );
};

export default Spinner;