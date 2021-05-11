export class CounterService {

  logUserCount( user: number, userIdentity: string ) {
    console.log("Your " + userIdentity + " user is ", user );
  }
}
