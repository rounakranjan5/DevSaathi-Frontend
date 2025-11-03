import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-base-300 text-base-content rounded p-10 mt-auto">
                <nav className="grid grid-flow-col gap-4">
                    <Link to='/about' className="link link-hover">About us</Link>
                    <Link to='/contact' className="link link-hover">Contact</Link>
                    <Link to='/terms-conditions' className="link link-hover">Terms and Conditions</Link>
                    <Link to='privacy-policy' className="link link-hover">Privacy Policy</Link>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-6">
                        <a
                            href="https://github.com/rounakranjan5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
        3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
        -.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 
        1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 
        3.495.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 
        0-1.31.465-2.381 1.235-3.221-.135-.303-.54-1.523.105-3.176 
        0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 
        1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 
        3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
        1.23 1.911 1.23 3.221 0 4.61-2.805 5.625-5.475 
        5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 
        3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 
        24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/rounakranjan5/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
        2.761 2.239 5 5 5h14c2.761 0 5-2.239 
        5-5v-14c0-2.761-2.239-5-5-5zm-11 
        19h-3v-10h3v10zm-1.5-11.268c-.966 
        0-1.75-.79-1.75-1.764s.784-1.764 
        1.75-1.764 1.75.79 1.75 
        1.764-.784 1.764-1.75 
        1.764zm13.5 11.268h-3v-5.604c0-1.337-.026-3.061-1.868-3.061-1.868 
        0-2.154 1.46-2.154 2.968v5.697h-3v-10h2.881v1.367h.041c.401-.757 
        1.381-1.555 2.841-1.555 3.037 0 3.598 2.002 
        3.598 4.604v5.584z" />
                            </svg>
                        </a>

                        <a
                            href="https://instagram.com/rounak__ranjan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 
        4.85.07 1.366.062 2.633.35 
        3.608 1.325.975.975 1.263 
        2.242 1.324 3.608.058 1.266.069 
        1.646.069 4.85s-.012 3.584-.07 
        4.85c-.062 1.366-.35 2.633-1.325 
        3.608-.975.975-2.242 1.263-3.608 
        1.324-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.324-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.35-2.633 
        1.325-3.608.975-.975 2.242-1.263 
        3.608-1.324 1.266-.058 1.646-.069 
        4.85-.069zm0-2.163c-3.259 0-3.667.013-4.947.072-1.577.072-2.987.356-4.093 
        1.462-1.106 1.106-1.39 2.516-1.462 
        4.093-.059 1.28-.072 1.688-.072 
        4.947s.013 3.667.072 
        4.947c.072 1.577.356 2.987 
        1.462 4.093 1.106 1.106 2.516 
        1.39 4.093 1.462 1.28.059 
        1.688.072 4.947.072s3.667-.013 
        4.947-.072c1.577-.072 2.987-.356 
        4.093-1.462 1.106-1.106 1.39-2.516 
        1.462-4.093.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.072-1.577-.356-2.987-1.462-4.093-1.106-1.106-2.516-1.39-4.093-1.462-1.28-.059-1.688-.072-4.947-.072z" />
                                <path d="M12 5.838a6.162 6.162 0 100 
        12.324 6.162 6.162 0 000-12.324zm0 
        10.162a3.999 3.999 0 110-7.998 
        3.999 3.999 0 010 7.998zm6.406-11.845a1.44 
        1.44 0 11-2.88 0 1.44 1.44 0 012.88 
        0z" />
                            </svg>
                        </a>
                    </div>
                </nav>

                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by devSaathi🤝</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer