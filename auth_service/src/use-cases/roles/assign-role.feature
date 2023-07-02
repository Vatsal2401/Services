Feature: Assign Role.

  Scenario Outline: Try assign role with invalid details, then it will throw error.
    Given Role details roleId:"<roleId>",employeeId:"<employeeId>" to assign role
    When Try to assign role
    Then It will throw error: "<error>" with message: "<message>" while assigning role
    # And GetRolesDetailByEmail function will call <getRolesDetailByEmailFunctionCallCount> time while creating new role
    # And getRolesDetailByMobile function will call <getRolesDetailByMobileFunctionCallCount> time while creating new role
    # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new role
    # And createRole function will call <createRoleFunctionCallCount> time while creating new role

    Examples:
      | roleId                                   | employeeId                                               | getRolesDetailByEmailFunctionCallCount  | getRolesDetailByMobileFunctionCallCount | encryptPasswordFunctionCallCount | createRoleFunctionCallCount | error           | message                                                |
      |                                          |                                                         |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"roleId\" is required"                                   |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     |  d8cfe36a-81f4ac923cb012c                               |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"employeeId\" must be a valid GUID"                                |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     |                                                         |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"employeeId\" is required"                       |
      | d8cfe36a-81f5c923cb012c                  | d8cfe36a-81f5-4d96-8a54-4ac923cb012c                    |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"roleId\" must be a valid GUID"                     |


  Scenario Outline: Try to  assign role with valid inputs, then it will assign role.
    Given Role details roleId:"<roleId>",employeeId:"<employeeId>" to assign role
    When Try to assign role
    Then It will assign role with details: "<newRoleDetails>"
    # And GetRolesDetailByEmail function will call <getRolesDetailByEmailFunctionCallCount> time while creating new role
    # And getRolesDetailByMobile function will call <getRolesDetailByMobileFunctionCallCount> time while creating new role
    # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new role
    # And createRole function will call <createRoleFunctionCallCount> time while creating new role
 Examples:
      | roleId                                  | employeeId       | getRolesDetailByEmailFunctionCallCount | getRolesDetailByMobileFunctionCallCount | encryptPasswordFunctionCallCount | createRoleFunctionCallCount      | newRoleDetails              |                                                 
    
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | d8cfe36a-81f5-4d96-8a54-4ac923cb012c  |  0                                      | 0                                       | 0                                | 0                             |   "assign role successfully"  | 
