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

import { ReminderDTO } from './reminder-dto';
 /**
 * 
 *
 * @export
 * @interface ReminderDTOPagedResult
 */
export interface ReminderDTOPagedResult {

    /**
     * @type {number}
     * @memberof ReminderDTOPagedResult
     */
    totalCount?: number;

    /**
     * @type {number}
     * @memberof ReminderDTOPagedResult
     */
    pageNumber?: number;

    /**
     * @type {number}
     * @memberof ReminderDTOPagedResult
     */
    recordNumber?: number;

    /**
     * @type {number}
     * @memberof ReminderDTOPagedResult
     */
    totalPages?: number;

    /**
     * @type {Array<ReminderDTO>}
     * @memberof ReminderDTOPagedResult
     */
    items?: Array<ReminderDTO> | null;
}
