# Feature: Check Permission.

#   Scenario Outline: Try to check permission with invalid details, then it will throw error.
#     Given Permission details employee_id:"<employee_id>",permission:"<permission>" to check permission
#     When Try to check permission
#     Then It will throw error: "<error>" with message: "<message>" while creating new permission
#     # And GetPermissionsDetailByEmail function will call <getPermissionsDetailByEmailFunctionCallCount> time while creating new permission
#     # And getPermissionsDetailByMobile function will call <getPermissionsDetailByMobileFunctionCallCount> time while creating new permission
#     # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new permission
#     # And createPermission function will call <createPermissionFunctionCallCount> time while creating new permission

#     Examples:
#       | employee_id                              | permission  | getPermissionsDetailByEmailFunctionCallCount  | getPermissionsDetailByMobileFunctionCallCount | encryptPasswordFunctionCallCount | createPermissionFunctionCallCount | error           | message                                                |
#       |                                          |             |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"user_id\" is required"                                   |
#       | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     |             |  0                                      | 0                                       | 0                                | 0                           | ValidationError | "\"jwt_token\" is required"                                  |
    
      

#   Scenario Outline: Try to check permission with valid inputs, then it will return true.
#     Given Permission details employee_id:"<employee_id>",permission:"<permission>" to check permission
#     When Try to check permission
#     Then It will check permission with details: "<newPermissionDetails>"
#     # And GetPermissionsDetailByEmail function will call <getPermissionsDetailByEmailFunctionCallCount> time while creating new permission
#     # And getPermissionsDetailByMobile function will call <getPermissionsDetailByMobileFunctionCallCount> time while creating new permission
#     # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new permission
#     # And createPermission function will call <createPermissionFunctionCallCount> time while creating new permission
#  Examples:
#       | employee_id                              | permission              | getPermissionsDetailByEmailFunctionCallCount | getPermissionsDetailByMobileFunctionCallCount | encryptPasswordFunctionCallCount | createPermissionFunctionCallCount | newPermissionDetails |                                                 
    
#       | d8cfe36a-81f5-4d96-8a54-4ac923cb012c     | eyJhbGciOiJIUzI1  |  0                                      | 0                                       | 0                                | 0                             | '{"id": 1}'  | 
