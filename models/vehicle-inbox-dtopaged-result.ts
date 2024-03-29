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

import { VehicleInboxDTO } from './vehicle-inbox-dto';
 /**
 * 
 *
 * @export
 * @interface VehicleInboxDTOPagedResult
 */
export interface VehicleInboxDTOPagedResult {

    /**
     * @type {number}
     * @memberof VehicleInboxDTOPagedResult
     */
    totalCount?: number;

    /**
     * @type {number}
     * @memberof VehicleInboxDTOPagedResult
     */
    pageNumber?: number;

    /**
     * @type {number}
     * @memberof VehicleInboxDTOPagedResult
     */
    recordNumber?: number;

    /**
     * @type {number}
     * @memberof VehicleInboxDTOPagedResult
     */
    totalPages?: number;

    /**
     * @type {Array<VehicleInboxDTO>}
     * @memberof VehicleInboxDTOPagedResult
     */
    items?: Array<VehicleInboxDTO> | null;
}
