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
import { CategoryDTO } from '../models';
import { CategoryDTOPagedResult } from '../models';
import { CategoryTypeEnum } from '../models';
import { SortOrderEnum } from '../models';
/**
 * CategoryApi - axios parameter creator
 * @export
 */
export const CategoryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCategoryGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Category`;
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
        apiCategoryIdDelete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiCategoryIdDelete.');
            }
            const localVarPath = `/api/Category/{id}`
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
        apiCategoryIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiCategoryIdGet.');
            }
            const localVarPath = `/api/Category/{id}`
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
         * @param {CategoryDTO} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCategoryIdPut: async (body: CategoryDTO, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling apiCategoryIdPut.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiCategoryIdPut.');
            }
            const localVarPath = `/api/Category/{id}`
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
         * @param {CategoryDTO} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCategoryPost: async (body?: CategoryDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/Category`;
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
         * @param {CategoryTypeEnum} [categoryType] 
         * @param {string} [search] 
         * @param {string} [orderByPropertyName] 
         * @param {SortOrderEnum} [sortOrder] 
         * @param {boolean} [active] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCategorySearchGet: async (page: number, pageSize: number, categoryType?: CategoryTypeEnum, search?: string, orderByPropertyName?: string, sortOrder?: SortOrderEnum, active?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'page' is not null or undefined
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling apiCategorySearchGet.');
            }
            // verify required parameter 'pageSize' is not null or undefined
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling apiCategorySearchGet.');
            }
            const localVarPath = `/api/Category/Search`;
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

            if (categoryType !== undefined) {
                localVarQueryParameter['CategoryType'] = categoryType;
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

            if (active !== undefined) {
                localVarQueryParameter['Active'] = active;
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
 * CategoryApi - functional programming interface
 * @export
 */
export const CategoryApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategoryGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<CategoryDTO>>>> {
            const localVarAxiosArgs = await CategoryApiAxiosParamCreator(configuration).apiCategoryGet(options);
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
        async apiCategoryIdDelete(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<boolean>>> {
            const localVarAxiosArgs = await CategoryApiAxiosParamCreator(configuration).apiCategoryIdDelete(id, options);
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
        async apiCategoryIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CategoryDTO>>> {
            const localVarAxiosArgs = await CategoryApiAxiosParamCreator(configuration).apiCategoryIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {CategoryDTO} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategoryIdPut(body: CategoryDTO, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<boolean>>> {
            const localVarAxiosArgs = await CategoryApiAxiosParamCreator(configuration).apiCategoryIdPut(body, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {CategoryDTO} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategoryPost(body?: CategoryDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>> {
            const localVarAxiosArgs = await CategoryApiAxiosParamCreator(configuration).apiCategoryPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {number} page 
         * @param {number} pageSize 
         * @param {CategoryTypeEnum} [categoryType] 
         * @param {string} [search] 
         * @param {string} [orderByPropertyName] 
         * @param {SortOrderEnum} [sortOrder] 
         * @param {boolean} [active] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategorySearchGet(page: number, pageSize: number, categoryType?: CategoryTypeEnum, search?: string, orderByPropertyName?: string, sortOrder?: SortOrderEnum, active?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CategoryDTOPagedResult>>> {
            const localVarAxiosArgs = await CategoryApiAxiosParamCreator(configuration).apiCategorySearchGet(page, pageSize, categoryType, search, orderByPropertyName, sortOrder, active, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CategoryApi - factory interface
 * @export
 */
export const CategoryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategoryGet(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<CategoryDTO>>> {
            return CategoryApiFp(configuration).apiCategoryGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategoryIdDelete(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<boolean>> {
            return CategoryApiFp(configuration).apiCategoryIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategoryIdGet(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<CategoryDTO>> {
            return CategoryApiFp(configuration).apiCategoryIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CategoryDTO} body 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategoryIdPut(body: CategoryDTO, id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<boolean>> {
            return CategoryApiFp(configuration).apiCategoryIdPut(body, id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CategoryDTO} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategoryPost(body?: CategoryDTO, options?: AxiosRequestConfig): Promise<AxiosResponse<string>> {
            return CategoryApiFp(configuration).apiCategoryPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} page 
         * @param {number} pageSize 
         * @param {CategoryTypeEnum} [categoryType] 
         * @param {string} [search] 
         * @param {string} [orderByPropertyName] 
         * @param {SortOrderEnum} [sortOrder] 
         * @param {boolean} [active] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategorySearchGet(page: number, pageSize: number, categoryType?: CategoryTypeEnum, search?: string, orderByPropertyName?: string, sortOrder?: SortOrderEnum, active?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<CategoryDTOPagedResult>> {
            return CategoryApiFp(configuration).apiCategorySearchGet(page, pageSize, categoryType, search, orderByPropertyName, sortOrder, active, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CategoryApi - object-oriented interface
 * @export
 * @class CategoryApi
 * @extends {BaseAPI}
 */
export class CategoryApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryApi
     */
    public async apiCategoryGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<CategoryDTO>>> {
        return CategoryApiFp(this.configuration).apiCategoryGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryApi
     */
    public async apiCategoryIdDelete(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<boolean>> {
        return CategoryApiFp(this.configuration).apiCategoryIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryApi
     */
    public async apiCategoryIdGet(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<CategoryDTO>> {
        return CategoryApiFp(this.configuration).apiCategoryIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {CategoryDTO} body 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryApi
     */
    public async apiCategoryIdPut(body: CategoryDTO, id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<boolean>> {
        return CategoryApiFp(this.configuration).apiCategoryIdPut(body, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {CategoryDTO} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryApi
     */
    public async apiCategoryPost(body?: CategoryDTO, options?: AxiosRequestConfig) : Promise<AxiosResponse<string>> {
        return CategoryApiFp(this.configuration).apiCategoryPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {number} page 
     * @param {number} pageSize 
     * @param {CategoryTypeEnum} [categoryType] 
     * @param {string} [search] 
     * @param {string} [orderByPropertyName] 
     * @param {SortOrderEnum} [sortOrder] 
     * @param {boolean} [active] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryApi
     */
    public async apiCategorySearchGet(page: number, pageSize: number, categoryType?: CategoryTypeEnum, search?: string, orderByPropertyName?: string, sortOrder?: SortOrderEnum, active?: boolean, options?: AxiosRequestConfig) : Promise<AxiosResponse<CategoryDTOPagedResult>> {
        return CategoryApiFp(this.configuration).apiCategorySearchGet(page, pageSize, categoryType, search, orderByPropertyName, sortOrder, active, options).then((request) => request(this.axios, this.basePath));
    }
}
