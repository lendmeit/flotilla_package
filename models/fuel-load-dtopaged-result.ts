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

import { FuelLoadDTO } from './fuel-load-dto';
;

/**
 * 
 *
 * @export
 * @interface FuelLoadDTOPagedResult
 */
export interface FuelLoadDTOPagedResult {

    /**
     * @type {number}
     * @memberof FuelLoadDTOPagedResult
     */
    totalCount?: number;

    /**
     * @type {number}
     * @memberof FuelLoadDTOPagedResult
     */
    pageNumber?: number;

    /**
     * @type {number}
     * @memberof FuelLoadDTOPagedResult
     */
    recordNumber?: number;

    /**
     * @type {number}
     * @memberof FuelLoadDTOPagedResult
     */
    totalPages?: number;

    /**
     * @type {Array<FuelLoadDTO>}
     * @memberof FuelLoadDTOPagedResult
     */
    items?: Array<FuelLoadDTO> | null;
}
