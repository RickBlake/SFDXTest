public with sharing class AccountController {
  //Returns a list of all accounts
  @AuraEnabled
  public static List<Account> findAll() {

    String debug = 'lalalla';
    debug = 'test';

    List<Account> accounts = [
      SELECT Id, Name, Location__Latitude__s, Location__Longitude__s
      FROM Account
      WHERE Location__Latitude__s != NULL 
      AND Location__Longitude__s != NULL LIMIT 50
    ];
    return accounts;
  }
}
