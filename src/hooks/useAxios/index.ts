import axios from "axios"

interface RequestType {
    method?: "GET" | "POST" | "PUT" | "DELETE"
    body?: object
    url: string
    params?: object
    headers?: object
}

export const useAxios = () => {
    const request = ({
        method = "GET",
        url,
        params,
        headers,
        body,
    }: RequestType) => {
        return axios({
            url: `${import.meta.env.VITE_BASE_URL}/${url}`,
            method,
            data: body,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                ...headers,
                
            },
            params: {
                access_token: "64bebc1e2c6d3f056a8c85b7",
                ...params,
            },
        }).then((data) => data.data)
    }
    return request
}
