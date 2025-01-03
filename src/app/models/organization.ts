export interface Organization {
    orgId: number;
    orgName: string;
    orgRegNo: string;
    orgAddress: string;
    orgEmail: string;
    orgMobile: number;
    orgAltMobile: number;
    createdDate: string;
    updatedDate: string;
    orgStatus: OrgStatus;
}

export enum OrgStatus {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive',
    DELETED = 'Deleted'
}
