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
 * @interface VehiclePutDTO
 */
export interface VehiclePutDTO {

    /**
     * @type {string}
     * @memberof VehiclePutDTO
     */
    vin: string;

    /**
     * @type {string}
     * @memberof VehiclePutDTO
     */
    machineId: string;

    /**
     * @type {string}
     * @memberof VehiclePutDTO
     */
    description: string;

    /**
     * @type {string}
     * @memberof VehiclePutDTO
     */
    economicNumber: string;

    /**
     * @type {string}
     * @memberof VehiclePutDTO
     */
    assignedId?: string | null;

    /**
     * @type {string}
     * @memberof VehiclePutDTO
     */
    brandId?: string | null;

    /**
     * @type {string}
     * @memberof VehiclePutDTO
     */
    modelId?: string | null;

    /**
     * @type {number}
     * @memberof VehiclePutDTO
     */
    modelYear?: number;

    /**
     * @type {string}
     * @memberof VehiclePutDTO
     */
    engineId?: string | null;

    /**
     * @type {string}
     * @memberof VehiclePutDTO
     */
    placas?: string | null;

    /**
     * @type {number}
     * @memberof VehiclePutDTO
     */
    drillRigId?: number;

    /**
     * @type {string}
     * @memberof VehiclePutDTO
     */
    policyId?: string | null;

    /**
     * @type {string}
     * @memberof VehiclePutDTO
     */
    incisoId?: string | null;

    /**
     * @type {string}
     * @memberof VehiclePutDTO
     */
    packagePolicyId?: string | null;

    /**
     * @type {string}
     * @memberof VehiclePutDTO
     */
    measureId?: string | null;

    /**
     * @type {string}
     * @memberof VehiclePutDTO
     */
    fuelMeasureId?: string | null;

    /**
     * @type {string}
     * @memberof VehiclePutDTO
     */
    fuelTypeId?: string | null;

    /**
     * @type {number}
     * @memberof VehiclePutDTO
     */
    tankSize?: number;

    /**
     * @type {boolean}
     * @memberof VehiclePutDTO
     */
    active?: boolean;

    /**
     * @type {Array<Blob>}
     * @memberof VehiclePutDTO
     */
    photographsFiles?: Array<Blob> | null;

    /**
     * @type {Blob}
     * @memberof VehiclePutDTO
     */
    billFile?: Blob | null;

    /**
     * @type {Blob}
     * @memberof VehiclePutDTO
     */
    pedimentoFile?: Blob | null;

    /**
     * @type {Array<string>}
     * @memberof VehiclePutDTO
     */
    photosToRemove?: Array<string> | null;
}
