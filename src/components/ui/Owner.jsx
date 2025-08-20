export default function Owner({ name, avatar }) {
  return (
    <div className="apartment__owner">
      <span className="owner__name">{name}</span>
      <img
        src={avatar}
        alt="Avatar du propriétaire"
        className="owner__avatar"
      />
    </div>
  );
}
