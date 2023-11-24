declare module "@salesforce/apex/ElderlyCare.saveImageFile" {
  export default function saveImageFile(param: {imageUrl: any, recordId: any, imagetitle: any, imageDescription: any}): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCare.getEventValue" {
  export default function getEventValue(param: {recid: any}): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCare.updateStatusEvent" {
  export default function updateStatusEvent(param: {eventRecordId: any, selectedButton: any}): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCare.createClockInRecord" {
  export default function createClockInRecord(param: {eventRecordId: any, Buttonlabel: any}): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCare.createTimeSheetRecord" {
  export default function createTimeSheetRecord(param: {listEvent: any}): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCare.getContact" {
  export default function getContact(param: {contactRecord: any}): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCare.getTImeSheet" {
  export default function getTImeSheet(param: {timesheetRecord: any}): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCare.getProductLineItem" {
  export default function getProductLineItem(param: {productLineItemRecord: any}): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCare.getEventDetails" {
  export default function getEventDetails(param: {eventRecordId: any}): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCare.getriskAlertDetails" {
  export default function getriskAlertDetails(): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCare.getRiskAlertdetails1" {
  export default function getRiskAlertdetails1(param: {eventRecordId: any, riskLabel: any}): Promise<any>;
}
