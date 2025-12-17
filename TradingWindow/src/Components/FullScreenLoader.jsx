import "./FullScreenLoader.css";

export default function FullScreenLoader({ show }) {
  if (!show) return null;

  return (
    <div className="fullscreen-loader">
      <div className="spinner" />
      <p>Loading...</p>
    </div>
  );
}
