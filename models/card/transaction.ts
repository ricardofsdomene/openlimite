export interface CardTransaction {
  creditCardAccountId: string;
  customerId: string;
  organizationId: string;
  organizationName: string;
  transactionId: string;
  identificationNumber: string;
  transactionName: string;
  creditDebitType: string;
  transactionType: string;
  paymentType: string;
  feeType: string;
  chargeIdentificator?: string;
  chargeNumber?: string;
  brazilianAmount: number;
  amount: number;
  currency: string;
  transactionDate: string;
  billPostDate: string;
  payeeMCC?: string;
  billId: string;
}
