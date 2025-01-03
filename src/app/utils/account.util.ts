const getAccountStatusBg = (status: string) =>{
    const statusMap = new Map<string, string>([
     ['Active','text-bg-success'],
     ['Inactive','text-bg-info'],
    ]);
    return statusMap.get(status)??'text-bg-primary';
}

export const AccountUtil = {
    getAccountStatusBg
}