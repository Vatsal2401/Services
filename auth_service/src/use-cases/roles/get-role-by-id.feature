Feature: get Role By Id.

  Scenario Outline: Try to get role with invalid details, then it will throw error.
    Given Role details roleId: '<roleId>' to get role
    When Try to get role
    Then It will throw error: "<error>" with message: "<message>" while getting role
    # And GetRolesDetailByEmail function will call <getRolesDetailByEmailFunctionCallCount> time while creating new role
    # And getRolesDetailByMobile function will call <getRolesDetailByMobileFunctionCallCount> time while creating new role
    # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new role
    # And createRole function will call <createRoleFunctionCallCount> time while creating new role
  Examples:
      | RoleId               | error                     | message                    |
      |     null        | ValidationError           | "\"id\" must be a valid GUID"  |
      |     abc         | ValidationError                | "\"id\" must be a valid GUID" |

Scenario Outline: Try to get role with valid inputs, then it will success.
    Given Role details roleId: '<roleId>' to get role
    When Try to get role
    Then get role successfully message:<message>

    Examples:
      |     roleId                             |  message                 |
      | d8cfe36a-81f5-4d96-8a54-4ac923cb012c   |  'get role successfully' | 