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

import { MaintenanceFormDTO } from './maintenance-form-dto';
import { SelectDTO } from './select-dto';
import { SelectVehicleDTO } from './select-vehicle-dto';
 /**
 * 
 *
 * @export
 * @interface MaintenanceNewEditDTO
 */
export interface MaintenanceNewEditDTO {

    /**
     * @type {string}
     * @memberof MaintenanceNewEditDTO
     */
    odometer?: string | null;

    /**
     * @type {string}
     * @memberof MaintenanceNewEditDTO
     */
    maintenanceId?: string | null;

    /**
     * @type {MaintenanceFormDTO}
     * @memberof MaintenanceNewEditDTO
     */
    maintenance?: MaintenanceFormDTO;

    /**
     * @type {Array<SelectDTO>}
     * @memberof MaintenanceNewEditDTO
     */
    services?: Array<SelectDTO> | null;

    /**
     * @type {Array<SelectDTO>}
     * @memberof MaintenanceNewEditDTO
     */
    maintenanceGroups?: Array<SelectDTO> | null;

    /**
     * @type {Array<SelectVehicleDTO>}
     * @memberof MaintenanceNewEditDTO
     */
    vehicles?: Array<SelectVehicleDTO> | null;

    /**
     * @type {Array<SelectDTO>}
     * @memberof MaintenanceNewEditDTO
     */
    maintenanceTypes?: Array<SelectDTO> | null;

    /**
     * @type {Array<SelectDTO>}
     * @memberof MaintenanceNewEditDTO
     */
    providers?: Array<SelectDTO> | null;
}