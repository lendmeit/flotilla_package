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

import { BrandDTO } from './brand-dto';
;

/**
 * 
 *
 * @export
 * @interface BrandDTOPagedResult
 */
export interface BrandDTOPagedResult {

    /**
     * @type {number}
     * @memberof BrandDTOPagedResult
     */
    totalCount?: number;

    /**
     * @type {number}
     * @memberof BrandDTOPagedResult
     */
    pageNumber?: number;

    /**
     * @type {number}
     * @memberof BrandDTOPagedResult
     */
    recordNumber?: number;

    /**
     * @type {number}
     * @memberof BrandDTOPagedResult
     */
    totalPages?: number;

    /**
     * @type {Array<BrandDTO>}
     * @memberof BrandDTOPagedResult
     */
    items?: Array<BrandDTO> | null;
}
