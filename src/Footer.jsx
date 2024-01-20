import React from 'react'
import './Footer.css'
import twitter from './assets/twitter.svg'
import facebook from './assets/facebook.svg'
import github from './assets/github.svg'
import instagram from './assets/instagram.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://twitter.com/markghsu" className="footer--link">
                <img className="footer--icon" src={twitter} alt="Twitter Logo" />
            </a>
            <a href="https://facebook.com" className="footer--link">
                <img className="footer--icon" src={facebook} alt="Facebook Logo" />
            </a>
            <a href="https://github.com/markghsu" className="footer--link">
                <img className="footer--icon" src={github} alt="Github Logo" />
            </a>
            <a href="https://instagram.com" className="footer--link">
                <img className="footer--icon" src={instagram} alt="Instagram Logo" />
            </a>
        </footer>
    )
}