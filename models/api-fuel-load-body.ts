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
 * @interface ApiFuelLoadBody
 */
export interface ApiFuelLoadBody {

    /**
     * @type {string}
     * @memberof ApiFuelLoadBody
     */
    vehicleId: string;

    /**
     * @type {string}
     * @memberof ApiFuelLoadBody
     */
    chargeDate: string;

    /**
     * @type {string}
     * @memberof ApiFuelLoadBody
     */
    chargeHour: string;

    /**
     * @type {string}
     * @memberof ApiFuelLoadBody
     */
    reference?: string;

    /**
     * @type {boolean}
     * @memberof ApiFuelLoadBody
     */
    full?: boolean;

    /**
     * @type {boolean}
     * @memberof ApiFuelLoadBody
     */
    resetTank?: boolean;

    /**
     * @type {Array<Blob>}
     * @memberof ApiFuelLoadBody
     */
    imageFiles?: Array<Blob>;

    /**
     * @type {number}
     * @memberof ApiFuelLoadBody
     */
    providerId?: number;

    /**
     * @type {number}
     * @memberof ApiFuelLoadBody
     */
    liters: number;

    /**
     * @type {string}
     * @memberof ApiFuelLoadBody
     */
    fuelMeasureId?: string;

    /**
     * @type {string}
     * @memberof ApiFuelLoadBody
     */
    userDriverId?: string;

    /**
     * @type {number}
     * @memberof ApiFuelLoadBody
     */
    amount: number;

    /**
     * @type {number}
     * @memberof ApiFuelLoadBody
     */
    unitCost?: number;

    /**
     * @type {number}
     * @memberof ApiFuelLoadBody
     */
    odometer: number;

    /**
     * @type {number}
     * @memberof ApiFuelLoadBody
     */
    horometro?: number;

    /**
     * @type {string}
     * @memberof ApiFuelLoadBody
     */
    odometerMeasurementId: string;

    /**
     * @type {boolean}
     * @memberof ApiFuelLoadBody
     */
    summary?: boolean;
}
