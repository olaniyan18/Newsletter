/** @format */
import "../style.css";
import React from "react";
import image from "../images/illustration-sign-up-desktop.png";
import image2 from "../images/illustration-sign-up-mobile.png";
import Success from "./Success";
import { useState } from "react";
export default function Container() {
  const [task, setTask] = useState({ name: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const valid = document.querySelector(".valid");
    const input = document.querySelector(".input");
    if (task.name === "") {
      valid.style.visibility = "visible";
      input.style.borderColor = "hsl(4, 100%, 67%)";
    } else {
      setSubmitted(true);
    }

    if (task.name != "gmail.com" || "yahoo.com" || "outlook.com") {
      valid.style.visibility = "visible";
    }
  }

  if (submitted) {
    return <Success task={task} />;
  }
  return (
    <div className='container'>
      <div className='newsletter'>
        <div className='stay-join'>
          <span className='stay'> Stay updated!</span>
          <span className='join'>
            Join 60,000+ product managers receiving monthly updates on:
          </span>
        </div>
        <div className='product-measure-more'>
          <div className='product'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='21'
              height='21'
              viewBox='0 0 21 21'
            >
              <g fill='none'>
                <circle cx='10.5' cy='10.5' r='10.5' fill='#FF6155' />
                <path
                  stroke='#FFF'
                  strokeWidth='2'
                  d='M6 11.381L8.735 14 15 8'
                />
              </g>
            </svg>
            <span> Product discovery and building what matters</span>
          </div>
          <div className='measure'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='21'
              height='21'
              viewBox='0 0 21 21'
            >
              <g fill='none'>
                <circle cx='10.5' cy='10.5' r='10.5' fill='#FF6155' />
                <path
                  stroke='#FFF'
                  strokeWidth='2'
                  d='M6 11.381L8.735 14 15 8'
                />
              </g>
            </svg>
            <span> Measuring to ensure updates are a success</span>
          </div>
          <div className='more'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='21'
              height='21'
              viewBox='0 0 21 21'
            >
              <g fill='none'>
                <circle cx='10.5' cy='10.5' r='10.5' fill='#FF6155' />
                <path
                  stroke='#FFF'
                  strokeWidth='2'
                  d='M6 11.381L8.735 14 15 8'
                />
              </g>
            </svg>
            <span>And much more!</span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className='email'>
              <label> Email address</label>
              <label className='valid'>Valid email required</label>
            </div>

            <div className='input-button'>
              <input
                className='input'
                onChange={(e) => setTask({ name: e.target.value })}
                value={task.name}
                type='email'
                placeholder='email@company.com '
              />
            </div>
          </div>
          <button className='button' type='submit'>
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <div className='image'>
        <img className='image1' src={image} />
        <img className='image2' src={image2} />
      </div>
    </div>
  );
}
