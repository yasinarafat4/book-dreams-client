import { useEffect, useState } from "react";

const useColleges = () => {
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://book-dreams-server.vercel.app/college")
        .then((res) => res.json())
        .then((data) => {
          setColleges(data);
          setLoading(false);
        });
    }, []);
    return [colleges, loading];
  };

export default useColleges;