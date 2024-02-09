/* tslint:disable */
/* eslint-disable */
/**
 * PROJECT API - Development
 * PROJECT .NET Core Web API
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { MaintenanceGroupDTO } from '../models';
import { MaintenanceGroupDTOPagedResult } from '../models';
/**
 * MaintenanceGroupApi - axios parameter creator
 * @export
 */
export const MaintenanceGroupApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMaintenanceGroupGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/MaintenanceGroup`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMaintenanceGroupIdDelete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiMaintenanceGroupIdDelete.');
            }
            const localVarPath = `/api/MaintenanceGroup/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMaintenanceGroupIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiMaintenanceGroupIdGet.');
            }
            const localVarPath = `/api/MaintenanceGroup/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {MaintenanceGroupDTO} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMaintenanceGroupIdPut: async (body: MaintenanceGroupDTO, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling apiMaintenanceGroupIdPut.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiMaintenanceGroupIdPut.');
            }
            const localVarPath = `/api/MaintenanceGroup/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {MaintenanceGroupDTO} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMaintenanceGroupPost: async (body?: MaintenanceGroupDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/MaintenanceGroup`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} page 
         * @param {number} pageSize 
         * @param {string} [search] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMaintenanceGroupSearchGet: async (page: number, pageSize: number, search?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'page' is not null or undefined
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling apiMaintenanceGroupSearchGet.');
            }
            // verify required parameter 'pageSize' is not null or undefined
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling apiMaintenanceGroupSearchGet.');
            }
            const localVarPath = `/api/MaintenanceGroup/Search`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            if (page !== undefined) {
                localVarQueryParameter['Page'] = page;
            }

            if (search !== undefined) {
                localVarQueryParameter['Search'] = search;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['PageSize'] = pageSize;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MaintenanceGroupApi - functional programming interface
 * @export
 */
export const MaintenanceGroupApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMaintenanceGroupGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<MaintenanceGroupDTO>>>> {
            const localVarAxiosArgs = await MaintenanceGroupApiAxiosParamCreator(configuration).apiMaintenanceGroupGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMaintenanceGroupIdDelete(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<boolean>>> {
            const localVarAxiosArgs = await MaintenanceGroupApiAxiosParamCreator(configuration).apiMaintenanceGroupIdDelete(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMaintenanceGroupIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<MaintenanceGroupDTO>>> {
            const localVarAxiosArgs = await MaintenanceGroupApiAxiosParamCreator(configuration).apiMaintenanceGroupIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {MaintenanceGroupDTO} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMaintenanceGroupIdPut(body: MaintenanceGroupDTO, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<boolean>>> {
            const localVarAxiosArgs = await MaintenanceGroupApiAxiosParamCreator(configuration).apiMaintenanceGroupIdPut(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {MaintenanceGroupDTO} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMaintenanceGroupPost(body?: MaintenanceGroupDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>> {
            const localVarAxiosArgs = await MaintenanceGroupApiAxiosParamCreator(configuration).apiMaintenanceGroupPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {number} page 
         * @param {number} pageSize 
         * @param {string} [search] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMaintenanceGroupSearchGet(page: number, pageSize: number, search?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<MaintenanceGroupDTOPagedResult>>> {
            const localVarAxiosArgs = await MaintenanceGroupApiAxiosParamCreator(configuration).apiMaintenanceGroupSearchGet(page, pageSize, search, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MaintenanceGroupApi - factory interface
 * @export
 */
export const MaintenanceGroupApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMaintenanceGroupGet(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<MaintenanceGroupDTO>>> {
            return MaintenanceGroupApiFp(configuration).apiMaintenanceGroupGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMaintenanceGroupIdDelete(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<boolean>> {
            return MaintenanceGroupApiFp(configuration).apiMaintenanceGroupIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMaintenanceGroupIdGet(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<MaintenanceGroupDTO>> {
            return MaintenanceGroupApiFp(configuration).apiMaintenanceGroupIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {MaintenanceGroupDTO} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMaintenanceGroupIdPut(body: MaintenanceGroupDTO, id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<boolean>> {
            return MaintenanceGroupApiFp(configuration).apiMaintenanceGroupIdPut(body, id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {MaintenanceGroupDTO} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMaintenanceGroupPost(body?: MaintenanceGroupDTO, options?: AxiosRequestConfig): Promise<AxiosResponse<string>> {
            return MaintenanceGroupApiFp(configuration).apiMaintenanceGroupPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} page 
         * @param {number} pageSize 
         * @param {string} [search] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMaintenanceGroupSearchGet(page: number, pageSize: number, search?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<MaintenanceGroupDTOPagedResult>> {
            return MaintenanceGroupApiFp(configuration).apiMaintenanceGroupSearchGet(page, pageSize, search, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MaintenanceGroupApi - object-oriented interface
 * @export
 * @class MaintenanceGroupApi
 * @extends {BaseAPI}
 */
export class MaintenanceGroupApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MaintenanceGroupApi
     */
    public async apiMaintenanceGroupGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<MaintenanceGroupDTO>>> {
        return MaintenanceGroupApiFp(this.configuration).apiMaintenanceGroupGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MaintenanceGroupApi
     */
    public async apiMaintenanceGroupIdDelete(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<boolean>> {
        return MaintenanceGroupApiFp(this.configuration).apiMaintenanceGroupIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MaintenanceGroupApi
     */
    public async apiMaintenanceGroupIdGet(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<MaintenanceGroupDTO>> {
        return MaintenanceGroupApiFp(this.configuration).apiMaintenanceGroupIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {MaintenanceGroupDTO} body 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MaintenanceGroupApi
     */
    public async apiMaintenanceGroupIdPut(body: MaintenanceGroupDTO, id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<boolean>> {
        return MaintenanceGroupApiFp(this.configuration).apiMaintenanceGroupIdPut(body, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {MaintenanceGroupDTO} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MaintenanceGroupApi
     */
    public async apiMaintenanceGroupPost(body?: MaintenanceGroupDTO, options?: AxiosRequestConfig) : Promise<AxiosResponse<string>> {
        return MaintenanceGroupApiFp(this.configuration).apiMaintenanceGroupPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {number} page 
     * @param {number} pageSize 
     * @param {string} [search] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MaintenanceGroupApi
     */
    public async apiMaintenanceGroupSearchGet(page: number, pageSize: number, search?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<MaintenanceGroupDTOPagedResult>> {
        return MaintenanceGroupApiFp(this.configuration).apiMaintenanceGroupSearchGet(page, pageSize, search, options).then((request) => request(this.axios, this.basePath));
    }
}
