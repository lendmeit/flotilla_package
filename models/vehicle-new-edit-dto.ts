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

import { SelectDTO } from './select-dto';
import { VehiclePostDTO } from './vehicle-post-dto';
 /**
 * 
 *
 * @export
 * @interface VehicleNewEditDTO
 */
export interface VehicleNewEditDTO {

    /**
     * @type {VehiclePostDTO}
     * @memberof VehicleNewEditDTO
     */
    vehicle?: VehiclePostDTO;

    /**
     * @type {Array<SelectDTO>}
     * @memberof VehicleNewEditDTO
     */
    users?: Array<SelectDTO> | null;

    /**
     * @type {Array<SelectDTO>}
     * @memberof VehicleNewEditDTO
     */
    brands?: Array<SelectDTO> | null;

    /**
     * @type {Array<SelectDTO>}
     * @memberof VehicleNewEditDTO
     */
    categories?: Array<SelectDTO> | null;

    /**
     * @type {Array<SelectDTO>}
     * @memberof VehicleNewEditDTO
     */
    models?: Array<SelectDTO> | null;

    /**
     * @type {Array<SelectDTO>}
     * @memberof VehicleNewEditDTO
     */
    engines?: Array<SelectDTO> | null;

    /**
     * @type {Array<SelectDTO>}
     * @memberof VehicleNewEditDTO
     */
    policies?: Array<SelectDTO> | null;

    /**
     * @type {Array<SelectDTO>}
     * @memberof VehicleNewEditDTO
     */
    incisos?: Array<SelectDTO> | null;

    /**
     * @type {Array<SelectDTO>}
     * @memberof VehicleNewEditDTO
     */
    packagePolicies?: Array<SelectDTO> | null;

    /**
     * @type {Array<SelectDTO>}
     * @memberof VehicleNewEditDTO
     */
    measures?: Array<SelectDTO> | null;

    /**
     * @type {Array<SelectDTO>}
     * @memberof VehicleNewEditDTO
     */
    fuelMeasures?: Array<SelectDTO> | null;

    /**
     * @type {Array<SelectDTO>}
     * @memberof VehicleNewEditDTO
     */
    fuelTypes?: Array<SelectDTO> | null;
}
