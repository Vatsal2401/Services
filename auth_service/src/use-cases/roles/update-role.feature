Feature: update Role By Id.

  Scenario Outline: Try to update role with invalid details, then it will throw error.
    Given Role details companyId:"<companyId>",permission:"<permission>",isMaster:"<isMaster>",name:"<name>",roleId:"<roleId>" to update role
    When Try to update role
    Then It will throw error:"<error>" with message:"<message>" while updating role
    # And GetRolesDetailByEmail function will call <getRolesDetailByEmailFunctionCallCount> time while creating new role
    # And getRolesDetailByMobile function will call <getRolesDetailByMobileFunctionCallCount> time while creating new role
    # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new role
    # And createRole function will call <createRoleFunctionCallCount> time while creating new role
   Examples:
      | companyId                                | permission        | isMaster                            | name          | roleId              | getRolesDetailByEmailFunctionCallCount  | getRolesDetailByMobileFunctionCallCount | encryptPasswordFunctionCallCount | createRoleFunctionCallCount | error           | message                                                |
      |                                          |                   |                                     |               |                     |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"companyId\" is required"                                   |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     |                   |                                     |               |                     |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"permission\" is required"                                  |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | eyJhbGciOiJIUzI1  |                                     |               |                     |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"isMaster\" is required"                        |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | eyJhbGciOiJIUzI1  | true                                |               |                     |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"name\" is required"                                 |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | eyJhbGciOiJIUzI1  | true                                | Mozilla/5.0   |                     |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"roleId\" is required"                              |
      | d8cfe36a-81f5-4d96-8a5                   | eyJhbGciOiJIUzI1  | true                                | Mozilla/5.0   |                     |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"companyId\" must be a valid GUID" |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | eyJhbGciOiJIUzI1  | fcghjbklm                           | Mozilla/5.0   |                     |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"isMaster\" must be a boolean"                              |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | eyJhbGciOiJIUzI1  | false                               | Mozilla/5.0   |d8cfe36a-81f5-4d9    |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"roleId\" must be a valid GUID"|
# Scenario Outline: Try to update role with valid inputs, then it will success.
#     Given Role details roleId:'<roleId>' to update role
#     When  Try to update role
#     Then  update role successfully message:"<message>"

#     Examples: 
#      | companyId                                | permission        | isMaster                           | name          | roleId            | message                  |
#      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | eyJhbGciOiJIUzI1  | fa1507c0-05f6-11ee-aacd-d5f50a890398| Mozilla/5.0   | 103.217.84.112     | update role successfully | 