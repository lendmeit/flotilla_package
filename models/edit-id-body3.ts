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

 /**
 * 
 *
 * @export
 * @interface EditIdBody3
 */
export interface EditIdBody3 {

    /**
     * @type {Array<string>}
     * @memberof EditIdBody3
     */
    photosToRemove?: Array<string>;

    /**
     * @type {string}
     * @memberof EditIdBody3
     */
    VIN: string;

    /**
     * @type {string}
     * @memberof EditIdBody3
     */
    machineId: string;

    /**
     * @type {string}
     * @memberof EditIdBody3
     */
    description: string;

    /**
     * @type {string}
     * @memberof EditIdBody3
     */
    economicNumber: string;

    /**
     * @type {string}
     * @memberof EditIdBody3
     */
    assignedId?: string;

    /**
     * @type {string}
     * @memberof EditIdBody3
     */
    brandId?: string;

    /**
     * @type {string}
     * @memberof EditIdBody3
     */
    modelId?: string;

    /**
     * @type {number}
     * @memberof EditIdBody3
     */
    modelYear?: number;

    /**
     * @type {string}
     * @memberof EditIdBody3
     */
    engineId?: string;

    /**
     * @type {string}
     * @memberof EditIdBody3
     */
    placas?: string;

    /**
     * @type {number}
     * @memberof EditIdBody3
     */
    drillRigId?: number;

    /**
     * @type {string}
     * @memberof EditIdBody3
     */
    policyId?: string;

    /**
     * @type {string}
     * @memberof EditIdBody3
     */
    incisoId?: string;

    /**
     * @type {string}
     * @memberof EditIdBody3
     */
    packagePolicyId?: string;

    /**
     * @type {string}
     * @memberof EditIdBody3
     */
    measureId?: string;

    /**
     * @type {string}
     * @memberof EditIdBody3
     */
    fuelMeasureId?: string;

    /**
     * @type {string}
     * @memberof EditIdBody3
     */
    fuelTypeId?: string;

    /**
     * @type {string}
     * @memberof EditIdBody3
     */
    companyId?: string;

    /**
     * @type {string}
     * @memberof EditIdBody3
     */
    categoryId: string;

    /**
     * @type {number}
     * @memberof EditIdBody3
     */
    tankSize?: number;

    /**
     * @type {boolean}
     * @memberof EditIdBody3
     */
    active?: boolean;

    /**
     * @type {Array<Blob>}
     * @memberof EditIdBody3
     */
    photographsFiles?: Array<Blob>;

    /**
     * @type {Blob}
     * @memberof EditIdBody3
     */
    billFile?: Blob;

    /**
     * @type {Blob}
     * @memberof EditIdBody3
     */
    pedimentoFile?: Blob;
}
