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

import { CategoryDTO } from './category-dto';
 /**
 * 
 *
 * @export
 * @interface CategoryDTOPagedResult
 */
export interface CategoryDTOPagedResult {

    /**
     * @type {number}
     * @memberof CategoryDTOPagedResult
     */
    totalCount?: number;

    /**
     * @type {number}
     * @memberof CategoryDTOPagedResult
     */
    pageNumber?: number;

    /**
     * @type {number}
     * @memberof CategoryDTOPagedResult
     */
    recordNumber?: number;

    /**
     * @type {number}
     * @memberof CategoryDTOPagedResult
     */
    totalPages?: number;

    /**
     * @type {Array<CategoryDTO>}
     * @memberof CategoryDTOPagedResult
     */
    items?: Array<CategoryDTO> | null;
}
