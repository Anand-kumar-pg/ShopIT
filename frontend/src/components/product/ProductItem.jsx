import React, { useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ProductItem = ({ product, columnSize }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const cardStyle = {
        transition: "transform 0.4s ease-in-out",
        transform: isHovered ? "translateY(-10px)" : "none",
        backgroundColor: isHovered ? "#f8f9fa" : "#fff", 
        color: isHovered ? "#212529" : "#000",
    };

    return (
        <div className={`col-sm-12 col-md-6 col-lg-${columnSize} my-3`}>
            <div
                className="card p-3 rounded"
                style={{ ...cardStyle, backgroundColor: '#f5f5f5' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    className="card-img-top mx-auto"
                    src={product?.images[0] ? product?.images[0]?.url : '/images/default_product.png'}
                    alt={product?.name}
                />
                <div
                    className="card-body ps-3 d-flex justify-content-center flex-column"
                >
                    <h5 className="card-title">
                        <Link to={`/product/${product?._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{product?.name}</Link>
                    </h5>
                    <div className="ratings mt-auto d-flex">
                        <StarRatings
                            rating={product?.ratings}
                            starRatedColor="#ffb829"
                            numberOfStars={5}
                            name='rating'
                            starDimension="22px"
                            starSpacing="1px"
                        />
                        <span id="no_of_reviews" className="pt-2 ps-2">({product?.numOfReviews}) </span>
                    </div>
                    <p className="card-text mt-2">${product?.price}</p>
                    <Link to={`/product/${product?._id}`} id="view_btn" className="btn btn-block" style={{ backgroundColor: '#007bff', color: '#fff' }}>
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
