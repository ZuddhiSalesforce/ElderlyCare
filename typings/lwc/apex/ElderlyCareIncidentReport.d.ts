declare module "@salesforce/apex/ElderlyCareIncidentReport.getIncidentRecords" {
  export default function getIncidentRecords(): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCareIncidentReport.insertIncidentReport" {
  export default function insertIncidentReport(param: {subject: any, email: any, status: any, phone: any, client: any, type: any, priority: any, incidentdatetime: any, incidentReport: any, Description: any}): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCareIncidentReport.getIncidentValue" {
  export default function getIncidentValue(param: {incidentRecordId: any}): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCareIncidentReport.updateIncidentValue" {
  export default function updateIncidentValue(param: {incidentRecordId: any, incidentStatus: any, incidentSubject: any, incidentDescription: any}): Promise<any>;
}
