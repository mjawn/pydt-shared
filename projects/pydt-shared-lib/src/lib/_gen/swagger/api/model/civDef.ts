/**
 * serverless-api
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CivDefOptions } from './civDefOptions';


export interface CivDef { 
    civKey: string;
    leaderKey: string;
    imageFileName: string;
    fullDisplayName: string;
    civDisplayName: string;
    leaderDisplayName: string;
    options: CivDefOptions;
}
