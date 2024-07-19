import React from 'react'

function Header() {
  return (
    <>
        <div className="d-flex justify-content-between align-items-center  mt-2 container">
            <h1>mt</h1>
            <div className="d-flex justify-content-evenly w-25 align-items-center ">
                <p>home</p>
                <p>works</p>
                <p>about me</p>
            </div>

            <div className="d-flex justify-content-evenly  align-items-center">
                <p>home</p>
                <p>works</p>
            </div>

        </div>
    </>
  )
}

export default Header