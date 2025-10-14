import React from 'react'
import { Link } from 'react-router'

const ErrorPage = () => {
    return (
        <div>
            <div className="card bg-neutral text-neutral-content w-96">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Oops ! Something went wrong</h2>
                    <p>Please Try Again or Explore</p>
                    <div className="card-actions justify-end">
                        <Link to='/feed' className="btn btn-primary">Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage