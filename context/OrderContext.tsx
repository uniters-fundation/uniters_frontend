import React, { createContext, useReducer } from "react";

import {
  pledgeFormReducer,
  pledgeFormInitialState,
  PledgeStepActions,
  SelectedCategoryType,
  IpledgeFormState,
} from "../reducers/pledgeFormReducer";

import { IApproveOrderData } from "../contract/payPalInterface";

interface IOrderContext {
  orderStore: IpledgeFormState;
  updateAmmount?: (ammount: number) => void;
  onPaymentDone?: (applicationData: IApproveOrderData) => void;
  selectCategory?: (category: SelectedCategoryType) => void;
}
export const OrderContext = createContext<IOrderContext>({
  orderStore: pledgeFormInitialState,
});

export const OrderProvider = (props: { children: React.ReactElement }) => {
  const [orderStore, dispatchOrderStore] = useReducer(
    pledgeFormReducer,
    pledgeFormInitialState
  );

  const updateAmmount = (ammount: number) =>
    dispatchOrderStore({
      type: PledgeStepActions.UPDATE_AMMOUNT,
      payload: ammount,
    });

  const onPaymentDone = (applicationData: IApproveOrderData) => {
    dispatchOrderStore({
      type: PledgeStepActions.SUBMIT_PAYMENT,
      payload: applicationData,
    });
  };

  const selectCategory = (category: SelectedCategoryType) =>
    dispatchOrderStore({
      type: PledgeStepActions.SELECT_CATEGORY,
      payload: category,
    });

  const closeCategory = () =>
    dispatchOrderStore({ type: PledgeStepActions.CLOSE_CATEGORY });

  return (
    <OrderContext.Provider
      value={{ orderStore, updateAmmount, onPaymentDone, selectCategory }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};
