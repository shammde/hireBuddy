import { LightningElement ,wire, api, track} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getMyUpcomingRound from '@salesforce/apex/HireBuddyController.getMyUpcomingRound';
import getMyTodayEvent from '@salesforce/apex/HireBuddyController.getMyTodayEvent';
import getCurrentUserName from '@salesforce/apex/HireBuddyController.getCurrentUserName';
import setInterviewerStatus from '@salesforce/apex/HireBuddyController.setInterviewerStatus';
import getInterviewerStatus from '@salesforce/apex/HireBuddyController.getInterviewerStatus';
export default class InterviewerScreen extends NavigationMixin(LightningElement) {

    @wire(getMyUpcomingRound) roundList;
    @wire(getMyTodayEvent) myTodayEvent;
    @wire(getCurrentUserName) currentUser;
    //@wire(getInterviewerStatus) 
    @track currentStatus;
   
    options = [
        { label: '     Unavailable', value: 'Unavailable' },
        { label: '     Available', value: 'Available' },
        { label: '     Interviewing', value: 'Interviewing' },
    ];

    /*get capitalizedGreeting() {
        return `Welcome ${this.greeting.toUpperCase()}!`;
    }*/

    connectedCallback()
    {
        getInterviewerStatus().then(result => {
            this.currentStatus = result;
        }).catch(error => {
			this.error = error;
		}) 
    }
    handleStatusChange(event) {
        var selectedStatus = event.target.value;
        console.log('Option selected with value: ' + selectedStatus);
        setInterviewerStatus({status:selectedStatus});
    }

    handleEventBoardNavigate(event){
        console.log('EventId: '+this.myTodayEvent.data);
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Event_Dashboard',
            },
            state: {
                c__recordId: this.myTodayEvent.data
            }
        });
    }

    handleRoundNavigate(event) {
       /* var roundId = event.currentTarget.dataset.id;
        const navConfig = {
            type: "standard__component",
            attributes: {
              componentName: "c__interviewDetails"
            },
            state: {
               c__recordId:  roundId
            }
          };
      

        //4. Invoke Naviate method
    this[NavigationMixin.Navigate](navConfig); */
        // Generate a URL to a User record page
        var funActID = event.currentTarget.dataset.id;
         

       this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                //recordId: funActID,
                apiName: 'Assigned_Rounds',
                actionName: 'new',
                //actionName: 'view',
            },
            state: {
                c__recordId: funActID            }
        }).then((url) => {
            this.recordPageUrl = url;
        })
        ; 
    }

    /*handleRoundNavigation(event){
        event.preventDefault();
        var funActID = event.currentTarget.dataset.id;
        
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: funActID,
                objectApiName: 'Round__c',
                actionName: 'view'
            }
        });
        
    }*/
    
   
}