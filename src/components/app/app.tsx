import { cameras, getVideoURL, videos } from "../../constants";
import { Card } from "../card";
import "../../index.css";
import { css } from "@emotion/css";
import { useState } from "react";

function App() {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: repeat(${isGridView ? "2" : "1"}, 1fr);
        grid-template-rows: repeat(
          ${isGridView ? "4" : "7"},
          ${isGridView ? "1fr" : "50%"}
        );
        gap: ${isGridView ? "16px" : "32px"};
        padding: 48px 16px 16px 16px;
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, 0);

          button {
            font-size: 16px;
          }
        `}
      >
        <button onClick={() => setIsGridView(false)}>Список</button>
        <button onClick={() => setIsGridView(true)}>Плитка</button>
      </div>

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
