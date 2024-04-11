import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Products</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Men's Clothing</a></li>
                            <li><a href="#">Women's Clothing</a></li>
                            <li><a href="#">Electronics</a></li>
                            <li><a href="#">Home & Kitchen</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Contact Information</h5>
                        <p>ind Main Street</p>
                        <p>City, Country</p>
                        <p>Email: infoShopIt@example.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                    
                    <div className="col-md-3">
                        <h5>Newsletter</h5>
                        <p>Subscribe to our newsletter for exclusive offers and updates.</p>
                        <form>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Enter your email" />
                            </div>
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
                <hr className="mt-4 mb-3" />
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; 2024 ShopIt Company. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-end">
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                            <li className="list-inline-item"><a href="#">Terms of Use</a></li>
                            <li className="list-inline-item"><a href="#">Accessibility</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
