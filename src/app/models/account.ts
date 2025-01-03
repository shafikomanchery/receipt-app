export interface Account {
    accountId: number;
    accountName: string;
    startDate: string;
    endDate: string;
    dueDate: string;
    createdDate: string;
    updatedDate: string;
    ownerName: string;
    amount: number;
    status: AccountStatus;
}

export enum AccountStatus {
    ACTIVE = 'Active',
    INACTIVE='InActive',
}