import React, { useState } from 'react'

type Props = {}

export default function CollapseSearchBar({}: Props) {
    const [searchType, setSearchType] = useState('BUSINESS')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Hello')
    }
  return (
    <div className="search-container">
        <form onSubmit={handleSubmit}>
            <div className="btn-group">
                <div>Looking For:</div>
                    <button className='option' value="Business" id={`${searchType == "BUSINESS" && "active-selection"}`} onClick={() => setSearchType("BUSINESS")}> Business</button>
                    <button className='option' value="Item" id={`${searchType == "ITEM" && "active-selection"}`} onClick={() => setSearchType("ITEM")}>Item </button>
                    <button className='option' value="Service" id={`${searchType == "SERVICE" && "active-selection"}`} onClick={() => setSearchType("SERVICE")}> Service </button>
            </div>
            <div className="search-box">
                <input type="text" className='search-bar' placeholder={`Find`}/>
                <input type="text" className='search-bar' placeholder={`Where?`}/>
                <button className='btn-primary btn btn-search'><img src="/images/Search.svg" width={"24px"} height={"24px"} /></button>
            </div>
            </form>
        <style>{`
        .option {
            padding: 12px 12px;
            border-radius: 2px;
            cursor: pointer;
            border: 0;
            background-color: transparent;
            font-size: 1rem;
            transition: all 0.4s;
            color: white;
            }
        .option:hover {
            background-color: #f4f4f4;
            color: inherit;
        }
        .search-bar {
            width: 50%;
            height: 40px;
            border-radius: 4px;
            border: 1.5px solid #e5e9e8;
            color: #5c5c5c;
            padding: 0 12px;
            font-size: 1.2rem;
            outline: none;
          }
          .search {
            background-color: #13c8c4;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 0 12px;
            margin-left: 4px;
            font-size: 1.025rem;
            text-transform: uppercase;
            font-weight: 600;
          }
          .search-container:focus-within  {
              width: 1000px;
              display: absolute;
          }
          
          .search-container:focus-within .btn-group {
            display: block;
          }
          .search-container:focus-within .search-bar {
            height: 3.5rem;
          }
          
          .search-container {
            width: 300px; 
            margin: auto;
            transition: all 0.3s;
            justify-content: center;
            align-items: center;
            
          }
          .search-box {
            display: flex;
          }
          .search-bar:not(:first-child) {
            margin-left: 8px;
          }
          .btn-group {
            padding: 20px;
            display: none;
            width: max-content;
            margin: 0 auto;
          }
          
        `}

        </style>
        

    </div>
  )
}