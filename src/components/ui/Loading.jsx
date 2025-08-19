export default function Loading({ message = "Chargement en cours..." }) {
  return (
    <div className="loading">
      <span className="loader"></span>
      <p className="loading__message">{message}</p>
    </div>
  );
}
