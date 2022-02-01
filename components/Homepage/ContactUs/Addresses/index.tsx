import { IAddresses } from "@interfaces";
import {
  Container,
  AddressesContainer,
  Address,
  Country,
  Street,
  PositionLoading
} from "./Addresses.style";
import Hexagon from "../../../../public/SVG/hexagon1.svg";
import React from "react";
import Loading from "../../../../public/loading1.svg";

function createAddresses({ addresses }: IAddresses) {
  return Object.values(addresses).map((address, index) =>
    Object.keys(address).map((county) =>
      Object.values(address).map((street) =>
        (
          <React.Fragment key={index}>
            <Address>
              <Country>
                {county}
              </Country>
              <Street>
                {street}
              </Street>
            </Address>
          </React.Fragment>
        )
      )
    ))
}

function Addresses( addresses: IAddresses) {
  const addressesBlock = createAddresses(addresses);

  return (
    <Container>
      <Hexagon/>

      <AddressesContainer>
        {addressesBlock}
      </AddressesContainer>

      <PositionLoading>
        <Loading/>
      </PositionLoading>
    </Container>
  )
}

export default Addresses;
