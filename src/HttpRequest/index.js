import axios from "axios";

class HttpRequest {

    static statusOk = "OK";
    static statusNo = "NO";

    constructor(baseUrl) {
        if(baseUrl){
            this.api = axios.create({
                baseURL: baseUrl,
                headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*'}
            });
        }
    }

    cancelRequest(){
        console.log("Request is cancel")
    }

    /**
     * @param response
     * @return {{code: number, data: []|null, message: string|null, status: string}}
     */
    static parseRequestResponse(response){
        if(typeof response === "string"){
            try {
                response = JSON.parse(response);
            }
            catch (e){
                console.log(response,e);
                response = null;
            }
        }
        let code = 0,
            data = null,
            message = null,
            status = HttpRequest.statusNo
        ;
        if(response){
            // {{api_response_code: number, api_response_data: []}} The response from the server must return that structure
            code = parseInt(response.api_response_code);
            data = null;
            const response_data_fields = ["data", "api_data"];
            response_data_fields.forEach((field) => {
                if(response.api_response_data[field])
                    data = response.api_response_data[field];
            });
            message = response.api_response_data.clear_message ? response.api_response_data.clear_message : null;
            status = HttpRequest.statusNo;

            if(response.api_response_code === 200){
                status = HttpRequest.statusOk;
            }
        }
        response = {
            code: code,
            status: status,
            data: data,
            message: message,
        };
        console.log(response)
        return response;
    }

    /**
     * @param url
     * @param method
     * @param params
     * @param body
     * @param headers
     * @return {Promise<{code: int, status: string data: [], message: string}>}
     */
    request(url, method, params, body, headers = null){
        const _self = this;
        return new Promise(function (resolve, reject) {
            _self.api.request({
                url: url,
                method: method,
                params: params,
                data: body,
                headers: headers
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                console.log(error)
                reject(error);
            });
            console.log(url)
        })
    }
}

export default HttpRequest;