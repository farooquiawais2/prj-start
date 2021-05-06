import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

/*
Add meta data for accessing service into service
Like @components({directive})
*/
@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();
  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push( { name: name, status: status } );
    this.loggingService.logStatusChanged( status );
  }

  updateStatus( id: number, newStatus: string ) {
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChanged( newStatus );
  }
}
