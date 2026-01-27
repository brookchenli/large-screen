import "./index.less";
export default function ImageCard({ image }: { image: string }) {
  return (
    <div className="image-card">
      <img src={image} alt="image" className="image-card-image" />
    </div>
  );
}
