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

import { VendorDTO } from './vendor-dto';
 /**
 * 
 *
 * @export
 * @interface VendorDTOPagedResult
 */
export interface VendorDTOPagedResult {

    /**
     * @type {number}
     * @memberof VendorDTOPagedResult
     */
    totalCount?: number;

    /**
     * @type {number}
     * @memberof VendorDTOPagedResult
     */
    pageNumber?: number;

    /**
     * @type {number}
     * @memberof VendorDTOPagedResult
     */
    recordNumber?: number;

    /**
     * @type {number}
     * @memberof VendorDTOPagedResult
     */
    totalPages?: number;

    /**
     * @type {Array<VendorDTO>}
     * @memberof VendorDTOPagedResult
     */
    items?: Array<VendorDTO> | null;
}
