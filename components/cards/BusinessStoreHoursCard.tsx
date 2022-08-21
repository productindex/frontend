import React, {useState, useEffect} from 'react'
import {BusinessStoreHours} from '@productindex/types/BusinessStoreHoursType'

type Props = {businessStoreHours: BusinessStoreHours}

function BusinessStoreHoursCard({businessStoreHours}: Props) {
  const defaultHours = {
    Monday: null,
    Tuesday: null,
    Wednesday: null,
    Thursday: null,
    Friday: null,
    Saturday: null,
    Sunday: null,
  };
  const buildStoreHours = (hours) => {
    if (!hours) return defaultHours;
    return {
      Monday: hours["monday_open"]
        ? `${hours["monday_open"]} - ${hours["monday_closed"]}`
        : null,
      Tuesday: hours["tuesday_open"]
        ? `${hours["tuesday_open"]} - ${hours["tuesday_closed"]}`
        : null,
      Wednesday: hours["wednesday_open"]
        ? `${hours["wednesday_open"]} - ${hours["wednesday_closed"]}`
        : null,
      Thursday: hours["thursday_open"]
        ? `${hours["thursday_open"]} - ${hours["thursday_closed"]}`
        : null,
      Friday: hours["friday_open"]
        ? `${hours["friday_open"]} - ${hours["friday_closed"]}`
        : null,
      Saturday: hours["saturday_open"]
        ? `${hours["saturday_open"]} - ${hours["saturday_closed"]}`
        : null,
      Sunday: hours["sunday_open"]
        ? `${hours["sunday_open"]} - ${hours["sunday_closed"]}`
        : null,
    };
  };

  const [businessHours, setBusinessHours] = useState(defaultHours);
  

  useEffect(()=> {
    setBusinessHours(buildStoreHours(businessStoreHours))
  }, [businessStoreHours])
  
  return (
    <div className="card">
    <h5>Business Hours</h5>
    <ul>
      <li>
        <span className="item-title">Mon:</span>{" "}
        {businessHours["Monday"] ? (
          businessHours["Monday"]
        ) : (
          <span className="error">Closed</span>
        )}
      </li>
      <li>
        <span className="item-title">Tues:</span>{" "}
        {businessHours.Tuesday ? (
          businessHours.Tuesday
        ) : (
          <span className="error">Closed</span>
        )}
      </li>
      <li>
        <span className="item-title">Wed:</span>{" "}
        {businessHours.Wednesday ? (
          businessHours.Wednesday
        ) : (
          <span className="error">Closed</span>
        )}
      </li>
      <li>
        <span className="item-title">Thurs:</span>{" "}
        {businessHours.Thursday ? (
          businessHours.Thursday
        ) : (
          <span className="error">Closed</span>
        )}
      </li>
      <li>
        <span className="item-title">Fri:</span>{" "}
        {businessHours.Friday ? (
          businessHours.Friday
        ) : (
          <span className="error">Closed</span>
        )}
      </li>
      <li>
        <span className="item-title">Sat:</span>{" "}
        {businessHours.Saturday ? (
          businessHours.Saturday
        ) : (
          <span className="error">Closed</span>
        )}
      </li>
      <li>
        <span className="item-title">Sun:</span>{" "}
        {businessHours.Sunday ? (
          businessHours.Sunday
        ) : (
          <span className="error">Closed</span>
        )}
      </li>
    </ul>
  </div>
  )
}

export default BusinessStoreHoursCard