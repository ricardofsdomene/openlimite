import React, { createContext, ReactNode, useState } from "react";
import { Account } from "../models/account/account";
import { AccountLimit } from "../models/account/limit";
import { AccountTransaction } from "../models/account/transaction";
import { Balance } from "../models/balance";
import { CardBill } from "../models/card/bill";
import { Card } from "../models/card/card";
import { CardLimit } from "../models/card/limit";
import { CardTransaction } from "../models/card/transaction";
import { User } from "../models/user";

type ChangeCardLimitData = {
  amount: number;
};

type ProviderContextData = {
  user: User;
  account: Account;
  accountTransactions: AccountTransaction[];
  accountLimits: AccountLimit;
  balance: Balance;
  cards: Card[];
  cardLimit: CardLimit;
  cardTransactions: CardTransaction[];
  cardBills: CardBill[];
  changeLimit: (value: ChangeCardLimitData) => void;
};

type ProviderContextProps = {
  children: ReactNode;
};

export const ContextProvider = createContext({} as ProviderContextData);

export function UserContextProvider({ children }: ProviderContextProps) {
  const [user, setUser] = useState<User>({
    email: "ricardofsdomene@icloud.com",
    id: "0",
    name: "Ricardo Sarti Domene",
  });

  const [account, setAccount] = useState<Account>({
    accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
    customerId: "595.080.896-84",
    organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
    organizationName: "Instituição Financeira 03",
    brandName: "Instituição Financeira 03",
    companyCnpj: "00.047.912/7906-49",
    type: "CONTA_DEPOSITO_A_VISTA",
    compeCode: "804",
    branchCode: "9477",
    number: "0001201014",
    checkDigit: 5,
  });

  const [balance, setBalance] = useState<Balance>({
    accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
    customerId: "595.080.896-84",
    organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
    organizationName: "Instituição Financeira 03",
    availableAmount: 2241.64,
    availableAmountCurrency: "BRL",
    blockedAmount: 0,
    blockedAmountCurrency: "BRL",
    automaticallyInvestedAmount: 0,
    automaticallyInvestedAmountCurrency: "BRL",
  });

  const [accountLimits, setAccountLimits] = useState<AccountLimit>({
    accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
    customerId: "595.080.896-84",
    organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
    organizationName: "Instituição Financeira 03",
    overdraftContractedLimit: 0,
    overdraftContractedLimitCurrency: "BRL",
    overdraftUsedLimit: 0,
    overdraftUsedLimitCurrency: "BRL",
    unarrangedOverdraftAmount: 0,
    unarrangedOverdraftAmountCurrency: "BRL",
  });

  const [accountTransactions, setAccountTransactions] = useState<
    AccountTransaction[]
  >([
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "01174795-25a1-4829-b790-49e227dcb931",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Estacionamento",
      type: "BOLETO",
      amount: 329.05,
      transactionCurrency: "BRL",
      transactionDate: "2021-07-27",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "043ee0c0-01f0-4f2c-9dd8-e701ab4e8b00",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Veterinário",
      type: "DOC",
      amount: 475.79,
      transactionCurrency: "BRL",
      transactionDate: "2021-09-28",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "049bf1d1-0158-42d7-b59f-92c99cc25e85",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Eletrônicos",
      type: "DOC",
      amount: 3471.04,
      transactionCurrency: "BRL",
      transactionDate: "2021-09-08",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "05014091-82e7-4cb4-83d4-5a94b0aab4ee",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Streaming de Vídeo",
      type: "BOLETO",
      amount: 34.68,
      transactionCurrency: "BRL",
      transactionDate: "2021-11-10",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "0522e292-98cc-4ed9-a900-ccfa998c4b39",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Telefone",
      type: "CONVENIO_ARRECADACAO",
      amount: 203.87,
      transactionCurrency: "BRL",
      transactionDate: "2021-08-02",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "0557bd97-6511-42c5-aca0-b94f07f6eb1c",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "IPTU",
      type: "DOC",
      amount: 113.71,
      transactionCurrency: "BRL",
      transactionDate: "2021-08-09",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "05825958-6462-4db1-bc7b-36fc27dab95b",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Aluguel",
      type: "OUTROS",
      amount: 4064.07,
      transactionCurrency: "BRL",
      transactionDate: "2021-07-19",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "06c5fb5f-77eb-47df-84de-3c222cdb5152",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Curso",
      type: "PIX",
      amount: 762.99,
      transactionCurrency: "BRL",
      transactionDate: "2021-04-11",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "06d1f959-9d3a-42ea-b61f-479b06f53f59",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Luz",
      type: "CONVENIO_ARRECADACAO",
      amount: 625.8,
      transactionCurrency: "BRL",
      transactionDate: "2021-09-11",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "0740f30a-4e5d-4a76-95d6-8431203a53c7",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Condomínio",
      type: "OUTROS",
      amount: 1183.32,
      transactionCurrency: "BRL",
      transactionDate: "2021-05-09",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "07d9cab0-c736-46d8-b4f4-5b9629ba5c5a",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Telefone",
      type: "CONVENIO_ARRECADACAO",
      amount: 148.34,
      transactionCurrency: "BRL",
      transactionDate: "2021-11-12",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "0855e781-3e1b-4f26-95c6-09af211cd64e",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Supermercado",
      type: "PIX",
      amount: 624.87,
      transactionCurrency: "BRL",
      transactionDate: "2021-05-26",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "08eb3557-af55-48ac-acde-a4fd9aa68ba8",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Lanche",
      type: "OUTROS",
      amount: 11.14,
      transactionCurrency: "BRL",
      transactionDate: "2021-11-02",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "096534cb-ffac-49aa-b514-749560eddb40",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Prestação de Serviço",
      type: "BOLETO",
      amount: 851.25,
      transactionCurrency: "BRL",
      transactionDate: "2021-11-24",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "09a1ac4d-22f7-4b90-946b-77898dd619c1",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Tv por assinatura",
      type: "PIX",
      amount: 172.18,
      transactionCurrency: "BRL",
      transactionDate: "2021-04-29",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "09f7a033-7c80-482e-8353-20b399c4754d",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Prestação de Serviço",
      type: "PIX",
      amount: 892.48,
      transactionCurrency: "BRL",
      transactionDate: "2021-02-24",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "0a9b36a6-c7e4-4372-9d92-000f943a8585",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Estacionamento",
      type: "DOC",
      amount: 214.72,
      transactionCurrency: "BRL",
      transactionDate: "2021-08-07",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "0abdcc98-d0fc-4f0c-8348-ee23f48d4db7",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Presentes",
      type: "BOLETO",
      amount: 5130.44,
      transactionCurrency: "BRL",
      transactionDate: "2021-06-28",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "0affc0f0-9748-46ce-8b32-700188b2118d",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "PetShop",
      type: "DOC",
      amount: 93.04,
      transactionCurrency: "BRL",
      transactionDate: "2021-06-01",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "0c0692f7-1cdb-4813-99df-60110c35fc4d",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Educação",
      type: "PIX",
      amount: 971.82,
      transactionCurrency: "BRL",
      transactionDate: "2021-08-27",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "0c2801af-b293-464d-b176-3ec24567652f",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Restaurante",
      type: "BOLETO",
      amount: 89.66,
      transactionCurrency: "BRL",
      transactionDate: "2021-11-20",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "0d071014-cd72-4676-9630-2d602749c84f",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Faculdade",
      type: "TED",
      amount: 1829.07,
      transactionCurrency: "BRL",
      transactionDate: "2021-11-23",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "0d0f1565-5fd3-4d1d-8b76-918aa454c0cc",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Tv por assinatura",
      type: "DOC",
      amount: 133.71,
      transactionCurrency: "BRL",
      transactionDate: "2021-01-20",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "0d588752-3ce6-4a7b-88cc-46e256d38ff1",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Manutenção",
      type: "OUTROS",
      amount: 545.34,
      transactionCurrency: "BRL",
      transactionDate: "2021-07-03",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
    {
      accountId: "dc728105-74a5-47fe-b18c-23a6c855ed30",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "0e2ae7d6-1275-4aab-b1ab-b04aec0432f5",
      completedAuthorisedPaymentType: "TRANSACAO_EFETIVADA",
      creditDebitType: "CREDITO",
      transactionName: "Pedágio",
      type: "OUTROS",
      amount: 40.65,
      transactionCurrency: "BRL",
      transactionDate: "2021-05-01",
      partieCnpjCpf: "NA",
      partiePersonType: "PESSOA_NATURAL",
      partieCompeCode: "NA",
      partieBranchCode: "NA",
      partieNumber: "NA",
      partieCheckDigit: "0",
    },
  ]);

  const [cards, setCards] = useState<Card[]>([
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      creditCardInfo: {
        holder_name: "Ricardo Sarti Domene",
        issuer: "VISA",
        number: "4024 0071 3301 2129",
        exp_month: "10",
        exp_year: "2024",
        cvv: "171",
      },
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      name: "Cartão de Crédito Universitário",
      productType: "BLUE",
      creditCardNetwork: "AMERICAN_EXPRESS",
    },
  ]);

  const [cardBills, setCardBills] = useState<CardBill[]>([
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      billId: "0696d2cf-58fd-4507-bff2-aa2649f87df9",
      dueDate: "2021-06-10",
      billTotalAmount: 2011.16,
      billTotalAmountCurrency: "BRL",
      billMinimumAmount: 2011.26,
      billMinimumAmountCurrency: "BRL",
      isInstalment: false,
      financeCharges: null,
      payments: null,
    },
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      billId: "276b520f-a3a0-42a8-9789-978029ee3874",
      dueDate: "2021-03-10",
      billTotalAmount: 38281.810000000005,
      billTotalAmountCurrency: "BRL",
      billMinimumAmount: 38281.91,
      billMinimumAmountCurrency: "BRL",
      isInstalment: false,
      financeCharges: null,
      payments: null,
    },
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      billId: "3bf33db2-1b38-4c41-b086-89cf6c10d46a",
      dueDate: "2021-02-10",
      billTotalAmount: 9953.31,
      billTotalAmountCurrency: "BRL",
      billMinimumAmount: 9953.41,
      billMinimumAmountCurrency: "BRL",
      isInstalment: false,
      financeCharges: null,
      payments: null,
    },
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      billId: "894a93de-cf2e-49c1-a908-1743235328a8",
      dueDate: "2021-09-10",
      billTotalAmount: 15064.730000000001,
      billTotalAmountCurrency: "BRL",
      billMinimumAmount: 15064.830000000002,
      billMinimumAmountCurrency: "BRL",
      isInstalment: false,
      financeCharges: null,
      payments: null,
    },
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      billId: "a57fb1be-7ae8-486d-add6-c846d7d65d7f",
      dueDate: "2021-12-10",
      billTotalAmount: 21761.19,
      billTotalAmountCurrency: "BRL",
      billMinimumAmount: 21761.289999999997,
      billMinimumAmountCurrency: "BRL",
      isInstalment: false,
      financeCharges: null,
      payments: null,
    },
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      billId: "aa13ef61-328c-4011-892e-9827ab68a90f",
      dueDate: "2021-08-10",
      billTotalAmount: 31869.010000000006,
      billTotalAmountCurrency: "BRL",
      billMinimumAmount: 31869.110000000004,
      billMinimumAmountCurrency: "BRL",
      isInstalment: false,
      financeCharges: null,
      payments: null,
    },
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      billId: "bf7631ac-b7a7-4c76-b28e-0ab78ddcfb81",
      dueDate: "2021-11-10",
      billTotalAmount: 33182.55,
      billTotalAmountCurrency: "BRL",
      billMinimumAmount: 33182.65,
      billMinimumAmountCurrency: "BRL",
      isInstalment: false,
      financeCharges: null,
      payments: null,
    },
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      billId: "e49bb1fd-076b-4977-9ef5-caf63e978f25",
      dueDate: "2021-07-10",
      billTotalAmount: 19281.35,
      billTotalAmountCurrency: "BRL",
      billMinimumAmount: 19281.449999999997,
      billMinimumAmountCurrency: "BRL",
      isInstalment: false,
      financeCharges: null,
      payments: null,
    },
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      billId: "ec34fb56-4cfe-4888-b7ac-2bf622638c1d",
      dueDate: "2021-10-10",
      billTotalAmount: 16006.02,
      billTotalAmountCurrency: "BRL",
      billMinimumAmount: 16006.12,
      billMinimumAmountCurrency: "BRL",
      isInstalment: false,
      financeCharges: null,
      payments: null,
    },
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      billId: "f565c3a0-3399-4e0a-80a8-dbad96d2f118",
      dueDate: "2021-04-10",
      billTotalAmount: 26825.18,
      billTotalAmountCurrency: "BRL",
      billMinimumAmount: 26825.28,
      billMinimumAmountCurrency: "BRL",
      isInstalment: false,
      financeCharges: null,
      payments: null,
    },
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      billId: "fc8df458-b7a0-4683-8da2-472f8e9380e8",
      dueDate: "2021-05-10",
      billTotalAmount: 22726.09,
      billTotalAmountCurrency: "BRL",
      billMinimumAmount: 22726.19,
      billMinimumAmountCurrency: "BRL",
      isInstalment: false,
      financeCharges: null,
      payments: null,
    },
  ]);

  const [cardLimit, setCardLimit] = useState<CardLimit>({
    creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
    customerId: "595.080.896-84",
    organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
    organizationName: "Instituição Financeira 03",
    creditLineLimitType: "LIMITE_CREDITO_TOTAL",
    consolidationType: "INDIVIDUAL",
    identificationNumber: "2218",
    isLimitFlexible: true,
    limitAmountCurrency: "BRL",
    limitAmount: 5000,
    usedAmountCurrency: "BRL",
    usedAmount: 3000,
    availableAmountCurrency: "BRL",
    availableAmount: 2000,
  });

  const [cardTransactions, setCardTransactions] = useState<CardTransaction[]>([
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "3b87e6fa-9ac0-4d8f-a8f6-7b36b5e01a0b",
      identificationNumber: "2218",
      transactionName: "Taxi",
      creditDebitType: "DEBITO",
      transactionType: "PAGAMENTO",
      paymentType: "A_VISTA",
      feeType: "ANUIDADE",
      brazilianAmount: 27.32,
      amount: 27.32,
      currency: "BRL",
      transactionDate: "2021-05-13",
      billPostDate: "2021-06-10",
      billId: "0696d2cf-58fd-4507-bff2-aa2649f87df9",
    },
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "893f11fe-3084-42b6-b52f-a6eb0fe114ee",
      identificationNumber: "2218",
      transactionName: "Pedágio",
      creditDebitType: "DEBITO",
      transactionType: "PAGAMENTO",
      paymentType: "A_VISTA",
      feeType: "ANUIDADE",
      brazilianAmount: 43.62,
      amount: 43.62,
      currency: "BRL",
      transactionDate: "2021-05-17",
      billPostDate: "2021-06-10",
      billId: "0696d2cf-58fd-4507-bff2-aa2649f87df9",
    },
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "99507b8e-3982-4429-a19e-92ab9b3d40ef",
      identificationNumber: "2218",
      transactionName: "IPTU",
      creditDebitType: "DEBITO",
      transactionType: "PAGAMENTO",
      paymentType: "A_VISTA",
      feeType: "ANUIDADE",
      brazilianAmount: 330.05,
      amount: 330.05,
      currency: "BRL",
      transactionDate: "2021-05-26",
      billPostDate: "2021-06-10",
      billId: "0696d2cf-58fd-4507-bff2-aa2649f87df9",
    },
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "9a290676-df41-4ff8-85de-9241db50815a",
      identificationNumber: "2218",
      transactionName: "Restaurante",
      creditDebitType: "DEBITO",
      transactionType: "PAGAMENTO",
      paymentType: "A_VISTA",
      feeType: "ANUIDADE",
      brazilianAmount: 97.4,
      amount: 97.4,
      currency: "BRL",
      transactionDate: "2021-05-02",
      billPostDate: "2021-06-10",
      billId: "0696d2cf-58fd-4507-bff2-aa2649f87df9",
    },
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "ca6294cb-b0b9-4300-a0e2-f644d50ba698",
      identificationNumber: "2218",
      transactionName: "Aplicativo de Transporte",
      creditDebitType: "DEBITO",
      transactionType: "PAGAMENTO",
      paymentType: "A_VISTA",
      feeType: "ANUIDADE",
      brazilianAmount: 27.42,
      amount: 27.42,
      currency: "BRL",
      transactionDate: "2021-05-18",
      billPostDate: "2021-06-10",
      billId: "0696d2cf-58fd-4507-bff2-aa2649f87df9",
    },
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "cc29f280-e229-4495-b44b-6b003f6515da",
      identificationNumber: "2218",
      transactionName: "Alimentação",
      creditDebitType: "DEBITO",
      transactionType: "PAGAMENTO",
      paymentType: "A_VISTA",
      feeType: "ANUIDADE",
      brazilianAmount: 641.99,
      amount: 641.99,
      currency: "BRL",
      transactionDate: "2021-05-19",
      billPostDate: "2021-06-10",
      billId: "0696d2cf-58fd-4507-bff2-aa2649f87df9",
    },
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "cf5eee44-60b6-4d1e-aed8-7ead83fd5574",
      identificationNumber: "2218",
      transactionName: "Prestação de Serviço",
      creditDebitType: "DEBITO",
      transactionType: "PAGAMENTO",
      paymentType: "A_VISTA",
      feeType: "ANUIDADE",
      brazilianAmount: 543.82,
      amount: 543.82,
      currency: "BRL",
      transactionDate: "2021-05-27",
      billPostDate: "2021-06-10",
      billId: "0696d2cf-58fd-4507-bff2-aa2649f87df9",
    },
    {
      creditCardAccountId: "0b899b56-2f36-46c4-a594-b2a921f45575",
      customerId: "595.080.896-84",
      organizationId: "69665991-da55-4aac-a1f2-32d23daba8fe",
      organizationName: "Instituição Financeira 03",
      transactionId: "eac3a27b-79d7-4fb0-89b8-d9f4826dd744",
      identificationNumber: "2218",
      transactionName: "Tv por assinatura",
      creditDebitType: "DEBITO",
      transactionType: "PAGAMENTO",
      paymentType: "A_VISTA",
      feeType: "ANUIDADE",
      brazilianAmount: 299.54,
      amount: 299.54,
      currency: "BRL",
      transactionDate: "2021-05-14",
      billPostDate: "2021-06-10",
      billId: "0696d2cf-58fd-4507-bff2-aa2649f87df9",
    },
  ]);

  function changeLimit({ amount }: ChangeCardLimitData) {
    setCardLimit({
      ...cardLimit,
      limitAmount: amount,
    });
  }

  return (
    <ContextProvider.Provider
      value={{
        changeLimit,
        user,
        account,
        balance,
        accountTransactions,
        accountLimits,
        cards,
        cardBills,
        cardLimit,
        cardTransactions,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}
