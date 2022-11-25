import React from "react";
import { Link } from "react-router-dom";

export default function Header({
  currentPage,
  setCurrentPage,
  loginLogout,
  setLoginLogout
}) {
  console.log(currentPage);

  const HandleLoginLogout = () => {
    setCurrentPage("Login");
    setLoginLogout("Log In");
  };

  return (
    <div className="header">
      <div className="hosp-icon-with-name">
        <img
          className="hosp-icon"
          alt="icon"
          src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5r%0D%0AIiB2aWV3Qm94PSIwIDAgMjk5IDI5OSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOnVybCgjbGlu%0D%0AZWFyLWdyYWRpZW50KTt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVu%0D%0AdCIgeDE9IjcyLjU4IiB5MT0iMTYuMDQiIHgyPSIyMjcuMzEiIHkyPSIyODQuMDIiIGdyYWRpZW50%0D%0AVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAuMDEiIHN0b3AtY29sb3I9IiM2%0D%0AMGQxYmIiLz48c3RvcCBvZmZzZXQ9IjAuNSIgc3RvcC1jb2xvcj0iIzFhYmM5YyIvPjxzdG9wIG9m%0D%0AZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwOWI5ZSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjx0%0D%0AaXRsZT5jcm9zcy1pY29uPC90aXRsZT48cGF0aCBpZD0iY3Jvc3MiIGNsYXNzPSJjbHMtMSIgZD0i%0D%0ATTI5Mi45NCw5Ny40NkgyMDUuM1Y3LjA2QTYuNTYsNi41NiwwLDAsMCwxOTguNzQuNUgxMDEuMjZB%0D%0ANi41Niw2LjU2LDAsMCwwLDk0LjcsNy4wNnY5MC40SDcuMDZBNi41OCw2LjU4LDAsMCwwLC41LDEw%0D%0ANFYxOTYuM2E2LjIzLDYuMjMsMCwwLDAsNi4yMyw2LjI0aDg4djkwLjRhNi41Niw2LjU2LDAsMCww%0D%0ALDYuNTYsNi41Nmg5Ny40OGE2LjU2LDYuNTYsMCwwLDAsNi41Ni02LjU2di05MC40aDg4YTYuMjMs%0D%0ANi4yMywwLDAsMCw2LjIzLTYuMjRWMTA0QTYuNTgsNi41OCwwLDAsMCwyOTIuOTQsOTcuNDZaIiB0%0D%0AcmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIi8+PC9zdmc+"
        />
        <h1>HospitalRun</h1>
      </div>
      <Link to="/login">
        <button onClick={HandleLoginLogout}>{loginLogout}</button>
      </Link>
    </div>
  );
}
