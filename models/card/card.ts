export interface Card {
  creditCardAccountId: string;
  customerId: string;
  organizationId: string;
  organizationName: string;
  name: string;
  productType: string;
  creditCardNetwork: string;
  creditCardInfo?: {
    issuer: string;
    number: string;
    cvv: string;
    exp_month: string;
    exp_year: string;
    holder_name: string;
  };
}
