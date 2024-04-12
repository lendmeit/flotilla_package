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
 * @interface EditIdBody
 */
export interface EditIdBody {

    /**
     * @type {Array<string>}
     * @memberof EditIdBody
     */
    imagesToRemove?: Array<string>;

    /**
     * @type {string}
     * @memberof EditIdBody
     */
    vehicleId: string;

    /**
     * @type {string}
     * @memberof EditIdBody
     */
    chargeDate: string;

    /**
     * @type {string}
     * @memberof EditIdBody
     */
    chargeHour: string;

    /**
     * @type {string}
     * @memberof EditIdBody
     */
    reference?: string;

    /**
     * @type {boolean}
     * @memberof EditIdBody
     */
    full?: boolean;

    /**
     * @type {boolean}
     * @memberof EditIdBody
     */
    resetTank?: boolean;

    /**
     * @type {Array<Blob>}
     * @memberof EditIdBody
     */
    imageFiles?: Array<Blob>;

    /**
     * @type {number}
     * @memberof EditIdBody
     */
    providerId?: number;

    /**
     * @type {number}
     * @memberof EditIdBody
     */
    liters: number;

    /**
     * @type {string}
     * @memberof EditIdBody
     */
    fuelMeasureId?: string;

    /**
     * @type {string}
     * @memberof EditIdBody
     */
    userDriverId?: string;

    /**
     * @type {number}
     * @memberof EditIdBody
     */
    amount: number;

    /**
     * @type {number}
     * @memberof EditIdBody
     */
    unitCost?: number;

    /**
     * @type {number}
     * @memberof EditIdBody
     */
    odometer: number;

    /**
     * @type {string}
     * @memberof EditIdBody
     */
    odometerMeasurementId: string;

    /**
     * @type {boolean}
     * @memberof EditIdBody
     */
    summary?: boolean;
}
