export interface CardLimit {
  creditCardAccountId: string;
  customerId: string;
  organizationId: string;
  organizationName: string;
  creditLineLimitType: string;
  consolidationType: string;
  identificationNumber: string;
  isLimitFlexible: boolean;
  limitAmountCurrency: string;
  limitAmount: number;
  usedAmountCurrency: string;
  usedAmount: number;
  availableAmountCurrency: string;
  availableAmount: number;
}
