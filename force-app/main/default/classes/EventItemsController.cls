global with sharing class EventItemsController {
    @AuraEnabled(cacheable=true)
    public static List<HiringEventItem__c> getAllEventItem(String eventId) {
        List<HiringEventItem__c> eventItemList = [
          SELECT 
            Id,
            Candidate__r.Id,
            Candidate__r.Name,
            Candidate__r.CodepairLink__c,
            Candidate__r.Contact__c,
            Candidate__r.Email__c,
            Candidate__r.HiringEventId__c,
            Candidate__r.InterviewLink__c,
            Candidate__r.ResumeLink__c,
            Candidate__r.Role__c,
            Candidate__r.Status__c,
            Round1__r.Id,
            R1RoundStatus__c,
            R1Interviewer__c,
            R1StartTime__c,
            R1Feedback__c,
            R1SiftLink__c,
            R1Observer__c,
            Round2__r.Id,
            R2RoundStatus__c,
            R2Interviewer__c,
            R2StartTime__c,
            R2Feedback__c,
            R2SiftLink__c,
            R2Observer__c,
            Round3__r.Id,
            R3RoundStatus__c,
            R3Interviewer__c,
            R3StartTime__c,
            R3Feedback__c,
            R3SiftLink__c,
            R3Observer__c
            FROM HiringEventItem__c WHERE  HiringEvent__r.Id=:eventId];
            System.debug('itemList:: '+eventItemList);
        return eventItemList;
    }

    @AuraEnabled(cacheable=true)
    public static List<HiringEventItem__c> getEventItem(String eventItemId) {
        List<HiringEventItem__c> eventItemList = [
          SELECT 
          Id,
            Candidate__r.Id,
            Candidate__r.Name,
            Candidate__r.CodepairLink__c,
            Candidate__r.Contact__c,
            Candidate__r.Email__c,
            Candidate__r.HiringEventId__c,
            Candidate__r.InterviewLink__c,
            Candidate__r.ResumeLink__c,
            Candidate__r.Role__c,
            Candidate__r.Status__c,
            Round1__r.Id,
            R1RoundStatus__c,
            R1Interviewer__c,
            R1StartTime__c,
            R1Feedback__c,
            R1SiftLink__c,
            R1Observer__c,
            Round2__r.Id,
            R2RoundStatus__c,
            R2Interviewer__c,
            R2StartTime__c,
            R2Feedback__c,
            R2SiftLink__c,
            R2Observer__c,
            Round3__r.Id,
            R3RoundStatus__c,
            R3Interviewer__c,
            R3StartTime__c,
            R3Feedback__c,
            R3SiftLink__c,
            R3Observer__c
            FROM HiringEventItem__c WHERE  Id=:eventItemId];
            System.debug('itemList:: '+eventItemList);
        return eventItemList;
    }

}