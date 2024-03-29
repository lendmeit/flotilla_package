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

import { CompanyDTO } from './company-dto';
 /**
 * 
 *
 * @export
 * @interface CompanyDTOPagedResult
 */
export interface CompanyDTOPagedResult {

    /**
     * @type {number}
     * @memberof CompanyDTOPagedResult
     */
    totalCount?: number;

    /**
     * @type {number}
     * @memberof CompanyDTOPagedResult
     */
    pageNumber?: number;

    /**
     * @type {number}
     * @memberof CompanyDTOPagedResult
     */
    recordNumber?: number;

    /**
     * @type {number}
     * @memberof CompanyDTOPagedResult
     */
    totalPages?: number;

    /**
     * @type {Array<CompanyDTO>}
     * @memberof CompanyDTOPagedResult
     */
    items?: Array<CompanyDTO> | null;
}
