Feature: Create New Company.

  Scenario Outline: Try to create new company with invalid details, then it will throw error.
    Given Company details name: "<name>" to create new company
    When Try to create new company
    Then It will throw error: "<error>" with message: "<message>" while creating new company
    # And GetUsersDetailByEmail function will call <getUsersDetailByEmailFunctionCallCount> time while creating new user
    # And getUsersDetailByMobile function will call <getUsersDetailByMobileFunctionCallCount> time while creating new user
    # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new user
    # And createUser function will call <createUserFunctionCallCount> time while creating new user

   Examples:
      | name          | error           | message                                                |
      |               | Error           | '\"companyName\" is required'                                   |
      | Ra            | Error           | '\"companyName\" length must be at least 3 characters long'                          |                            
      # | Vatsal Patel  | Error           | '"password" is required'                               |
      # | Vatsal Patel  | Error           | '"password" length must be at least 8 characters long' |
 
  Scenario Outline: Try to create new company with already registered name, then it will throw error.
    Given Company details name: "<name>" to create new company
    And   Already existed company details: "<companyDetailsByName>" with same name
    When  Try to create new company
    Then  It will throw error: "<error>" with message: "<message>" while creating new company
  #   And GetUsersDetailByEmail function will call <getUsersDetailByEmailFunctionCallCount> time while creating new user
  #   And getUsersDetailByMobile function will call <getUsersDetailByMobileFunctionCallCount> time while creating new user
  #   And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new user
  #   And createUser function will call <createUserFunctionCallCount> time while creating new user

    Examples:
      | name       | companyDetailsByName | error          | message                                      |
      | RapidOps   | '{"id":"10"}'      | Error | 'Company With This Name Already Exist' |

  
  Scenario Outline: Try to create new company with valid inputs, then it will create new company.
    Given Company details name: "<name>" to create new company
    # And Encrypted password of provided password is: "<encryptedPassword>"
    When Try to create new company
    Then It will create new company with details: "<newCompanyDetails>"
    # And GetUsersDetailByEmail function will call <getUsersDetailByEmailFunctionCallCount> time while creating new user
    # And getUsersDetailByMobile function will call <getUsersDetailByMobileFunctionCallCount> time while creating new user
    # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new user
    # And createUser function will call <createUserFunctionCallCount> time while creating new user

    Examples:
      | name         | newCompanyDetails | 
      | RapidOps123    | '{"id": 1}'    | 