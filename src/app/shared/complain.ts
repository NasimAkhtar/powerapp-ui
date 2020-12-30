export class Complain {
  constructor(public id: number,
              public name: string,
              public mobile: number,
              public address: string,
              public problemDescription: string,
              public warrantyStatement: string,
              public registrationDateTime: string,
              public onSiteArrivalDateTime: string,
              public requiredParts: string,
              public suppliedParts: string,
              public returnedParts: string,
              public resolutionDateTime: string,
              public engineer: string,
              public remarks: string) {
  }
}
