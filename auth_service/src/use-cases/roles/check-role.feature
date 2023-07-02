# Feature: Check Role.

#   Scenario Outline: Try to check role with invalid details, then it will throw error.
#     Given Role details employee_id:"<employee_id>",name:"<name>" to check role
#     When Try to check role
#     Then It will throw error: "<error>" with message: "<message>" while creating new role
#     # And GetRolesDetailByEmail function will call <getRolesDetailByEmailFunctionCallCount> time while creating new role
#     # And getRolesDetailByMobile function will call <getRolesDetailByMobileFunctionCallCount> time while creating new role
#     # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new role
#     # And createRole function will call <createRoleFunctionCallCount> time while creating new role

#     Examples:
#       | employee_id                              | name  | getRolesDetailByEmailFunctionCallCount  | getRolesDetailByMobileFunctionCallCount | encryptPasswordFunctionCallCount | createRoleFunctionCallCount | error           | message                                                |
#       |                                          |       |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"user_id\" is required"                                   |
#       | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     |       |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"jwt_token\" is required"                                  |
    
      

#   Scenario Outline: Try to check role with valid inputs, then it will return true.
#     Given Role details employee_id:"<employee_id>",name:"<name>" to check role
#     When Try to check role
#     Then It will check role with details: "<newRoleDetails>"
#     # And GetRolesDetailByEmail function will call <getRolesDetailByEmailFunctionCallCount> time while creating new role
#     # And getRolesDetailByMobile function will call <getRolesDetailByMobileFunctionCallCount> time while creating new role
#     # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new role
#     # And createRole function will call <createRoleFunctionCallCount> time while creating new role
#  Examples:
#       | employee_id                              | name              | getRolesDetailByEmailFunctionCallCount | getRolesDetailByMobileFunctionCallCount | encryptPasswordFunctionCallCount | createRoleFunctionCallCount | newRoleDetails |                                                 
    
#       | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | eyJhbGciOiJIUzI1  |  0                                      | 0                                       | 0                                | 0                             | '{"id": 1}'  | 
