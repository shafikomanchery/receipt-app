export interface Payment {
    paymentId: number;
    amount: number;
    membershipId: string;
    memberName: string;
    accountId: number;
    accountName: string;
    paymentDate: string;
    transactionType: TransactionType;
    transactionId: string;
    paymentMonth: number;
    paymentYear: number;
    remarks: string;
}

export enum TransactionType{
    CASH='By Cash',
    ONLINE='Online'
}