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
import { FuelMeasureDTO } from '../models';
import { FuelMeasureDTOPagedResult } from '../models';
import { SortOrderEnum } from '../models';
/**
 * FuelMeasureApi - axios parameter creator
 * @export
 */
export const FuelMeasureApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFuelMeasureGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/FuelMeasure`;
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
        apiFuelMeasureIdDelete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiFuelMeasureIdDelete.');
            }
            const localVarPath = `/api/FuelMeasure/{id}`
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
        apiFuelMeasureIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiFuelMeasureIdGet.');
            }
            const localVarPath = `/api/FuelMeasure/{id}`
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
         * @param {FuelMeasureDTO} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFuelMeasureIdPut: async (body: FuelMeasureDTO, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling apiFuelMeasureIdPut.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiFuelMeasureIdPut.');
            }
            const localVarPath = `/api/FuelMeasure/{id}`
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

            localVarHeaderParameter['Content-Type'] = 'application/json;odata.metadata=minimal;odata.streaming=true';

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
         * @param {FuelMeasureDTO} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFuelMeasurePost: async (body?: FuelMeasureDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/FuelMeasure`;
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

            localVarHeaderParameter['Content-Type'] = 'application/json;odata.metadata=minimal;odata.streaming=true';

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
         * @param {string} [orderByPropertyName] 
         * @param {SortOrderEnum} [sortOrder] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFuelMeasureSearchGet: async (page: number, pageSize: number, search?: string, orderByPropertyName?: string, sortOrder?: SortOrderEnum, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'page' is not null or undefined
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling apiFuelMeasureSearchGet.');
            }
            // verify required parameter 'pageSize' is not null or undefined
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling apiFuelMeasureSearchGet.');
            }
            const localVarPath = `/api/FuelMeasure/Search`;
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

            if (orderByPropertyName !== undefined) {
                localVarQueryParameter['OrderByPropertyName'] = orderByPropertyName;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['SortOrder'] = sortOrder;
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
 * FuelMeasureApi - functional programming interface
 * @export
 */
export const FuelMeasureApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFuelMeasureGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<FuelMeasureDTO>>>> {
            const localVarAxiosArgs = await FuelMeasureApiAxiosParamCreator(configuration).apiFuelMeasureGet(options);
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
        async apiFuelMeasureIdDelete(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<boolean>>> {
            const localVarAxiosArgs = await FuelMeasureApiAxiosParamCreator(configuration).apiFuelMeasureIdDelete(id, options);
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
        async apiFuelMeasureIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<FuelMeasureDTO>>> {
            const localVarAxiosArgs = await FuelMeasureApiAxiosParamCreator(configuration).apiFuelMeasureIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {FuelMeasureDTO} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFuelMeasureIdPut(body: FuelMeasureDTO, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<boolean>>> {
            const localVarAxiosArgs = await FuelMeasureApiAxiosParamCreator(configuration).apiFuelMeasureIdPut(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {FuelMeasureDTO} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFuelMeasurePost(body?: FuelMeasureDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>> {
            const localVarAxiosArgs = await FuelMeasureApiAxiosParamCreator(configuration).apiFuelMeasurePost(body, options);
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
         * @param {string} [orderByPropertyName] 
         * @param {SortOrderEnum} [sortOrder] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFuelMeasureSearchGet(page: number, pageSize: number, search?: string, orderByPropertyName?: string, sortOrder?: SortOrderEnum, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<FuelMeasureDTOPagedResult>>> {
            const localVarAxiosArgs = await FuelMeasureApiAxiosParamCreator(configuration).apiFuelMeasureSearchGet(page, pageSize, search, orderByPropertyName, sortOrder, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * FuelMeasureApi - factory interface
 * @export
 */
export const FuelMeasureApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFuelMeasureGet(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<FuelMeasureDTO>>> {
            return FuelMeasureApiFp(configuration).apiFuelMeasureGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFuelMeasureIdDelete(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<boolean>> {
            return FuelMeasureApiFp(configuration).apiFuelMeasureIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFuelMeasureIdGet(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<FuelMeasureDTO>> {
            return FuelMeasureApiFp(configuration).apiFuelMeasureIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {FuelMeasureDTO} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFuelMeasureIdPut(body: FuelMeasureDTO, id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<boolean>> {
            return FuelMeasureApiFp(configuration).apiFuelMeasureIdPut(body, id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {FuelMeasureDTO} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFuelMeasurePost(body?: FuelMeasureDTO, options?: AxiosRequestConfig): Promise<AxiosResponse<string>> {
            return FuelMeasureApiFp(configuration).apiFuelMeasurePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} page 
         * @param {number} pageSize 
         * @param {string} [search] 
         * @param {string} [orderByPropertyName] 
         * @param {SortOrderEnum} [sortOrder] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiFuelMeasureSearchGet(page: number, pageSize: number, search?: string, orderByPropertyName?: string, sortOrder?: SortOrderEnum, options?: AxiosRequestConfig): Promise<AxiosResponse<FuelMeasureDTOPagedResult>> {
            return FuelMeasureApiFp(configuration).apiFuelMeasureSearchGet(page, pageSize, search, orderByPropertyName, sortOrder, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FuelMeasureApi - object-oriented interface
 * @export
 * @class FuelMeasureApi
 * @extends {BaseAPI}
 */
export class FuelMeasureApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FuelMeasureApi
     */
    public async apiFuelMeasureGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<FuelMeasureDTO>>> {
        return FuelMeasureApiFp(this.configuration).apiFuelMeasureGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FuelMeasureApi
     */
    public async apiFuelMeasureIdDelete(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<boolean>> {
        return FuelMeasureApiFp(this.configuration).apiFuelMeasureIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FuelMeasureApi
     */
    public async apiFuelMeasureIdGet(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<FuelMeasureDTO>> {
        return FuelMeasureApiFp(this.configuration).apiFuelMeasureIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {FuelMeasureDTO} body 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FuelMeasureApi
     */
    public async apiFuelMeasureIdPut(body: FuelMeasureDTO, id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<boolean>> {
        return FuelMeasureApiFp(this.configuration).apiFuelMeasureIdPut(body, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {FuelMeasureDTO} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FuelMeasureApi
     */
    public async apiFuelMeasurePost(body?: FuelMeasureDTO, options?: AxiosRequestConfig) : Promise<AxiosResponse<string>> {
        return FuelMeasureApiFp(this.configuration).apiFuelMeasurePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {number} page 
     * @param {number} pageSize 
     * @param {string} [search] 
     * @param {string} [orderByPropertyName] 
     * @param {SortOrderEnum} [sortOrder] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FuelMeasureApi
     */
    public async apiFuelMeasureSearchGet(page: number, pageSize: number, search?: string, orderByPropertyName?: string, sortOrder?: SortOrderEnum, options?: AxiosRequestConfig) : Promise<AxiosResponse<FuelMeasureDTOPagedResult>> {
        return FuelMeasureApiFp(this.configuration).apiFuelMeasureSearchGet(page, pageSize, search, orderByPropertyName, sortOrder, options).then((request) => request(this.axios, this.basePath));
    }
}
