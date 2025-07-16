type MethodDataProps<ReqT> = {
    table: string;
    request: ReqT;
};

type FetchDataProps<ReqT> = {
    table: string;
    request: ReqT;
    method: "POST" | "PUT";
};

export async function putData<ResT, ReqT>({table, request}: MethodDataProps<ReqT>): Promise<ResT> {
    return await fetchData({table, request, method: "PUT"});
}

export async function postData<ResT, ReqT>({table, request}: MethodDataProps<ReqT>): Promise<ResT> {
    return fetchData({table, request, method: "POST"});
}

async function fetchData<ResT, ReqT>({table, request, method}: FetchDataProps<ReqT>): Promise<ResT> {
    const response = await fetch(`/api/${table}`, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request || {}),
    })
    return await response.json()
}