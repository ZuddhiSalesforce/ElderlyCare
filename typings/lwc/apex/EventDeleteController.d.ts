declare module "@salesforce/apex/EventDeleteController.deleteEvent" {
  export default function deleteEvent(param: {eventId: any}): Promise<any>;
}
declare module "@salesforce/apex/EventDeleteController.EventStatus" {
  export default function EventStatus(param: {recordId: any, newStatus: any}): Promise<any>;
}
