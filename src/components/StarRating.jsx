function StarRating(props) {
    const { rating } = props;
    const filledStars = Math.round(rating);
  
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, index) => (
            <span key={index} className={index < filledStars ? "filled" : ""}>
                &#9733;
            </span>
        ))}
      </div>
    );
  }

  export default StarRating;