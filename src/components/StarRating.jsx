const StarRating = ({rating}) => {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
        }

        if (halfStar) {
            stars.push(<i key="half" className="bi bi-star-half text-warning"></i>);
        }

        while (stars.length < 5) {
            stars.push(<i key={stars.length} className="bi bi-star text-warning"></i>);
        }

        return stars;
    };


    return (
        <div className="mb-2">
            {renderStars(rating)} <small className="text-muted ms-2">({rating} / 5)</small>
        </div>
    )
}
export default StarRating;