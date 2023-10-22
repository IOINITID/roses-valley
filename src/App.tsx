import "./App.css";
import { cameras, getVideoURL, videos } from "./constants";
import { Card } from "./components/card";

function App() {
  return (
    <div class="container">
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
