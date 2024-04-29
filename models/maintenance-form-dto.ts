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
import { ImageDTO } from './image-dto';
import { MaintenancePartDTO } from './maintenance-part-dto';
import { MaintenanceServiceFormDTO } from './maintenance-service-form-dto';
 /**
 * 
 *
 * @export
 * @interface MaintenanceFormDTO
 */
export interface MaintenanceFormDTO {

    /**
     * @type {string}
     * @memberof MaintenanceFormDTO
     */
    id?: string | null;

    /**
     * @type {boolean}
     * @memberof MaintenanceFormDTO
     */
    active?: boolean;

    /**
     * @type {string}
     * @memberof MaintenanceFormDTO
     */
    name?: string | null;

    /**
     * @type {string}
     * @memberof MaintenanceFormDTO
     */
    startDate?: string | null;

    /**
     * @type {string}
     * @memberof MaintenanceFormDTO
     */
    finishDate?: string | null;

    /**
     * @type {string}
     * @memberof MaintenanceFormDTO
     */
    startHour?: string | null;

    /**
     * @type {string}
     * @memberof MaintenanceFormDTO
     */
    finishHour?: string | null;

    /**
     * @type {string}
     * @memberof MaintenanceFormDTO
     */
    comments?: string | null;

    /**
     * @type {string}
     * @memberof MaintenanceFormDTO
     */
    odometer?: string | null;

    /**
     * @type {string}
     * @memberof MaintenanceFormDTO
     */
    reference?: string | null;

    /**
     * @type {string}
     * @memberof MaintenanceFormDTO
     */
    maintenanceTypeId?: string | null;

    /**
     * @type {string}
     * @memberof MaintenanceFormDTO
     */
    maintenanceGroupId?: string | null;

    /**
     * @type {string}
     * @memberof MaintenanceFormDTO
     */
    vendorId?: string | null;

    /**
     * @type {string}
     * @memberof MaintenanceFormDTO
     */
    documentId?: string | null;

    /**
     * @type {Array<MaintenanceServiceFormDTO>}
     * @memberof MaintenanceFormDTO
     */
    services?: Array<MaintenanceServiceFormDTO> | null;

    /**
     * @type {Array<MaintenancePartDTO>}
     * @memberof MaintenanceFormDTO
     */
    maintenanceParts?: Array<MaintenancePartDTO> | null;

    /**
     * @type {string}
     * @memberof MaintenanceFormDTO
     */
    vehicleId?: string | null;

    /**
     * @type {Array<ImageDTO>}
     * @memberof MaintenanceFormDTO
     */
    images?: Array<ImageDTO> | null;

    /**
     * @type {DocumentDTO}
     * @memberof MaintenanceFormDTO
     */
    document?: DocumentDTO;

    /**
     * @type {number}
     * @memberof MaintenanceFormDTO
     */
    costLobour?: number;
}
