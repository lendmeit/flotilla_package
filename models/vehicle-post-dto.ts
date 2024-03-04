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
 * @interface VehiclePostDTO
 */
export interface VehiclePostDTO {

    /**
     * @type {string}
     * @memberof VehiclePostDTO
     */
    vin: string;

    /**
     * @type {string}
     * @memberof VehiclePostDTO
     */
    machineId: string;

    /**
     * @type {string}
     * @memberof VehiclePostDTO
     */
    economicNumber: string;

    /**
     * @type {string}
     * @memberof VehiclePostDTO
     */
    assignedId?: string | null;

    /**
     * @type {string}
     * @memberof VehiclePostDTO
     */
    brandId?: string | null;

    /**
     * @type {string}
     * @memberof VehiclePostDTO
     */
    modelId?: string | null;

    /**
     * @type {number}
     * @memberof VehiclePostDTO
     */
    modelYear?: number;

    /**
     * @type {string}
     * @memberof VehiclePostDTO
     */
    engineId?: string | null;

    /**
     * @type {string}
     * @memberof VehiclePostDTO
     */
    placas?: string | null;

    /**
     * @type {number}
     * @memberof VehiclePostDTO
     */
    drillRigId?: number;

    /**
     * @type {string}
     * @memberof VehiclePostDTO
     */
    policyId?: string | null;

    /**
     * @type {string}
     * @memberof VehiclePostDTO
     */
    incisoId?: string | null;

    /**
     * @type {string}
     * @memberof VehiclePostDTO
     */
    packagePolicyId?: string | null;

    /**
     * @type {string}
     * @memberof VehiclePostDTO
     */
    measureId?: string | null;

    /**
     * @type {string}
     * @memberof VehiclePostDTO
     */
    fuelMeasureId?: string | null;

    /**
     * @type {string}
     * @memberof VehiclePostDTO
     */
    fuelTypeId?: string | null;

    /**
     * @type {number}
     * @memberof VehiclePostDTO
     */
    tankSize?: number;

    /**
     * @type {boolean}
     * @memberof VehiclePostDTO
     */
    active?: boolean;

    /**
     * @type {Array<Blob>}
     * @memberof VehiclePostDTO
     */
    photographsFiles?: Array<Blob> | null;

    /**
     * @type {Blob}
     * @memberof VehiclePostDTO
     */
    billFile?: Blob | null;

    /**
     * @type {Blob}
     * @memberof VehiclePostDTO
     */
    pedimentoFile?: Blob | null;
}