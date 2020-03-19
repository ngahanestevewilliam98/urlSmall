import { Server } from './server';

export class XHR {

    static url = Server.baseUrl();

    static get(route: string, params?: string) {
        return new Promise((success, error) => {
            let finalURl = this.url + route;
            if (params !== undefined) {
                finalURl = finalURl + params;
            }
            const xhr  = new XMLHttpRequest();
            xhr.open('GET', finalURl, true);
            xhr.onreadystatechange =  () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        success(JSON.parse(xhr.responseText));
                    } else {
                        error(xhr);
                    }
                }
            };
            xhr.send();
        });
    }

    static post_with_wwwFormUrlEncoded(route: string, params: string) {
        return new Promise((success, error) => {
            const xhr  = new XMLHttpRequest();
            const finalURl = this.url + route;
            xhr.open('POST', finalURl, true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        success(JSON.parse(xhr.responseText));
                    } else {
                        error(xhr);
                    }
                }
            };
            xhr.send(params);
        });
    }

    static post_with_json(route: string, json: any) {
        return new Promise((success, error) => {
            const xhr  = new XMLHttpRequest();
            const finalURl = this.url + route;
            xhr.open('POST', finalURl, true);
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        success(JSON.parse(xhr.responseText));
                    } else {
                        error(xhr);
                    }
                }
            };
            xhr.send(JSON.stringify(json));
        });
    }

    static post_with_formData(route: string, formData: FormData) {
        return new Promise((success, error) => {
            const xhr  = new XMLHttpRequest();
            const finalURl = this.url + route;
            console.log(finalURl);
            xhr.open('POST', finalURl, true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        success(JSON.parse(xhr.responseText));
                    } else {
                        error(xhr);
                    }
                }
            };
            xhr.send(formData);
        });
    }


    static put_with_wwwFormUrlEncoded(route: string, params: string, index?: string) {
        return new Promise((success, error) => {
            let finalURl = this.url + route;
            if (index !== undefined) {
                finalURl = finalURl + index;
            }
            const xhr  = new XMLHttpRequest();
            xhr.open('PUT', finalURl, true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        success(JSON.parse(xhr.responseText));
                    } else {
                        error(xhr);
                    }
                }
            };
            xhr.send(params);
        });
    }


    static put_with_json(route: string, json: any, index?: string){
        return new Promise((success, error) => {
            let finalURl = this.url + route;
            if  (index !== undefined) {
                finalURl = finalURl + index;
            }
            const xhr  = new XMLHttpRequest();
            xhr.open('PUT', finalURl, true);
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        success(JSON.parse(xhr.responseText));
                    } else {
                        error(xhr);
                    }
                }
            };
            xhr.send(JSON.stringify(json));
        });
    }

    static put_with_formData(route: string, formData: FormData, index?: string) {
        return new Promise((success, error) => {
            let finalURl = this.url + route;
            if (index !== undefined) {
                 finalURl = finalURl + index;
            }
            const xhr  = new XMLHttpRequest()
            xhr.open('POST', finalURl, true)
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        success(JSON.parse(xhr.responseText));
                    } else {
                        error(xhr);
                    }
                }
            };
            xhr.send(formData);
        });
    }

    static delete(route: string, params?: string) {
        return new Promise((success, error) => {
            let finalURl = this.url + route;
            if (params !== undefined) {
                finalURl = finalURl + params;
            }
            const xhr  = new XMLHttpRequest();
            xhr.open('DELETE', finalURl, true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200 || xhr.status === 201) {
                        success(JSON.parse(xhr.responseText));
                    } else {
                        error(xhr);
                    }
                }
            };
            xhr.send();
        });
    }

}
