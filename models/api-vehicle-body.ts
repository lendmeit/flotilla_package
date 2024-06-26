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
 * @interface ApiVehicleBody
 */
export interface ApiVehicleBody {

    /**
     * @type {string}
     * @memberof ApiVehicleBody
     */
    VIN: string;

    /**
     * @type {string}
     * @memberof ApiVehicleBody
     */
    machineId: string;

    /**
     * @type {string}
     * @memberof ApiVehicleBody
     */
    description: string;

    /**
     * @type {string}
     * @memberof ApiVehicleBody
     */
    economicNumber: string;

    /**
     * @type {string}
     * @memberof ApiVehicleBody
     */
    assignedId?: string;

    /**
     * @type {string}
     * @memberof ApiVehicleBody
     */
    brandId?: string;

    /**
     * @type {string}
     * @memberof ApiVehicleBody
     */
    modelId?: string;

    /**
     * @type {number}
     * @memberof ApiVehicleBody
     */
    modelYear?: number;

    /**
     * @type {string}
     * @memberof ApiVehicleBody
     */
    engineId?: string;

    /**
     * @type {string}
     * @memberof ApiVehicleBody
     */
    placas?: string;

    /**
     * @type {number}
     * @memberof ApiVehicleBody
     */
    drillRigId?: number;

    /**
     * @type {string}
     * @memberof ApiVehicleBody
     */
    policyId?: string;

    /**
     * @type {string}
     * @memberof ApiVehicleBody
     */
    incisoId?: string;

    /**
     * @type {string}
     * @memberof ApiVehicleBody
     */
    packagePolicyId?: string;

    /**
     * @type {string}
     * @memberof ApiVehicleBody
     */
    measureId?: string;

    /**
     * @type {string}
     * @memberof ApiVehicleBody
     */
    fuelMeasureId?: string;

    /**
     * @type {string}
     * @memberof ApiVehicleBody
     */
    fuelTypeId?: string;

    /**
     * @type {string}
     * @memberof ApiVehicleBody
     */
    companyId?: string;

    /**
     * @type {string}
     * @memberof ApiVehicleBody
     */
    categoryId: string;

    /**
     * @type {number}
     * @memberof ApiVehicleBody
     */
    tankSize?: number;

    /**
     * @type {boolean}
     * @memberof ApiVehicleBody
     */
    active?: boolean;

    /**
     * @type {Array<Blob>}
     * @memberof ApiVehicleBody
     */
    photographsFiles?: Array<Blob>;

    /**
     * @type {Blob}
     * @memberof ApiVehicleBody
     */
    billFile?: Blob;

    /**
     * @type {Blob}
     * @memberof ApiVehicleBody
     */
    pedimentoFile?: Blob;
}
