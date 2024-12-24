import {useState} from "react";
const ReadMore = ({ text, maxLength }) => {
    const [isReadMore, setIsReadMore] = useState(true);
  
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
  
    return (
      <p>
        {isReadMore ? text.slice(0, maxLength) + "..." : text}
        <button onClick={toggleReadMore} style={{ marginLeft: "10px", cursor: "pointer" }}>
          {isReadMore ? "Read More" : "Read Less"}
        </button>
      </p>
    );
  };

export default ReadMore