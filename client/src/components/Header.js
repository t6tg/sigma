/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Link } from "react-router";

export default function Header() {
  return (
    <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0 flex flex-row">
        <div className="h-10 w-10 self-center mr-2">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img
            className="h-10 w-10 self-center"
            src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/p960x960/90377903_110894397217283_4478088329086107648_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_oc=AQkSp8nHaV3zvrNl7frwJBPpu42n_UgWMV4bfwLKqzgTOvKckx70xHytcbYqGewy_og&_nc_ht=scontent.fbkk12-2.fna&_nc_tp=6&oh=f6c1fb8d73748dadee2d17cb00fb3717&oe=5EF4F9DA"
          />
        </div>
        <div>
          <Link
            href="/home"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
          >
            SigmaGrader
          </Link>
          <br />
          <span className="text-xs text-grey-dark">
            Powered By Grader Thailand
          </span>
        </div>
      </div>

      <div className="sm:mb-0 self-center">
        <div
          className="h-10"
          style={{ display: "table-cell", verticalAlign: "middle" }}
        >
          <Link
            href="#"
            className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1"
          >
            👨‍💻 <b>Task</b>
          </Link>
          <Link
            href="#"
            className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
          >
            🧪 <b>Quiz</b>
          </Link>
          <Link
            href="/two"
            className="text-md no-underline text-grey-darkest hover:text-blue-dark ml-2 px-1"
          >
            👨‍💼 <b>Profile</b>
          </Link>
          <Link
            href="#"
            className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
          >
            🧮 <b>Score</b>
          </Link>
          <Link
            href="#"
            className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
          >
            🚫 <b>Logout</b>
          </Link>
        </div>
      </div>
    </nav>
  );
}
