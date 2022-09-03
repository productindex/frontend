import React from 'react'
import { EmptyStateMessages } from "@productindex/const/errors";

type Props = {
    addressInfo: {
        address_line_1?: string;
        address_line_2?: string;
    }
}
//TODO: Implement address_line_2
function BusinessAddressCard({addressInfo}: Props) {
  return (
    <div className="card">
    <h5>Address</h5>
    <p>
      {addressInfo?.address_line_1
        ? addressInfo.address_line_1
        : EmptyStateMessages.directionsInfo}
    </p>
    {/* <p>{storeData['address_line_2'] ? storeData['address_line_2'] : EmptyStateMessages.directionsInfo}</p> */}
  </div>
  )
}

export default BusinessAddressCard