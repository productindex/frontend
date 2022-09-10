import React from 'react'
import { EmptyStateMessages } from "@productindex/const/errors";

type Props = {
    addressInfo: {
        address_line_1?: string;
        address_line_2?: string;
    }
}
function BusinessAddressCard({addressInfo}: Props) {
  return (
    <div className="card">
    <h5>Address</h5>
    { addressInfo?.address_line_1 ? 
      <>
        <p>{addressInfo.address_line_1}{addressInfo.address_line_2 && <>, {addressInfo.address_line_2}</>} </p>
      </>
      :
      <p> {EmptyStateMessages.directionsInfo}</p>
    }
    
  </div>
  )
}

export default BusinessAddressCard