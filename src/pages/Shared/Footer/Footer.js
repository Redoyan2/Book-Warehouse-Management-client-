
import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <div className='footer'>
            <div className='footer-section'>
                <div className='footer-item'>
                    <h1>Alzoya Books Management</h1>
                    <ul>Help</ul>
                    <ul>Order Status</ul>
                    <ul>Delivery Choice</ul>
                    
                </div>
                <div className='footer-item'>
                    <h1>Contact us</h1>
                    <ul>47/5, Nikunjo-1, Dhaka-1229</ul>
                    <ul>01754862546</ul>
                    <ul>info@adana.com</ul>
                </div>
                <div className='footer-item'>
                    <h1>Working hours</h1>
                    <ul>Sat-Thu: 9.00am-6.00pm</ul>
                    <ul>Tuesday: 9.00am-6.00pm</ul>
                    <ul>Friday: Holiday</ul>
                </div>
                
            </div>
            <div>
                <h5 className='footer-bottom'>Copyright-alzoya-books-management@2022</h5>
            </div>
        </div>
    );
};

export default Footer;