import { useStateContext } from "../context/YoutubeContext";
import { ChannelCard, VideoCard } from "../components";

const SearchPage = () => {
  const { searchResults, searchTerm } = useStateContext();

  return (
    <div className="search-results-container">
      <h2 className="page-title">You searched for : {searchTerm}</h2>
      {/* map over the search result and display channel card if it's a channel and if it's a video display channel card */}
      {searchResults.map((searchResult) =>
        searchResult.id.videoId ? (
          <VideoCard key={searchResult.id?.videoId} video={searchResult} />
        ) : (
          <ChannelCard key={searchResult.id.channelId} channel={searchResult} />
        )
      )}
    </div>
  );
};

export default SearchPage;
