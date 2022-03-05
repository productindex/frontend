import SearchBar from "../../components/searchBar";

export default function BusinessStore() {
  const tags = ['Soul Food', 'Chicken', 'Pizza']
  return (
    <>
      <main>
        <div className="container">
          <SearchBar />
          <div className="photogrid">
            <div className="store-photo">1</div>
            <div className="store-photo">2</div>
            <div className="store-photo">3</div>
            <div className="store-photo">4</div>
          </div>
          <div className="store-content">
            <div className="main-content">
              <h4 className='business-name'> Solomon's Flavor</h4>
              <div className="tag-box">
                {tags.map(tag => <div className='tag'>{tag}</div>)}
              </div>
              <p className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores velit rerum eum aliquid exercitationem nam mollitia, saepe sunt dicta consequatur aut, alias odit. Consequatur repellendus iure rerum odio placeat perspiciatis nisi ab ad, rem magni soluta dolore qui accusantium dolor nihil libero architecto aperiam cumque obcaecati accusamus iusto odit consectetur?
              </p>
              
            </div>
            <div className="side-bar">
              <div className="card">
                <h5>Business Hours</h5>
                <ul>
                  <li>Monday</li>
                  <li>Monday</li>
                  <li>Monday</li>
                  <li>Monday</li>
                  <li>Monday</li>
                  <li>Monday</li>
                  <li>Monday</li>
                </ul>
              </div>
              <div className="card">
                <h5>Contact Us</h5>
                <ul>
                  <li>Number</li>
                  <li>Number</li>
                  <li>Number</li>
                </ul> 
              </div>
              <div className="card">
                <h5>Contact Us</h5>
                <ul>
                  <li>Number</li>
                  <li>Number</li>
                  <li>Number</li>
                </ul> 
              </div>
            </div>
          </div>




        </div>
      </main>

      <footer>
        <p>2022 Product Index. All rights reserved. Designed by AquaUx</p>
      </footer>

      <style jsx>{`
        .photogrid {
          display: flex;
          column-gap: 1rem;
        }
        .store-photo {
          background-color: pink;
          height: 250px;
          flex-grow: 1;

        }
        .tag-box {
          margin-top: .5rem;
        }
        .tag {
            background-color: #E5E9E8;
            width: auto;
            display: inline-block;
            padding: 4px 8px;
            border-radius: 20px;
            letter-spacing: 0.5px;
            font-weight: 500;
            font-size: 0.875rem;
        }
        .tag:not(:first-child) {
            margin-left: .5rem;
        }
        .main-content {
          width: 75%;
        }
        .store-content {
          display: flex;
          margin-top: 1rem;
          column-gap: 1rem;
        }
        .description {
          margin-top: 1rem;
        }
        ul {
          padding: 0;
        }
        li {
          list-style: none;
          margin-top: .25rem;
          color: #5C5C5C;
          font-size: 1.125rem;
        }
        .business-contact {
          margin-top: 1rem;
        }
        .side-bar {
          width: 25%;
        }
        .side-bar .card {
          margin-top: .5rem;
          border: 1.5px solid #E5E9E8;
          border-radius: 2px;
          padding: 1rem;
        }

      `}</style>
    </>
  )
}
