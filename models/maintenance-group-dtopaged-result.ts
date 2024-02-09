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

import { MaintenanceGroupDTO } from './maintenance-group-dto';
;

/**
 * 
 *
 * @export
 * @interface MaintenanceGroupDTOPagedResult
 */
export interface MaintenanceGroupDTOPagedResult {

    /**
     * @type {number}
     * @memberof MaintenanceGroupDTOPagedResult
     */
    totalCount?: number;

    /**
     * @type {number}
     * @memberof MaintenanceGroupDTOPagedResult
     */
    pageNumber?: number;

    /**
     * @type {number}
     * @memberof MaintenanceGroupDTOPagedResult
     */
    recordNumber?: number;

    /**
     * @type {number}
     * @memberof MaintenanceGroupDTOPagedResult
     */
    totalPages?: number;

    /**
     * @type {Array<MaintenanceGroupDTO>}
     * @memberof MaintenanceGroupDTOPagedResult
     */
    items?: Array<MaintenanceGroupDTO> | null;
}
