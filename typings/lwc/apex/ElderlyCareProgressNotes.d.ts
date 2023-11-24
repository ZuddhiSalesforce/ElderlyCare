declare module "@salesforce/apex/ElderlyCareProgressNotes.retriveProgressNotes" {
  export default function retriveProgressNotes(): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCareProgressNotes.retriveServiceItems" {
  export default function retriveServiceItems(param: {searchTerm: any}): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCareProgressNotes.getFilterRecords" {
  export default function getFilterRecords(param: {carerid: any, clientid: any, serviceName: any, startdate: any, enddate: any}): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCareProgressNotes.getTimeSheetRecord" {
  export default function getTimeSheetRecord(param: {eventId: any}): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCareProgressNotes.saveProgressNotes" {
  export default function saveProgressNotes(param: {timesheetRec: any, carerRecord: any, clientrecord: any, serviceRecord: any, dutyNotesStatus: any, serviceDescription: any, strSignElement: any, selectedChecklistValues: any}): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCareProgressNotes.getProgressNotesRecord" {
  export default function getProgressNotesRecord(param: {getEventId: any}): Promise<any>;
}
declare module "@salesforce/apex/ElderlyCareProgressNotes.saveAttachementsInProgressNotes" {
  export default function saveAttachementsInProgressNotes(param: {progressNotesId: any, imageUrl: any, imagetitle: any, imageDescription: any}): Promise<any>;
}
