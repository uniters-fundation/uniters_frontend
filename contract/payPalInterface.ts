import { SelectedCategoryType } from "../reducers/pledgeFormReducer";

// Interface contract between frontend and backend
export interface ICreateOrderPayload {
    data : {
        ammount: number;
        category: SelectedCategoryType;
    }
}


export interface IApproveOrderData {
  billingToken?: string | null;
  facilitatorAccessToken: string;
  orderID: string;
  payerID?: string | null;
  paymentID?: string | null;
  subscriptionID?: string | null;
  authCode?: string | null;
}
