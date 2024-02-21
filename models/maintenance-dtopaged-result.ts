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

import { MaintenanceDTO } from './maintenance-dto';
 /**
 * 
 *
 * @export
 * @interface MaintenanceDTOPagedResult
 */
export interface MaintenanceDTOPagedResult {

    /**
     * @type {number}
     * @memberof MaintenanceDTOPagedResult
     */
    totalCount?: number;

    /**
     * @type {number}
     * @memberof MaintenanceDTOPagedResult
     */
    pageNumber?: number;

    /**
     * @type {number}
     * @memberof MaintenanceDTOPagedResult
     */
    recordNumber?: number;

    /**
     * @type {number}
     * @memberof MaintenanceDTOPagedResult
     */
    totalPages?: number;

    /**
     * @type {Array<MaintenanceDTO>}
     * @memberof MaintenanceDTOPagedResult
     */
    items?: Array<MaintenanceDTO> | null;
}
