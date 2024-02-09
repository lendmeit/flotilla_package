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

import { VehicleDTO } from './vehicle-dto';
;

/**
 * 
 *
 * @export
 * @interface IncidentDTO
 */
export interface IncidentDTO {

    /**
     * @type {string}
     * @memberof IncidentDTO
     */
    id?: string | null;

    /**
     * @type {string}
     * @memberof IncidentDTO
     */
    name?: string | null;

    /**
     * @type {string}
     * @memberof IncidentDTO
     */
    code?: string | null;

    /**
     * @type {string}
     * @memberof IncidentDTO
     */
    description?: string | null;

    /**
     * @type {string}
     * @memberof IncidentDTO
     */
    vehicleId?: string | null;

    /**
     * @type {VehicleDTO}
     * @memberof IncidentDTO
     */
    vehicle?: VehicleDTO;
}
