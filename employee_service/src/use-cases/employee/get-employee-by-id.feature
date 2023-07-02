Feature: get Employee By Id.

  Scenario Outline: Try to get employee with invalid details, then it will throw error.
    Given Employee details employeeId: '<employeeId>' to get employee
    When Try to get employee
    Then It will throw error: "<error>" with message: "<message>" while getting employee
    # And GetEmployeesDetailByEmail function will call <getEmployeesDetailByEmailFunctionCallCount> time while creating new employee
    # And getEmployeesDetailByMobile function will call <getEmployeesDetailByMobileFunctionCallCount> time while creating new employee
    # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new employee
    # And createEmployee function will call <createEmployeeFunctionCallCount> time while creating new employee
  Examples:
      | EmployeeId   | error           | message                    |
      |             | Error           | '"employeeId" is required'  |
      | 234         | Error           | '"employeeId" is not valid  |
      | abc         | Error           | '"employeeId" must be number|

Scenario Outline: Try to get employee with valid inputs, then it will success.
    Given Employee details employeeId: <employeeId> to get employee
    When Try to get employee
    Then get employee successfully message:<message>

    Examples:
      |     employeeId |message|
      |         1     |'get employee successfully' | 