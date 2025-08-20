export default function Rating({ rating = 0 }) {
  const maxStars = 5;
  const numericRating = parseInt(rating);

  return (
    <div className="apartment__rating">
      {Array.from({ length: maxStars }, (_, index) => {
        const isFilled = index < numericRating;

        return (
          <div
            key={index}
            className={`rating__star ${
              isFilled ? "rating__star--filled" : "rating__star--empty"
            }`}
          >
            <img
              src={
                isFilled
                  ? "/src/assets/images/icons/rating-star-filled.png"
                  : "/src/assets/images/icons/rating-star-empty.png"
              }
              alt={isFilled ? "Étoile remplie" : "Étoile vide"}
            />
          </div>
        );
      })}
    </div>
  );
}
