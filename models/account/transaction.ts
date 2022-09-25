export interface AccountTransaction {
    accountId: string;
    customerId: string;
    organizationId: string;
    organizationName: string;
    transactionId: string;
    completedAuthorisedPaymentType: string;
    creditDebitType: string;
    transactionName: string;
    type: string;
    amount: number;
    transactionCurrency: string;
    transactionDate: string;
    partieCnpjCpf: string;
    partiePersonType: string;
    partieCompeCode: string;
    partieBranchCode: string;
    partieNumber: string;
    partieCheckDigit: string;
}