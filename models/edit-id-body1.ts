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

import { MaintenanceListPartDTO } from './maintenance-list-part-dto';
import { MaintenanceServiceDTO } from './maintenance-service-dto';
 /**
 * 
 *
 * @export
 * @interface EditIdBody1
 */
export interface EditIdBody1 {

    /**
     * @type {Array<string>}
     * @memberof EditIdBody1
     */
    imagesToRemove?: Array<string>;

    /**
     * @type {string}
     * @memberof EditIdBody1
     */
    startDate: string;

    /**
     * @type {string}
     * @memberof EditIdBody1
     */
    finishDate?: string;

    /**
     * @type {string}
     * @memberof EditIdBody1
     */
    startHour: string;

    /**
     * @type {string}
     * @memberof EditIdBody1
     */
    finishHour?: string;

    /**
     * @type {string}
     * @memberof EditIdBody1
     */
    comments?: string;

    /**
     * @type {string}
     * @memberof EditIdBody1
     */
    reference?: string;

    /**
     * @type {string}
     * @memberof EditIdBody1
     */
    odometer?: string;

    /**
     * @type {string}
     * @memberof EditIdBody1
     */
    horometro?: string;

    /**
     * @type {string}
     * @memberof EditIdBody1
     */
    maintenanceTypeId?: string;

    /**
     * @type {string}
     * @memberof EditIdBody1
     */
    maintenanceGroupId?: string;

    /**
     * @type {number}
     * @memberof EditIdBody1
     */
    costLobour?: number;

    /**
     * @type {string}
     * @memberof EditIdBody1
     */
    providerId?: string;

    /**
     * @type {string}
     * @memberof EditIdBody1
     */
    vehicleId: string;

    /**
     * @type {Blob}
     * @memberof EditIdBody1
     */
    documentFile?: Blob;

    /**
     * @type {Array<Blob>}
     * @memberof EditIdBody1
     */
    imageFiles?: Array<Blob>;

    /**
     * @type {Array<MaintenanceListPartDTO>}
     * @memberof EditIdBody1
     */
    maintenanceParts?: Array<MaintenanceListPartDTO>;

    /**
     * @type {Array<MaintenanceServiceDTO>}
     * @memberof EditIdBody1
     */
    maintenanceServices?: Array<MaintenanceServiceDTO>;
}
