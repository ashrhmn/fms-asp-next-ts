export interface ICity {
  Id: number;
  Name: string;
  Country: string;
  Stoppages: IStoppage[];
}

export interface IStoppage {
  Id: number;
  Name: string;
  CityId: number;
  RouteIndex: number;
  FareFromRoot: number;
  City: ICity;
}

export interface ITransport {
  Id: number;
  Name: string;
  MaximumSeat: number;
  CreatedBy: number;
  SeatInfos: ISeatInfo[];
}

export interface IFlight {
  Id: number;
  TransportId: number;
  FromStoppageId: number;
  ToStoppageId: number;
  Day: string;
  Time: number;
  Date: string;
  Transport: ITransport;
  FromStoppage: IStoppage;
  ToStoppage: IStoppage;
}

export interface ISeatInfo {
  Id: number;
  StartTime: string;
  SeatNo: number;
  TicketId: number;
  TransportId: number;
  AgeClassEnum: AgeClassEnum;
  SeatClassEnum: SeatClassEnum;
  Status: string;
}

export interface AgeClassEnum {
  Id: number;
  Value: string;
}

export interface SeatClassEnum extends AgeClassEnum {}
export interface RoleClassEnum extends AgeClassEnum {}

export interface IUser {
  Id: number;
  Username: string;
  Name: string;
  DateOfBirth: string;
  FamilyId: number;
  Address: string;
  CityId: number;
  Email: string;
  Verified: boolean;
  Phone: string;
  RoleEnum: RoleClassEnum;
  City: ICity;
}
