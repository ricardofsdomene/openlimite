export interface AccountLimit {
    accountId: string;
    customerId: string;
    organizationId: string;
    organizationName: string;
    overdraftContractedLimit: number;
    overdraftContractedLimitCurrency: string;
    overdraftUsedLimit: number;
    overdraftUsedLimitCurrency: string;
    unarrangedOverdraftAmount: number;
    unarrangedOverdraftAmountCurrency: string;
}