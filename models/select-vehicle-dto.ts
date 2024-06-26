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

import { CategoryTypeEnum } from './category-type-enum';
 /**
 * 
 *
 * @export
 * @interface SelectVehicleDTO
 */
export interface SelectVehicleDTO {

    /**
     * @type {string}
     * @memberof SelectVehicleDTO
     */
    key?: string | null;

    /**
     * @type {string}
     * @memberof SelectVehicleDTO
     */
    value?: string | null;

    /**
     * @type {string}
     * @memberof SelectVehicleDTO
     */
    vin?: string | null;

    /**
     * @type {string}
     * @memberof SelectVehicleDTO
     */
    placas?: string | null;

    /**
     * @type {string}
     * @memberof SelectVehicleDTO
     */
    economicNumber?: string | null;

    /**
     * @type {string}
     * @memberof SelectVehicleDTO
     */
    fuelType?: string | null;

    /**
     * @type {CategoryTypeEnum}
     * @memberof SelectVehicleDTO
     */
    categoryType?: CategoryTypeEnum;
}
