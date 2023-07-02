Feature: Create New Role.

  Scenario Outline: Try to create new role with invalid details, then it will throw error.
    Given Role details companyId:"<companyId>",permission:"<permission>",isMaster:"<isMaster>",name:"<name>",employeeId:"<employeeId>" to create new role
    When Try to create new role
    Then It will throw error: "<error>" with message: "<message>" while creating new role
    # And GetRolesDetailByEmail function will call <getRolesDetailByEmailFunctionCallCount> time while creating new role
    # And getRolesDetailByMobile function will call <getRolesDetailByMobileFunctionCallCount> time while creating new role
    # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new role
    # And createRole function will call <createRoleFunctionCallCount> time while creating new role

    Examples:
      | companyId                               | permission        | isMaster                           | name          | employeeId          | getRolesDetailByEmailFunctionCallCount  | getRolesDetailByMobileFunctionCallCount | encryptPasswordFunctionCallCount | createRoleFunctionCallCount | error           | message                                                |
      |                                          |                   |                                   |               |                     |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"companyId\" is required"                            |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     |                   |                                   |               |                     |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"permission\" is required"                           |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | eyJhbGciOiJIUzI1  |                                   |               |                     |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"isMaster\" is required"                             |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | eyJhbGciOiJIUzI1  | true                              |               |                     |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"name\" is required"                                 |
      | d8cfe36f5-4d96-8a54-4ac923cb012c         | eyJhbGciOiJIUzI1  | true                              |               |                     |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"companyId\" must be a valid GUID"                   |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | eyJhbGciOiJIUzI1  |     jkjkjgt                       |   vatsal      |                     |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"isMaster\" must be a boolean"                       |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | eyJhbGciOiJIUzI1  |     false                         |   vatsal       |   dfghj             |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"employeeId\" must be a valid GUID"                  |
          
#   Scenario Outline: Try to create new role with valid inputs, then it will create new role.
#     Given Role details companyId:"<companyId>",permission:"<permission>",isMaster:"<isMaster>",name:"<name>",employeeId:"<employeeId>" to create new role
#     When Try to create new role
#     Then It will create new role with details: "<newRoleDetails>"
#     # And GetRolesDetailByEmail function will call <getRolesDetailByEmailFunctionCallCount> time while creating new role
#     # And getRolesDetailByMobile function will call <getRolesDetailByMobileFunctionCallCount> time while creating new role
#     # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new role
#     # And createRole function will call <createRoleFunctionCallCount> time while creating new role
#  Examples:
#       | companyId                               | permission        | isMaster                           | name          |  employeeId      | getRolesDetailByEmailFunctionCallCount | getRolesDetailByMobileFunctionCallCount | encryptPasswordFunctionCallCount | createRoleFunctionCallCount | newRoleDetails |                                                 
    
#       | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | eyJhbGciOiJIUzI1  | fa1507c0-05f6-11ee-aacd-d5f50a890398| Mozilla/5.0   | desktop           |  0                                      | 0                                       | 0                                | 0                             | '{"id": 1}'  | 
