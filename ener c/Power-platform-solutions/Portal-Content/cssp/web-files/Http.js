export const HttpService = {
    get: (url, contentType, body = null, headers = null) => {
        return new Promise((res, rej) => {
            var req = new XMLHttpRequest();
            req.open("GET", url, true);
            req.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
            req.setRequestHeader("Content-Type", `${contentType}`);
            
            if (headers) {
                Object.keys(headers).forEach(key => {
                    req.setRequestHeader(key, headers[key]);
                })
            }

            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status >= 200 && this.status <= 210 ) res(this.response);
                    else rej(this.statusText);
                };
            }
            if (body) req.send(body);
            else req.send();
        });
    },
    
    post: (url, body, headers = null, withCredentials = false, forceResolve = false) => {
        return new Promise((res, rej) => {
            var req = new XMLHttpRequest();
            req.open("POST", url, true);
            req.withCredentials = withCredentials;
            req.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            
            if (headers) {
                Object.keys(headers).forEach(key => {
                    req.setRequestHeader(key, headers[key]);
                })
            }

            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;

                    if (forceResolve) {
                        res({ status: this.status, body: this.statusText });
                        return;
                    }

                    if (this.status === 200 || this.status === 204 || this.status === 302) res(this.response);
                    else rej(this.statusText);
                }
            };
            req.send(JSON.stringify(body));
        });
    },
    postForPDF: (url, body, headers = null, withCredentials = false, forceResolve = false) => {
        return new Promise((res, rej) => {
            var req = new XMLHttpRequest();
            req.open("POST", url, true);
            req.responseType = "blob";
            req.withCredentials = withCredentials;
            req.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            if (headers) {
                Object.keys(headers).forEach(key => {
                    req.setRequestHeader(key, headers[key]);
                })
            }

            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;

                    if (forceResolve) {
                        res({ status: this.status, body: this.response });
                        return;
                    }

                    if (this.status === 200 || this.status === 204 || this.status === 302) res(this.response);
                    else rej(this.statusText);
                }
            };
            req.send(JSON.stringify(body));
        });
    },
    delete: (url, headers = null, body = null) => {
        return new Promise((res, rej) => {
            var req = new XMLHttpRequest();
            req.open("DELETE", url, true);
            req.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            
            if (headers) {
                Object.keys(headers).forEach(key => {
                    req.setRequestHeader(key, headers[key]);
                })
            }
            
            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status >= 200 && this.status <= 210 ) res(this.response);
                    else rej(this.statusText);
                };
            }
            req.send(body);
        });
    },
}