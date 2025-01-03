
const getUserStatusBg = (status: string) =>{
    const statusMap = new Map<string, string>([
     ['Active','text-bg-success'],
     ['Inactive','text-bg-info'],
     ['PendingVerification','text-bg-warning'],
     ['Blocked','text-bg-danger'],
     ['Deleted','text-bg-secondary']
    ]);
    return statusMap.get(status)??'text-bg-primary';
}

export const UserUtil = {
    getUserStatusBg
}