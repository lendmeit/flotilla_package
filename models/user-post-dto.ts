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

;

/**
 * 
 *
 * @export
 * @interface UserPostDTO
 */
export interface UserPostDTO {

    /**
     * @type {string}
     * @memberof UserPostDTO
     */
    email: string;

    /**
     * @type {string}
     * @memberof UserPostDTO
     */
    password: string;

    /**
     * @type {string}
     * @memberof UserPostDTO
     */
    firstName?: string | null;

    /**
     * @type {string}
     * @memberof UserPostDTO
     */
    lastName?: string | null;

    /**
     * @type {string}
     * @memberof UserPostDTO
     */
    roleName?: string | null;
}