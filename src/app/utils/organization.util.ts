const getOrgStatusBg = (status: string) =>{
    const statusMap = new Map<string, string>([
     ['Active','text-bg-success'],
     ['Inactive','text-bg-info'],
     ['Deleted','text-bg-secondary']
    ]);
    return statusMap.get(status)??'text-bg-primary';
}

export const OrgUtil = {
    getOrgStatusBg
}