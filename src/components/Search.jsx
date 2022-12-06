import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context/YoutubeContext";
import { toast } from "react-toastify";
import { SearchPage } from "../pages";

const Search = () => {
  const navigate = useNavigate();
  const { searchTerm, handleSearchTerm, setSearchResults } = useStateContext();

  // change it later for handling search functionality
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchVideos = async (term) => {
      const options = {
        method: "GET",
        url: `${process.env.REACT_APP_YOUTUBE_BASE_URL}/search`,
        params: {
          q: term,
          part: "snippet,id",
          maxResults: "50",
          order: "date",
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);

        navigate(`/search?q=${term}`);
        setSearchResults(response.data.items);
      } catch (error) {
        toast.error("Something went wrong, Please Try again!");
      }
    };
    searchVideos(searchTerm);
  };
  return (
    <div className="search-form-container">
      <form onSubmit={handleSearchSubmit}>
        <input
          value={searchTerm}
          type="text"
          onChange={handleSearchTerm}
          placeholder="Search here.."
          className="search-form-input"
        />
        <button type="submit" className="btn search-btn">
          <FaSearch color="white" />
        </button>
      </form>
    </div>
  );
};

export default Search;
