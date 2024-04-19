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

import { MaintenanceDetailDTOPagedResult } from './maintenance-detail-dtopaged-result';
import { PerformanceDTO } from './performance-dto';
 /**
 * 
 *
 * @export
 * @interface MaintenanceBillsInfoDTO
 */
export interface MaintenanceBillsInfoDTO {

    /**
     * @type {Array<PerformanceDTO>}
     * @memberof MaintenanceBillsInfoDTO
     */
    bills?: Array<PerformanceDTO> | null;

    /**
     * @type {MaintenanceDetailDTOPagedResult}
     * @memberof MaintenanceBillsInfoDTO
     */
    maintenances?: MaintenanceDetailDTOPagedResult;
}
