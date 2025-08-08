import SectionTitle from "../SectionTitle/SectionTitle";


export default function YouTubeEmbed({ videoId = "dQw4w9WgXcQ" }) {
  return (
    <div style={{ width: "50%", maxWidth: "1200px", margin: "24px auto" }}>
      <SectionTitle subTitle={'Mission And Vision'} Title={'How we can build a better country together!'}/>
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
