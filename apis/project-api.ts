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
import { ProjectDTO } from '../models';
import { ProjectDTOPagedResult } from '../models';
import { SortOrderEnum } from '../models';
/**
 * ProjectApi - axios parameter creator
 * @export
 */
export const ProjectApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiProjectGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Project`;
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
        apiProjectIdDelete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiProjectIdDelete.');
            }
            const localVarPath = `/api/Project/{id}`
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
        apiProjectIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiProjectIdGet.');
            }
            const localVarPath = `/api/Project/{id}`
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
         * @param {ProjectDTO} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiProjectIdPut: async (body: ProjectDTO, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling apiProjectIdPut.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiProjectIdPut.');
            }
            const localVarPath = `/api/Project/{id}`
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
         * @param {ProjectDTO} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiProjectPost: async (body?: ProjectDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Project`;
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
         * @param {string} [orderByPropertyName] 
         * @param {SortOrderEnum} [sortOrder] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiProjectSearchGet: async (page: number, pageSize: number, search?: string, orderByPropertyName?: string, sortOrder?: SortOrderEnum, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'page' is not null or undefined
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling apiProjectSearchGet.');
            }
            // verify required parameter 'pageSize' is not null or undefined
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling apiProjectSearchGet.');
            }
            const localVarPath = `/api/Project/Search`;
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
 * ProjectApi - functional programming interface
 * @export
 */
export const ProjectApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProjectGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<ProjectDTO>>>> {
            const localVarAxiosArgs = await ProjectApiAxiosParamCreator(configuration).apiProjectGet(options);
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
        async apiProjectIdDelete(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<boolean>>> {
            const localVarAxiosArgs = await ProjectApiAxiosParamCreator(configuration).apiProjectIdDelete(id, options);
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
        async apiProjectIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ProjectDTO>>> {
            const localVarAxiosArgs = await ProjectApiAxiosParamCreator(configuration).apiProjectIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {ProjectDTO} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProjectIdPut(body: ProjectDTO, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<boolean>>> {
            const localVarAxiosArgs = await ProjectApiAxiosParamCreator(configuration).apiProjectIdPut(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {ProjectDTO} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProjectPost(body?: ProjectDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>> {
            const localVarAxiosArgs = await ProjectApiAxiosParamCreator(configuration).apiProjectPost(body, options);
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
        async apiProjectSearchGet(page: number, pageSize: number, search?: string, orderByPropertyName?: string, sortOrder?: SortOrderEnum, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ProjectDTOPagedResult>>> {
            const localVarAxiosArgs = await ProjectApiAxiosParamCreator(configuration).apiProjectSearchGet(page, pageSize, search, orderByPropertyName, sortOrder, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ProjectApi - factory interface
 * @export
 */
export const ProjectApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProjectGet(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<ProjectDTO>>> {
            return ProjectApiFp(configuration).apiProjectGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProjectIdDelete(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<boolean>> {
            return ProjectApiFp(configuration).apiProjectIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProjectIdGet(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ProjectDTO>> {
            return ProjectApiFp(configuration).apiProjectIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ProjectDTO} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProjectIdPut(body: ProjectDTO, id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<boolean>> {
            return ProjectApiFp(configuration).apiProjectIdPut(body, id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ProjectDTO} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProjectPost(body?: ProjectDTO, options?: AxiosRequestConfig): Promise<AxiosResponse<string>> {
            return ProjectApiFp(configuration).apiProjectPost(body, options).then((request) => request(axios, basePath));
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
        async apiProjectSearchGet(page: number, pageSize: number, search?: string, orderByPropertyName?: string, sortOrder?: SortOrderEnum, options?: AxiosRequestConfig): Promise<AxiosResponse<ProjectDTOPagedResult>> {
            return ProjectApiFp(configuration).apiProjectSearchGet(page, pageSize, search, orderByPropertyName, sortOrder, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProjectApi - object-oriented interface
 * @export
 * @class ProjectApi
 * @extends {BaseAPI}
 */
export class ProjectApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public async apiProjectGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<ProjectDTO>>> {
        return ProjectApiFp(this.configuration).apiProjectGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public async apiProjectIdDelete(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<boolean>> {
        return ProjectApiFp(this.configuration).apiProjectIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public async apiProjectIdGet(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ProjectDTO>> {
        return ProjectApiFp(this.configuration).apiProjectIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {ProjectDTO} body 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public async apiProjectIdPut(body: ProjectDTO, id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<boolean>> {
        return ProjectApiFp(this.configuration).apiProjectIdPut(body, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {ProjectDTO} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectApi
     */
    public async apiProjectPost(body?: ProjectDTO, options?: AxiosRequestConfig) : Promise<AxiosResponse<string>> {
        return ProjectApiFp(this.configuration).apiProjectPost(body, options).then((request) => request(this.axios, this.basePath));
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
     * @memberof ProjectApi
     */
    public async apiProjectSearchGet(page: number, pageSize: number, search?: string, orderByPropertyName?: string, sortOrder?: SortOrderEnum, options?: AxiosRequestConfig) : Promise<AxiosResponse<ProjectDTOPagedResult>> {
        return ProjectApiFp(this.configuration).apiProjectSearchGet(page, pageSize, search, orderByPropertyName, sortOrder, options).then((request) => request(this.axios, this.basePath));
    }
}
