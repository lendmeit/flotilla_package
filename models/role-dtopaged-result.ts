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

import { RoleDTO } from './role-dto';
 /**
 * 
 *
 * @export
 * @interface RoleDTOPagedResult
 */
export interface RoleDTOPagedResult {

    /**
     * @type {number}
     * @memberof RoleDTOPagedResult
     */
    totalCount?: number;

    /**
     * @type {number}
     * @memberof RoleDTOPagedResult
     */
    pageNumber?: number;

    /**
     * @type {number}
     * @memberof RoleDTOPagedResult
     */
    recordNumber?: number;

    /**
     * @type {number}
     * @memberof RoleDTOPagedResult
     */
    totalPages?: number;

    /**
     * @type {Array<RoleDTO>}
     * @memberof RoleDTOPagedResult
     */
    items?: Array<RoleDTO> | null;
}
