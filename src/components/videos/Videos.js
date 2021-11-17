import { useSubscription } from "mqtt-react-hooks";
import Youtube from "react-youtube";

export default function Status() {
  const { message } = useSubscription(["Group_2/video"]);

  const opts = {
    height: "200",
    width: "300",
  };

  return (
    <>
      <h2>Recommendations</h2>
      <div className="videosContainer">
        {message?.message && JSON.parse(message.message)?.videos
          ? JSON.parse(message.message).videos.map((vidId, i) => (
              <>
                <Youtube videoId={vidId} opts={opts} key={i} />
                <div className="space" />
              </>
            ))
          : "No recommendations yet"}
      </div>
    </>
  );
}
