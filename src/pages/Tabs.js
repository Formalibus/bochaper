import React, { useState } from "react";

function Tabs() {
  const [page, setPage] = useState(1);
  return (
    <div className="Tabs">
      <ul className="Tabs__nav">
        <li className="Tabs__nav-link" onClick={() => setPage(1)}>
          1
        </li>
        <li className="Tabs__nav-link" onClick={() => setPage(2)}>
          2
        </li>
        <li className="Tabs__nav-link" onClick={() => setPage(3)}>
          3
        </li>
      </ul>
      <div className="Tabs__tab">
        <p>Страница: {page}</p>
        {page === 1 ? (
          <div className="Tabs__tab1">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi blanditiis natus odit ipsam, deserunt voluptate saepe
              quaerat praesentium fuga assumenda incidunt quasi, fugiat et
              nihil. Dolorum maxime facilis reprehenderit pariatur?
            </p>
          </div>
        ) : null}
        {page === 2 ? (
          <div className="Tabs__tab2">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25fae21f-ddf7-44a2-9d99-5196be3a543a/d74w4a8-b15d0c68-be8d-49da-8ff6-fb661e20db83.jpg/v1/fill/w_1024,h_1536,q_75,strp/khrarity_by_kianamai_d74w4a8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUzNiIsInBhdGgiOiJcL2ZcLzI1ZmFlMjFmLWRkZjctNDRhMi05ZDk5LTUxOTZiZTNhNTQzYVwvZDc0dzRhOC1iMTVkMGM2OC1iZThkLTQ5ZGEtOGZmNi1mYjY2MWUyMGRiODMuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.bwf3eWjbzJS2ki7XSSF6nc7WRWYBCb3uuSDaYHwc_0k"
              alt="bochaper"
            />
          </div>
        ) : null}
        {page === 3 ? (
          <div className="Tabs__tab3">
            <h1>Bochaper</h1>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Tabs;
