import { IApproveOrderData } from "../contract/payPalInterface";

export enum PledgeStepActions {
  SELECT_CATEGORY = "select-category",
  UPDATE_AMMOUNT = "update-ammoun",
  CLOSE_CATEGORY = "close-category",
  SUBMIT_PAYMENT = "submit-payment",
}

type ISelectCategoryAction = {
  type: PledgeStepActions.SELECT_CATEGORY;
  payload: SelectedCategoryType;
};
type IUpdateAmmountAction = {
  type: PledgeStepActions.UPDATE_AMMOUNT;
  payload: number;
};
type ICloseCategoryAction = { type: PledgeStepActions.CLOSE_CATEGORY };

type ISubmitPaymentAction = {
  type: PledgeStepActions.SUBMIT_PAYMENT;
  payload: IApproveOrderData;
};

export enum SelectedCategoryType {
  DEFENDERS = "defenders",
  MEDICAL = "medical",
  CIVILANS = "civilians",
}

export interface IpledgeFormState {
  selectedCategory: null | SelectedCategoryType;
  ammountToPledge: number;
  paymentDoneData: null | IApproveOrderData;
}

export const pledgeFormInitialState: IpledgeFormState = {
  selectedCategory: null,
  ammountToPledge: 0,
  paymentDoneData: null,
};

export const pledgeFormReducer = (
  state: IpledgeFormState,
  action:
    | ISelectCategoryAction
    | IUpdateAmmountAction
    | ICloseCategoryAction
    | ISubmitPaymentAction
) => {
  switch (action.type) {
    case PledgeStepActions.SELECT_CATEGORY: {
      return { ...state, selectedCategory: action.payload };
    }
    case PledgeStepActions.UPDATE_AMMOUNT: {
      return { ...state, ammountToPledge: action.payload };
    }
    case PledgeStepActions.CLOSE_CATEGORY: {
      return { ...pledgeFormInitialState };
    }
    case PledgeStepActions.SUBMIT_PAYMENT: {
      return { ...pledgeFormInitialState, paymentDoneData: action.payload };
    }
    default: {
      return state;
    }
  }
};
