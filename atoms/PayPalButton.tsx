import React, { useContext, useEffect } from "react";
import {
  PayPalButtons,
  FUNDING,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import styled from "@emotion/styled";

import Button from "@mui/material/Button";

import {
  IApproveOrderData,
  ICreateOrderPayload,
} from "../contract/payPalInterface";
import { OrderContext } from "../context/OrderContext";

interface IProps {}

export const PayPayButton = (props: IProps) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const {
    orderStore: { ammountToPledge: ammount, selectedCategory: category },
    onPaymentDone,
  } = useContext(OrderContext);
  // Each time ammount changes, if paypal button is rendered, its value needs to be updated via config
  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
      },
    });
  }, [ammount, category]);

  const onApprove = async (data: IApproveOrderData): Promise<void> => {
    try {
      const response = await axios.post("/api/paypal/captureOrder", data);

      if (response.data.status !== "COMPLETED") {
        throw new Error("undefined error on order approve");
      }

      onPaymentDone && onPaymentDone(data);
    } catch (error) {
      throw new Error("undefined error on order approve");
    }
  };

  return isPending ? (
    <Button disabled variant="contained" disableElevation size="large">
      Loading..
    </Button>
  ) : (
    <PayPayButtonWrapper>
      <PayPalButtons
        style={{
          color: "gold",
          shape: "rect",
          label: "pay",
          height: 42.25,
        }}
        fundingSource={FUNDING.PAYPAL}
        createOrder={async () => {
          try {
            if (!category || !ammount) {
              throw new Error(
                "eaither category or ammount was not provided in create order action"
              );
            }
            const payload: ICreateOrderPayload = {
              data: { ammount, category },
            };
            const order = await axios.post("/api/paypal/createOrder", payload);
            return order.data.orderID;
          } catch (error) {
            throw new Error("undefined error during order creation");
          }
        }}
        onApprove={onApprove}
      ></PayPalButtons>
    </PayPayButtonWrapper>
  );
};

const PayPayButtonWrapper = styled.div`
  & {
    line-height: 0;
  }
`;
