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

import { PolicyDTO } from './policy-dto';
;

/**
 * 
 *
 * @export
 * @interface PolicyDTOPagedResult
 */
export interface PolicyDTOPagedResult {

    /**
     * @type {number}
     * @memberof PolicyDTOPagedResult
     */
    totalCount?: number;

    /**
     * @type {number}
     * @memberof PolicyDTOPagedResult
     */
    pageNumber?: number;

    /**
     * @type {number}
     * @memberof PolicyDTOPagedResult
     */
    recordNumber?: number;

    /**
     * @type {number}
     * @memberof PolicyDTOPagedResult
     */
    totalPages?: number;

    /**
     * @type {Array<PolicyDTO>}
     * @memberof PolicyDTOPagedResult
     */
    items?: Array<PolicyDTO> | null;
}
