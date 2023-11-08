import { cameras, getVideoURL, videos } from "./constants";
import { Card } from "./components/card";
import "./index.css";

function App() {
  return (
    <div className="container">
      {videos.map((video) => {
        if (cameras.includes(video.id)) {
          return (
            <Card
              id={video.id}
              url={getVideoURL(video.cameraId, video.token)}
            />
          );
        }
      })}
    </div>
  );
}

export default App;
