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

import { PolicyPacketDTO } from './policy-packet-dto';
 /**
 * 
 *
 * @export
 * @interface PolicyPacketDTOPagedResult
 */
export interface PolicyPacketDTOPagedResult {

    /**
     * @type {number}
     * @memberof PolicyPacketDTOPagedResult
     */
    totalCount?: number;

    /**
     * @type {number}
     * @memberof PolicyPacketDTOPagedResult
     */
    pageNumber?: number;

    /**
     * @type {number}
     * @memberof PolicyPacketDTOPagedResult
     */
    recordNumber?: number;

    /**
     * @type {number}
     * @memberof PolicyPacketDTOPagedResult
     */
    totalPages?: number;

    /**
     * @type {Array<PolicyPacketDTO>}
     * @memberof PolicyPacketDTOPagedResult
     */
    items?: Array<PolicyPacketDTO> | null;
}
