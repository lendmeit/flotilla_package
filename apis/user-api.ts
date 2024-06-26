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
import { AppUserDTO } from '../models';
import { AppUserDTOPagedResult } from '../models';
import { EditUserResponse } from '../models';
import { GenderEnum } from '../models';
import { SortOrderEnum } from '../models';
import { UserPostDTO } from '../models';
import { UserPutDTO } from '../models';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {UserPutDTO} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserEditUserAppIdPut: async (id: string, body?: UserPutDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiUserEditUserAppIdPut.');
            }
            const localVarPath = `/api/User/EditUserApp/{id}`
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/User`;
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
        apiUserIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiUserIdGet.');
            }
            const localVarPath = `/api/User/{id}`
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
         * @param {string} id 
         * @param {Blob} [imageFile] 
         * @param {string} [name] 
         * @param {string} [firstName] 
         * @param {string} [lastName] 
         * @param {string} [url] 
         * @param {string} [countryCode] 
         * @param {string} [titleAbbreviation] 
         * @param {GenderEnum} [gender] 
         * @param {string} [phoneNumber] 
         * @param {string} [country] 
         * @param {string} [city] 
         * @param {string} [address] 
         * @param {Date} [birthDate] 
         * @param {number} [costPerAppointment] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserIdPutForm: async (id: string, imageFile?: Blob, name?: string, firstName?: string, lastName?: string, url?: string, countryCode?: string, titleAbbreviation?: string, gender?: GenderEnum, phoneNumber?: string, country?: string, city?: string, address?: string, birthDate?: Date, costPerAppointment?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiUserIdPutForm.');
            }
            const localVarPath = `/api/User/{id}`
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
            const localVarFormParams = new FormData();

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }


            if (imageFile !== undefined) { 
                localVarFormParams.append('imageFile', imageFile as any);
            }

            if (name !== undefined) { 
                localVarFormParams.append('name', name as any);
            }

            if (firstName !== undefined) { 
                localVarFormParams.append('firstName', firstName as any);
            }

            if (lastName !== undefined) { 
                localVarFormParams.append('lastName', lastName as any);
            }

            if (url !== undefined) { 
                localVarFormParams.append('Url', url as any);
            }

            if (countryCode !== undefined) { 
                localVarFormParams.append('countryCode', countryCode as any);
            }

            if (titleAbbreviation !== undefined) { 
                localVarFormParams.append('titleAbbreviation', titleAbbreviation as any);
            }

            if (gender !== undefined) { 
                localVarFormParams.append('gender', gender as any);
            }

            if (phoneNumber !== undefined) { 
                localVarFormParams.append('phoneNumber', phoneNumber as any);
            }

            if (country !== undefined) { 
                localVarFormParams.append('country', country as any);
            }

            if (city !== undefined) { 
                localVarFormParams.append('city', city as any);
            }

            if (address !== undefined) { 
                localVarFormParams.append('address', address as any);
            }

            if (birthDate !== undefined) { 
                localVarFormParams.append('birthDate', birthDate as any);
            }

            if (costPerAppointment !== undefined) { 
                localVarFormParams.append('costPerAppointment', costPerAppointment as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
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
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Sample request:                   GET api/User/Registrar \\n     [FirstName] Opcional\\n     [LastName] Opcional\\n     \\n     [RoleName] Opcional si se deja vacío sera rol tipo \"User\"\\n     Para los roles existentes consultar el recurso \"/api/Role\"                El user
         * @summary Endpoint para el registro de los usuarios
         * @param {UserPostDTO} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserPost: async (body?: UserPostDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/User`;
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
         * @param {boolean} [active] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserSearchGet: async (page: number, pageSize: number, search?: string, orderByPropertyName?: string, sortOrder?: SortOrderEnum, active?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'page' is not null or undefined
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling apiUserSearchGet.');
            }
            // verify required parameter 'pageSize' is not null or undefined
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling apiUserSearchGet.');
            }
            const localVarPath = `/api/User/Search`;
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
        /**
         * 
         * @param {string} id 
         * @param {Blob} [image] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUserUploadImageIdPostForm: async (id: string, image?: Blob, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiUserUploadImageIdPostForm.');
            }
            const localVarPath = `/api/User/UploadImage/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication Bearer required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }


            if (image !== undefined) { 
                localVarFormParams.append('image', image as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
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
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {UserPutDTO} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserEditUserAppIdPut(id: string, body?: UserPutDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<EditUserResponse>>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).apiUserEditUserAppIdPut(id, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<AppUserDTO>>>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).apiUserGet(options);
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
        async apiUserIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AppUserDTO>>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).apiUserIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {Blob} [imageFile] 
         * @param {string} [name] 
         * @param {string} [firstName] 
         * @param {string} [lastName] 
         * @param {string} [url] 
         * @param {string} [countryCode] 
         * @param {string} [titleAbbreviation] 
         * @param {GenderEnum} [gender] 
         * @param {string} [phoneNumber] 
         * @param {string} [country] 
         * @param {string} [city] 
         * @param {string} [address] 
         * @param {Date} [birthDate] 
         * @param {number} [costPerAppointment] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserIdPutForm(id: string, imageFile?: Blob, name?: string, firstName?: string, lastName?: string, url?: string, countryCode?: string, titleAbbreviation?: string, gender?: GenderEnum, phoneNumber?: string, country?: string, city?: string, address?: string, birthDate?: Date, costPerAppointment?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<EditUserResponse>>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).apiUserIdPutForm(id, imageFile, name, firstName, lastName, url, countryCode, titleAbbreviation, gender, phoneNumber, country, city, address, birthDate, costPerAppointment, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Sample request:                   GET api/User/Registrar \\n     [FirstName] Opcional\\n     [LastName] Opcional\\n     \\n     [RoleName] Opcional si se deja vacío sera rol tipo \"User\"\\n     Para los roles existentes consultar el recurso \"/api/Role\"                El user
         * @summary Endpoint para el registro de los usuarios
         * @param {UserPostDTO} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserPost(body?: UserPostDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).apiUserPost(body, options);
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
         * @param {boolean} [active] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserSearchGet(page: number, pageSize: number, search?: string, orderByPropertyName?: string, sortOrder?: SortOrderEnum, active?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AppUserDTOPagedResult>>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).apiUserSearchGet(page, pageSize, search, orderByPropertyName, sortOrder, active, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {Blob} [image] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserUploadImageIdPostForm(id: string, image?: Blob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<EditUserResponse>>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).apiUserUploadImageIdPostForm(id, image, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {UserPutDTO} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserEditUserAppIdPut(id: string, body?: UserPutDTO, options?: AxiosRequestConfig): Promise<AxiosResponse<EditUserResponse>> {
            return UserApiFp(configuration).apiUserEditUserAppIdPut(id, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserGet(options?: AxiosRequestConfig): Promise<AxiosResponse<Array<AppUserDTO>>> {
            return UserApiFp(configuration).apiUserGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserIdGet(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AppUserDTO>> {
            return UserApiFp(configuration).apiUserIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {Blob} [imageFile] 
         * @param {string} [name] 
         * @param {string} [firstName] 
         * @param {string} [lastName] 
         * @param {string} [url] 
         * @param {string} [countryCode] 
         * @param {string} [titleAbbreviation] 
         * @param {GenderEnum} [gender] 
         * @param {string} [phoneNumber] 
         * @param {string} [country] 
         * @param {string} [city] 
         * @param {string} [address] 
         * @param {Date} [birthDate] 
         * @param {number} [costPerAppointment] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserIdPutForm(id: string, imageFile?: Blob, name?: string, firstName?: string, lastName?: string, url?: string, countryCode?: string, titleAbbreviation?: string, gender?: GenderEnum, phoneNumber?: string, country?: string, city?: string, address?: string, birthDate?: Date, costPerAppointment?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<EditUserResponse>> {
            return UserApiFp(configuration).apiUserIdPutForm(id, imageFile, name, firstName, lastName, url, countryCode, titleAbbreviation, gender, phoneNumber, country, city, address, birthDate, costPerAppointment, options).then((request) => request(axios, basePath));
        },
        /**
         * Sample request:                   GET api/User/Registrar \\n     [FirstName] Opcional\\n     [LastName] Opcional\\n     \\n     [RoleName] Opcional si se deja vacío sera rol tipo \"User\"\\n     Para los roles existentes consultar el recurso \"/api/Role\"                El user
         * @summary Endpoint para el registro de los usuarios
         * @param {UserPostDTO} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserPost(body?: UserPostDTO, options?: AxiosRequestConfig): Promise<AxiosResponse<string>> {
            return UserApiFp(configuration).apiUserPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} page 
         * @param {number} pageSize 
         * @param {string} [search] 
         * @param {string} [orderByPropertyName] 
         * @param {SortOrderEnum} [sortOrder] 
         * @param {boolean} [active] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserSearchGet(page: number, pageSize: number, search?: string, orderByPropertyName?: string, sortOrder?: SortOrderEnum, active?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<AppUserDTOPagedResult>> {
            return UserApiFp(configuration).apiUserSearchGet(page, pageSize, search, orderByPropertyName, sortOrder, active, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {Blob} [image] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUserUploadImageIdPostForm(id: string, image?: Blob, options?: AxiosRequestConfig): Promise<AxiosResponse<EditUserResponse>> {
            return UserApiFp(configuration).apiUserUploadImageIdPostForm(id, image, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * 
     * @param {string} id 
     * @param {UserPutDTO} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public async apiUserEditUserAppIdPut(id: string, body?: UserPutDTO, options?: AxiosRequestConfig) : Promise<AxiosResponse<EditUserResponse>> {
        return UserApiFp(this.configuration).apiUserEditUserAppIdPut(id, body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public async apiUserGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<AppUserDTO>>> {
        return UserApiFp(this.configuration).apiUserGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public async apiUserIdGet(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AppUserDTO>> {
        return UserApiFp(this.configuration).apiUserIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {Blob} [imageFile] 
     * @param {string} [name] 
     * @param {string} [firstName] 
     * @param {string} [lastName] 
     * @param {string} [url] 
     * @param {string} [countryCode] 
     * @param {string} [titleAbbreviation] 
     * @param {GenderEnum} [gender] 
     * @param {string} [phoneNumber] 
     * @param {string} [country] 
     * @param {string} [city] 
     * @param {string} [address] 
     * @param {Date} [birthDate] 
     * @param {number} [costPerAppointment] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public async apiUserIdPutForm(id: string, imageFile?: Blob, name?: string, firstName?: string, lastName?: string, url?: string, countryCode?: string, titleAbbreviation?: string, gender?: GenderEnum, phoneNumber?: string, country?: string, city?: string, address?: string, birthDate?: Date, costPerAppointment?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<EditUserResponse>> {
        return UserApiFp(this.configuration).apiUserIdPutForm(id, imageFile, name, firstName, lastName, url, countryCode, titleAbbreviation, gender, phoneNumber, country, city, address, birthDate, costPerAppointment, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Sample request:                   GET api/User/Registrar \\n     [FirstName] Opcional\\n     [LastName] Opcional\\n     \\n     [RoleName] Opcional si se deja vacío sera rol tipo \"User\"\\n     Para los roles existentes consultar el recurso \"/api/Role\"                El user
     * @summary Endpoint para el registro de los usuarios
     * @param {UserPostDTO} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public async apiUserPost(body?: UserPostDTO, options?: AxiosRequestConfig) : Promise<AxiosResponse<string>> {
        return UserApiFp(this.configuration).apiUserPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {number} page 
     * @param {number} pageSize 
     * @param {string} [search] 
     * @param {string} [orderByPropertyName] 
     * @param {SortOrderEnum} [sortOrder] 
     * @param {boolean} [active] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public async apiUserSearchGet(page: number, pageSize: number, search?: string, orderByPropertyName?: string, sortOrder?: SortOrderEnum, active?: boolean, options?: AxiosRequestConfig) : Promise<AxiosResponse<AppUserDTOPagedResult>> {
        return UserApiFp(this.configuration).apiUserSearchGet(page, pageSize, search, orderByPropertyName, sortOrder, active, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} id 
     * @param {Blob} [image] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public async apiUserUploadImageIdPostForm(id: string, image?: Blob, options?: AxiosRequestConfig) : Promise<AxiosResponse<EditUserResponse>> {
        return UserApiFp(this.configuration).apiUserUploadImageIdPostForm(id, image, options).then((request) => request(this.axios, this.basePath));
    }
}
