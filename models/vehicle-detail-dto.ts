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

import { DocumentDTO } from './document-dto';
import { FuelLoadDTOPagedResult } from './fuel-load-dtopaged-result';
import { ImageDTO } from './image-dto';
import { MaintenanceDTOPagedResult } from './maintenance-dtopaged-result';
import { PerformanceDTO } from './performance-dto';
import { ReminderDTOPagedResult } from './reminder-dtopaged-result';
import { VehicleStatisticsDTO } from './vehicle-statistics-dto';
import { VehicleStatusEnum } from './vehicle-status-enum';
 /**
 * 
 *
 * @export
 * @interface VehicleDetailDTO
 */
export interface VehicleDetailDTO {

    /**
     * @type {string}
     * @memberof VehicleDetailDTO
     */
    id?: string | null;

    /**
     * @type {string}
     * @memberof VehicleDetailDTO
     */
    description?: string | null;

    /**
     * @type {string}
     * @memberof VehicleDetailDTO
     */
    economicNumber?: string | null;

    /**
     * @type {string}
     * @memberof VehicleDetailDTO
     */
    vin?: string | null;

    /**
     * @type {string}
     * @memberof VehicleDetailDTO
     */
    placas?: string | null;

    /**
     * @type {VehicleStatusEnum}
     * @memberof VehicleDetailDTO
     */
    status?: VehicleStatusEnum;

    /**
     * @type {string}
     * @memberof VehicleDetailDTO
     */
    category?: string | null;

    /**
     * @type {string}
     * @memberof VehicleDetailDTO
     */
    machine?: string | null;

    /**
     * @type {string}
     * @memberof VehicleDetailDTO
     */
    project?: string | null;

    /**
     * @type {string}
     * @memberof VehicleDetailDTO
     */
    company?: string | null;

    /**
     * @type {string}
     * @memberof VehicleDetailDTO
     */
    assignment?: string | null;

    /**
     * @type {Array<PerformanceDTO>}
     * @memberof VehicleDetailDTO
     */
    performance?: Array<PerformanceDTO> | null;

    /**
     * @type {Array<VehicleStatisticsDTO>}
     * @memberof VehicleDetailDTO
     */
    statistics?: Array<VehicleStatisticsDTO> | null;

    /**
     * @type {FuelLoadDTOPagedResult}
     * @memberof VehicleDetailDTO
     */
    fuelLoads?: FuelLoadDTOPagedResult;

    /**
     * @type {MaintenanceDTOPagedResult}
     * @memberof VehicleDetailDTO
     */
    listMaintenances?: MaintenanceDTOPagedResult;

    /**
     * @type {Array<ImageDTO>}
     * @memberof VehicleDetailDTO
     */
    photographs?: Array<ImageDTO> | null;

    /**
     * @type {DocumentDTO}
     * @memberof VehicleDetailDTO
     */
    bill?: DocumentDTO;

    /**
     * @type {DocumentDTO}
     * @memberof VehicleDetailDTO
     */
    pedimento?: DocumentDTO;

    /**
     * @type {ReminderDTOPagedResult}
     * @memberof VehicleDetailDTO
     */
    listReminders?: ReminderDTOPagedResult;
}
