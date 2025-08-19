export default function Loading({ message }) {
  return (
    <div className="loading">
      <span className="loader"></span>

      <p className="loading__message">{message}</p>
    </div>
  );
}
