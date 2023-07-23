const SectionTitle = ({ heading }) => {
    return (
      <div className="text-center space-y-4 mt-6 md:mt-16 md:mb-5 w-9/12 md:w-7/12 lg:w-6/12 mx-auto">
        <h2 className="text-2xl text-[#e84766] md:text-3xl lg:text-4xl font-semibold">
          {heading}
        </h2>
        <div className="bg-blue-600 h-1 w-14 mx-auto mb-4"></div>
      </div>
    );
  };
  
  export default SectionTitle;
  