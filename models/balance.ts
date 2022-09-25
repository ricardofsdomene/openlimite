export interface Balance {
    accountId: string;
    customerId: string;
    organizationId: string;
    organizationName: string;
    availableAmount: number;
    availableAmountCurrency: string;
    blockedAmount: number;
    blockedAmountCurrency: string;
    automaticallyInvestedAmount: number;
    automaticallyInvestedAmountCurrency: string;
}